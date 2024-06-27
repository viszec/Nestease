import { useParams } from "react-router-dom";
import "../styles/List.scss";
import { useSelector, useDispatch } from "react-redux";
import { setListings } from "../redux/state";
import { useEffect, useState, useCallback } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard_";
import Footer from "../components/Footer";

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const { search } = useParams();
  const listings = useSelector((state) => state.listings);

  const dispatch = useDispatch();

  const getSearchListings = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/properties/search/${search}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Search List failed!", err.message);
    }
  }, [dispatch, search]);

  useEffect(() => {
    getSearchListings();
  }, [getSearchListings]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />

      <div className="list-container">
        <div className="list">
          <h1 className="title">{search}</h1>
          <div className="trip_list">
            {listings?.map(
              ({
                _id,
                creator,
                listingPhotoPaths,
                city,
                province,
                country,
                category,
                type,
                price,
                booking = false,
              }) => (
                <ListingCard
                  listingId={_id}
                  creator={creator}
                  listingPhotoPaths={listingPhotoPaths}
                  city={city}
                  province={province}
                  country={country}
                  category={category}
                  type={type}
                  price={price}
                  booking={booking}
                />
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchPage;
