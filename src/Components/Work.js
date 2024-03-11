import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Sauce",
      text: "Pick the sauce you want to buy from many sauces we sell.",
    },
    {
      image: ChooseMeals,
      title: "Buying",
      text: "After you choose what you would like to buy message us on instagram @islanddish.mv to place an order",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "We will deliver you the sauce(s) you ordered as soon as we can",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We make fresh tasty sauces that is so good you will want to buy more
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
