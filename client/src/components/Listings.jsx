import { useEffect, useState, useRef, useCallback } from "react";
import { categories } from "../data";
import "../styles/Listings.scss";
import ListingCard from "./ListingCard";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "../redux/state";

const Listings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const listings = useSelector((state) => state.listings);
  const categoryListRef = useRef(null);

  const getFeedListings = useCallback(async () => {
    try {
      const response = await fetch(
        selectedCategory !== "All"
          ? `${process.env.REACT_APP_SERVER_URL}/properties?category=${selectedCategory}`
          : `${process.env.REACT_APP_SERVER_URL}/properties`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    }
  }, [selectedCategory, dispatch]);

  useEffect(() => {
    getFeedListings();
  }, [getFeedListings]);

  const handleMouseMove = (e) => {
    const { left, width } = categoryListRef.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const scrollPosition =
      (mouseX / width) * categoryListRef.current.scrollWidth - width / 2;
    categoryListRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = categoryListRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
  };

  useEffect(() => {
    handleScroll(); // Initial check
  }, []);

  return (
    <>
      <div className="scroll-container">
        {showLeftArrow && <div className="left-arrow">&lt;</div>}
        <div
          className="category-list"
          ref={categoryListRef}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
        >
          {categories?.map((category, index) => (
            <div
              className={`category ${
                category.label === selectedCategory ? "selected" : ""
              }`}
              key={index}
              onClick={() => setSelectedCategory(category.label)}
            >
              <div className="category_icon">{category.icon}</div>
              <div className="category_label">{category.label}</div>
            </div>
          ))}
        </div>
        {showRightArrow && <div className="right-arrow">&gt;</div>}
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="listings">
          {listings.map(
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
                key={_id} // Ensure unique key prop
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
      )}
    </>
  );
};

export default Listings;
