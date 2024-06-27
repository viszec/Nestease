import { useEffect, useState, useCallback } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setTripList } from "../redux/state";
import ListingCard from "../components/ListingCard_";
import Footer from "../components/Footer";

const TripList = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user._id);
  const tripList = useSelector((state) => state.user.tripList);

  const dispatch = useDispatch();

  const getTripList = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/${userId}/trips`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setTripList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Trip List failed!", err.message);
      setLoading(false); // Make sure loading is set to false even when an error occurs
    }
  }, [dispatch, userId]);

  useEffect(() => {
    getTripList();
  }, [getTripList]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <div className="list-container">
        <div className="list">
          <h1 className="title">Your Trip List</h1>
          <div className="trip_list">
            {tripList?.map(
              ({
                listingId,
                hostId,
                startDate,
                endDate,
                totalPrice,
                booking = true,
              }) => (
                <ListingCard
                  listingId={listingId._id}
                  creator={hostId._id}
                  listingPhotoPaths={listingId.listingPhotoPaths}
                  city={listingId.city}
                  province={listingId.province}
                  country={listingId.country}
                  category={listingId.category}
                  startDate={startDate}
                  endDate={endDate}
                  totalPrice={totalPrice}
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

export default TripList;
