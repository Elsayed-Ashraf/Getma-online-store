import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import CardActionArea from "@mui/material/CardActionArea";
// import CardActions from "@mui/material/CardActions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// import { Delete } from "../features/counter/CounterSlice";
import { Add } from "../features/cart/CartSlice";
import { addToHeart } from "../features/heart/HeartSlice";
import { removeFromHeart } from "../features/heart/HeartSlice";
// import { Link } from "react-router-dom";
const Product = ({ itemproduct }) => {
  const [value, setValue] = useState(2);
  const heartitems = useSelector((state) => state.heart.value);
  const isaddedtoheart = heartitems.some((i) => i.id == itemproduct.id);

  // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  const dispatch = useDispatch();

  return (
    <div className="product">
      <Link
        to={`/product/${itemproduct.id}`}
        style={{
          textDecoration: "none",
          border: "none",
          outline: "none",
        }}
      >
        <Card sx={{ height: "100%" }}>
          <CardMedia
            sx={{ background: "red" }}
            component="img"
            height="180"
            image={itemproduct.images[0]}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ fontWeight: "200", fontSize: "1.1rem" }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {itemproduct.title}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              <Box sx={{ "& > legend": { mt: 2 }, fontSize: "5px" }}>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </Typography>
            <Typography
              className="price"
              sx={{ fontWeight: "200", fontSize: "1.1rem" }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {`$ ${itemproduct.price}`}
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <div className="product-icons">
        <ShoppingCartIcon onClick={() => dispatch(Add(itemproduct))} />

        {isaddedtoheart ? (
          <FavoriteIcon
            className="favorites"
            onClick={() => dispatch(removeFromHeart(itemproduct))}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={() => dispatch(addToHeart(itemproduct))}
          />
        )}

        {/* <FavoriteIcon className='favorites' onClick={()=>dispatch(removeFromHeart(itemproduct))} /> */}
        {/* <FavoriteBorderIcon onClick={()=>dispatch(addToHeart(itemproduct))} />  */}

        <Link to={`/product/${itemproduct.id}`}>
          <TurnRightIcon id={itemproduct.id} />
        </Link>
      </div>
    </div>
  );
};

export default Product;
