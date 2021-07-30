import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { allData } from "../services/api";

const Detail = () => {
  let history = useHistory();
  const { id } = useParams();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleGoBack = () => {
    history.push("/");
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <div className="app-full-content">
      {addedToCart ? (
        <div className="added-product">Product added successfully!</div>
      ) : (
        ""
      )}
      {allData
        .filter((item) => item.ProductID === Number(id))
        .map((info) => {
          return (
            <>
              <div className="app-full-content__wrapper">
                <div className="app-full-content__image"></div>
                <div className="app-full-content__content">
                  <h2>{info.Name}</h2>
                  <p className="description">{info.Description}</p>
                </div>
                <div className="app-full-content__content--action">
                  <p>
                    <strong className="price">${info.Price}</strong>
                  </p>
                  <p>
                    <span>Out of Stock</span>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      <button className="go-back-button" onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
};

export default Detail;
