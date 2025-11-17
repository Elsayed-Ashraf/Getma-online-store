import "./CartPage.css";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  removeitemFromCart,
  plusitem,
  minusitem,
} from "../../features/cart/CartSlice";
// import { plusitem, minusitem } from "../../features/counter/CounterSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TransitionPage from "../../component/TransitionPage";
import { useLocation } from "react-router";
const CartPage = () => {
  const dispatch = useDispatch();
  ///
  const cartItems = useSelector((state) => state.cart.value);
  // const counteritems = useSelector((state) => state.counter.value);
  cartItems.map((item) => console.log(item));
  const [total, settotal] = useState(0);
  const [numberofitems, setnumberofitems] = useState(0);
  useEffect(() => {
    const totalprice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    settotal(totalprice.toFixed(2));

    const number = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setnumberofitems(number);
    // cartItems.map((item) => settotal((prev) => prev + item.price));
  }, [cartItems]);
  console.log("this is total " + total);
  return (
    <TransitionPage>
      <div className="cartpage">
        <Container>
          <div className="cart-body">
            <div className="cart-header" >
              <h3>Shopping Cart</h3>
              <div className="suptotal">
                <h4>suptotal</h4>
                <div className="quantity">
                  (<span>{numberofitems}</span> items):
                </div>{" "}
                <div className="total-price">
                  <span>{`$ ${total}`}</span>
                </div>
              </div>
            </div>
            <div className="parentcartitems" >
              {cartItems.map((item) => (
                <div key={item.id} className="cartitems">
                  <div className="image">
                    {" "}
                    <img src={item.images[0]} alt="logo" />
                  </div>
                  <div className="content">
                    {" "}
                    <h4 className="title">{item.title}</h4>{" "}
                    <div className="desc">{item.description}</div>
                    <div className="stock">{item.availabilityStatus}</div>
                    <div className="price">{`$ ${item.price}`}</div>
                    {/* / */}
                    <div className="plusandminus">
                      <div
                        onClick={() => dispatch(plusitem(item))}
                        className="plus"
                      >
                        <AddIcon />
                      </div>
                      <div className="counteritems">{item.quantity}</div>
                      {item.quantity == 1 ? (
                        <div
                          onClick={() => dispatch(removeitemFromCart(item))}
                          className="delete"
                        >
                          <DeleteIcon />
                        </div>
                      ) : (
                        <div
                          onClick={() => dispatch(minusitem(item))}
                          className="minus"
                        >
                          <RemoveIcon />
                        </div>
                      )}
                    </div>
                    {/* // */}
                  </div>

                  <div
                    onClick={() => dispatch(removeitemFromCart(item))}
                    className="delete"
                  >
                    <DeleteIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </TransitionPage>
  );
};

export default CartPage;
