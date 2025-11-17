import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Container from "@mui/material/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import TurnRightIcon from "@mui/icons-material/TurnRight";
import ProductDetaileloading from "./ProductDetaileloading";
import Boxcategory from "../../component/Boxcategory";
import "./ProdcutDetails.css";
import { useDispatch } from "react-redux";
import { Add } from "/src/features/cart/CartSlice";
import { addToHeart } from "/src/features/heart/HeartSlice";
import { removeFromHeart } from "/src/features/heart/HeartSlice";

import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router";
import TransitionPage from "../../component/TransitionPage";
const ProductDetails = () => {
  const [product, setproduct] = useState("");
  const [value, setValue] = useState(2);
  const [imageindex, setimageindex] = useState(0);
  const cartItems = useSelector((state) => state.cart.value);
  const heartitems = useSelector((state) => state.heart.value);

  const dispatch = useDispatch();
  const isaddedtoheart = heartitems.some((i) => i.id == product.id);

  const { id } = useParams();
  // console.log(product);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setproduct(product);
        setValue(product.rating);
      });
  }, [id]);
  const isadded = cartItems.some((i) => i.id == product.id);
  // console.log(cartItems);
  if (!product) {
    return <ProductDetaileloading />;
  }
  return (
    <div className="productpage">
      <TransitionPage>
        <Container>
          <div className="productdetails">
            <div className="mainimage">
              <img src={product.images[imageindex]} alt="logo" />
              {/* small-images*/}
              <div className="images">
                <div className="image">
                  {" "}
                  <img
                    src={product.images[0]}
                    onClick={() => setimageindex(0)}
                    alt="logo"
                  />{" "}
                </div>
                <div className="image">
                  {" "}
                  <img
                    src={product.images[1]}
                    onClick={() => setimageindex(1)}
                    alt="logo"
                  />{" "}
                </div>
                <div className="image">
                  {" "}
                  <img
                    src={product.images[2]}
                    onClick={() => setimageindex(2)}
                    alt="logo"
                  />{" "}
                </div>
              </div>
              {/* small-images*/}
            </div>
            <div className="content">
              <h3>{product.title}</h3>
              <div className="star">
                {" "}
                <Rating
                  className="rating"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
              <div className="price">{`$ ${product.price}`}</div>
              <div className="avilability">
                avilability <span>{product.availabilityStatus}</span>
              </div>
              <div className="brand">
                brand <span>{product.brand}</span>
              </div>
              <div className="desc">{product.description}</div>
              <p>hurry up | only {product.stock} prodect left</p>
              {isadded ? (
                <button
                  className="incart"
                  onClick={() => dispatch(Add(product))}
                >
                  item in cart{" "}
                  <span>
                    <ShoppingCartIcon />
                  </span>{" "}
                </button>
              ) : (
                <button onClick={() => dispatch(Add(product))}>
                  add to cart{" "}
                  <span>
                    <ShoppingCartIcon />
                  </span>{" "}
                </button>
              )}
              <div className="icons">
                {/* hhhhhhhhhhh */}
                {isaddedtoheart ? (
                  <FavoriteIcon
                    className="favorites"
                    onClick={() => dispatch(removeFromHeart(product))}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => dispatch(addToHeart(product))}
                  />
                )}
                {/* bbbbbbbbbbbbbbbb */}
              
                <Link to={`/`} >  <TurnRightIcon />  </Link>
              </div>
            </div>
          </div>
        </Container>
      </TransitionPage>

      <div className="relatedproduct">
        <Boxcategory
          category={{
            title: product.category,
            desc: `this is  ${product.category} lab lab lab..`,
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
