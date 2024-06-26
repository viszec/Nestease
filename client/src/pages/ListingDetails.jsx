import { useEffect, useState, useCallback } from "react";
import "../styles/ListingDetails.scss";
import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { facilities } from "../data";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";


const ListingDetails = () => {
  const [loading, setLoading] = useState(true);

  const { listingId } = useParams();
  const [listing, setListing] = useState(null);

  const getListingDetails = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/properties/${listingId}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setListing(data);
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listing Details Failed", err.message);
    }
  }, [listingId]); // Add listingId as a dependency

  /* SLIDER FOR IMAGES */
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + listing.listingPhotoPaths.length) %
        listing.listingPhotoPaths.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % listing.listingPhotoPaths.length
    );
  };

  useEffect(() => {
    getListingDetails();
  }, [getListingDetails]); // Include getListingDetails in dependency array

  console.log(listing);

  /* BOOKING CALENDAR */
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    // Update the selected date range when user makes a selection
    setDateRange([ranges.selection]);
  };

  const start = new Date(dateRange[0].startDate);
  const end = new Date(dateRange[0].endDate);
  const dayCount = Math.round(end - start) / (1000 * 60 * 60 * 24); // Calculate the difference in day unit

  /* SUBMIT BOOKING */
  const customerId = useSelector((state) => state?.user?._id);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const bookingForm = {
        customerId,
        listingId,
        hostId: listing.creator._id,
        startDate: dateRange[0].startDate.toDateString(),
        endDate: dateRange[0].endDate.toDateString(),
        totalPrice: listing.price * dayCount,
      };

      const response = await fetch("http://localhost:3001/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingForm),
      });

      if (response.ok) {
        navigate(`/${customerId}/trips`);
      }
    } catch (err) {
      console.log("Submit Booking Failed.", err.message);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />

      <div className="listing-container">
        <div className="listing-details">
          <div className="title">
            <h1>{listing.title}</h1>
            <div></div>
          </div>

          <div className="grid-container">
            <div className="slider-container">
              <div
                className="grid-column-left-slide"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {listing?.listingPhotoPaths?.map((photo, index) => (
                  <div key={index} className="slide">
                    <img
                      src={`http://localhost:3001/${photo.replace(
                        "public",
                        ""
                      )}`}
                      alt={`Listing img ${index + 1}`}
                      className="listing-image"
                    />
                  </div>
                ))}
              </div>
              <button className="prev-button" onClick={goToPrevSlide}>
                <ArrowBackIosNew sx={{ fontSize: "15px" }} />
              </button>
              <button className="next-button" onClick={goToNextSlide}>
                <ArrowForwardIos sx={{ fontSize: "15px" }} />
              </button>
            </div>

            <div className="grid-column-right">
              {listing.listingPhotoPaths?.[1] && (
                <img
                  src={
                    `http://localhost:3001/uploads/` +
                    listing.listingPhotoPaths[1].split("/").pop()
                  }
                  alt=""
                  className="listing-image-up"
                />
              )}
              {listing.listingPhotoPaths?.[2] && (
                <img
                  src={
                    `http://localhost:3001/uploads/` +
                    listing.listingPhotoPaths[2].split("/").pop()
                  }
                  alt=""
                  className="listing-image-down"
                />
              )}
            </div>
          </div>

          <h2>
            {listing.type} in {listing.city}, {listing.province},{" "}
            {listing.country}
          </h2>
          <div className="listing_counts">
            {listing.guestCount} Guests - {listing.bedroomCount} Bedroom(s) -{" "}
            {listing.bedCount} Bed(s) - {listing.bathroomCount} Bathroom(s)
          </div>
          <hr />

          <div className="profile">
            <img
              src={`http://localhost:3001/${listing.creator.profileImagePath.replace(
                "public",
                ""
              )}`}
              alt={`${listing.creator.firstName} ${listing.creator.lastName}`}
            />
            <h3>
              Hosted by {listing.creator.firstName} {listing.creator.lastName}
            </h3>
          </div>
          <hr />

          <h3>Description</h3>
          <p>{listing.description}</p>
          <hr />

          <h3>{listing.highlight}</h3>
          <p>{listing.highlightDesc}</p>
          <hr />

          <div className="booking">
            <div>
              <h2>What this place offers?</h2>
              <div className="amenities">
                {listing.amenities[0].split(",").map((item, index) => (
                  <div className="facility" key={index}>
                    <div className="facility_icon">
                      {
                        facilities.find((facility) => facility.name === item)
                          ?.icon
                      }
                    </div>
                    <div className="facility_item">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="calendar">
              <h2>How long do you want to stay?</h2>
              <div className="date-range-calendar" locale="en-US" size="sm">
                <DateRange ranges={dateRange} onChange={handleSelect} />
                {dayCount > 1 ? (
                  <h3 className="day_night">
                    ${listing.price} x {dayCount} nights
                  </h3>
                ) : (
                  <h3 className="day_night">
                    ${listing.price} x {dayCount} night
                  </h3>
                )}

                <h2>
                  Total price:{" "}
                  <span className="total_price">
                    ${listing.price * dayCount}
                  </span>
                </h2>
                <div>
                  <span className="start_date">Start Date</span>:{" "}
                  <span className="dateRange">
                    {dateRange[0].startDate.toDateString()}
                  </span>
                </div>
                <div>
                  <span className="end_date">End Date</span>:{" "}
                  <span className="dateRange">
                    {dateRange[0].endDate.toDateString()}
                  </span>
                </div>

                <button className="button" type="submit" onClick={handleSubmit}>
                  Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListingDetails;
