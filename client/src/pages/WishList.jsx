import "../styles/List.scss";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard_";
import Footer from "../components/Footer";

const WishList = () => {
  const wishList = useSelector((state) => state.user.wishList);

  return (
    <>
      <Navbar />
      <div className="list-container">
        <div className="list">
          <h1 className="title">Your Wish List</h1>
          <div className="trip_list">
            {wishList?.map(
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

export default WishList;
