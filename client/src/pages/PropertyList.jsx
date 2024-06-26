import "../styles/List.scss";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
import { useEffect, useState, useCallback } from "react";
import { setPropertyList } from "../redux/state";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const PropertyList = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const propertyList = user?.propertyList;
  console.log(user);

  const dispatch = useDispatch();
  const getPropertyList = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/${user._id}/properties`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      dispatch(setPropertyList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetch all properties failed", err.message);
    }
  }, [dispatch, user._id]);

  useEffect(() => {
    getPropertyList();
  }, [getPropertyList]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <div className="list-container">
        <div className="list">
          <h1 className="title">Your Property List</h1>
          <div className="trip_list">
            {propertyList?.map(
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

export default PropertyList;
