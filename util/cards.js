"use client";
import { useState } from "react";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import CartIcon from "../public/asserts/svgs/cart-icon.svg";
import euclidCircular from "./font-family";
import Cover from "../public/asserts/images/cover.svg";

import "../styles/cards.css";
import { Contrast } from "@mui/icons-material";

const Card = ({course}) => {
  const {
    courseId = "",
    courseName = "",
    imageUrl = Cover,
    courseBy = "Ekalai Academy",
    shortDescription = "Learn the fundamentals of PHP, one of the most popular languages of modern web development.",
    price = 0,
    liked = false,
    averageRating = 0,
    totalRating = 0,
    addToCart = false,
  } = course;
  const [likedState, setLikedState] = useState(liked);
  const [addToCartState, setAddToCartState] = useState(addToCart);
  return (
    <div className="course-card" onClick={()=>{console.log("hello");}}>
      <div className="course-card-image">
        <Image src={imageUrl} alt={courseName} width={280} />
      </div>
      <div className="course-card-content">
        <div className="course-card-row-1">
          <div className="card-rating">
            <Rating
              name="rating"
              defaultValue={averageRating}
              precision={0.1}
              readOnly
            />
            <span className="rating-count">({totalRating})</span>
          </div>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            checked={likedState}
            onChange={() => setLikedState(!likedState)}
            sx={{
              color: "#ED0047",
              "&.Mui-checked": {
                color: "#ED0047",
              },
            }}
          />
        </div>
        <div className="course-card-row-2">
          <div className={`course-card-title ${euclidCircular.className}`}>
            {courseName}
          </div>
          <div className={`course-by ${euclidCircular.className}`}>
            <font>By </font>
            {courseBy}
          </div>
          <div
            className={`course-short-description ${euclidCircular.className}`}
          >
            {shortDescription}
          </div>
        </div>
        <div className="course-card-row-3">
          <div className={`course-card-price ${euclidCircular.className}`}>
            ₹ {price}
          </div>
          <Button
            size="medium"
            onClick={() => setAddToCartState(!addToCartState)}
            variant={addToCartState ? "contained" : ""}
            style={{backgroundColor: addToCartState ? "#F7F8FB" : "#fff"}}
            startIcon={<Image src={CartIcon} alt="" width={18} />}
          >
            {addToCartState ? "Go to cart" : "Add to cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Card };
