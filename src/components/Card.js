import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return data.map((item) => (
    <div className="app-card" key={item.ProductID}>
      <div className="app-card__image">
        <img src="#" alt="" />
      </div>
      <div className="app-card__content">
        <h2>{item.Name}</h2>
        <p>
          ${item.Price}
          <span>${item["Retail Price"]}</span>
        </p>
        <Link to={`/product/${item.ProductID}`}>View details</Link>
      </div>
    </div>
  ));
};

export default Card;
