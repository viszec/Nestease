import { categories } from "../data";
import "../styles/Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Explore Top Categories</h1>
      <span className="description">
        Explore our wide range of vacation rentals that cater to all types of
        traveler. Immerse yourself in th local culture, enjoy the comforts of
        home, and create unforgettable memories in your dream destination.
      </span>

      <div className="categories_list">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to="">
            <div className="category">
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon">{category.icon}</div>
                <span className="category_label">{category.label}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
