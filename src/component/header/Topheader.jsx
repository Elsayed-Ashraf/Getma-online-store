import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { lighten } from "@mui/material/styles";
import logo from "../../img/icon.png";

const Topheader = () => {
  const cartItems = useSelector((state) => state.cart.value);
  const heartItems = useSelector((state) => state.heart.value);
  // console.log("this cartItems:", cartItems);
  // console.log("this heartItems:", heartItems);
  const [numberofitems, setnumberofitems] = useState(0);
  useEffect(() => {
    const number = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setnumberofitems(number);
    // cartItems.map((item) => settotal((prev) => prev + item.price));
  }, [cartItems]);
  // for box search
  const navigate = useNavigate();
  const [inputsearch, setinputsearch] = useState("");
  // for suggestion
  const [suggestion, setsuggestion] = useState([]);
  const [loading, setloading] = useState(true);

  function Handlesubmit(e) {
    e.preventDefault();
    // inputsearch ? navigate(`search?query=${inputsearch}`) : "";
    if (inputsearch) {
      navigate(`/search?query=${encodeURIComponent(inputsearch.trim())}`);
      setsuggestion([]);
      setloading(true);
    }
  }
  // ============== function to apear suggesion ==============
  function Handleitemlink() {
    setsuggestion([]);
    setloading(true);
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      if (inputsearch.trim() !== "") {
        // setloading(true);
        fetch(`https://dummyjson.com/products/search?q=${inputsearch}`)
          .then((res) => res.json())
          .then((data) => setsuggestion(data.products.slice(0, 5) || []))
          .catch((error) => console.log(error))
          .finally(() => setloading(false));
      } else {
        setsuggestion([]);
        setloading(true);
      }
    }, 400);
    return () => clearTimeout(delay);
  }, [inputsearch]);
  return (
    <div className="boxtopheader">
      <Container>
        <div className="topheader">
          <div className="box-logo">
            <div className="image">
              <img src={logo} alt="logo" />
            </div>
            <div className="logotext">
              <h3>Getma</h3>
              <h5>online store</h5>
            </div>
          </div>

          {/* ============================================================================= */}
          <div className="boxsearch">
            <form onSubmit={Handlesubmit}>
              <input
                type="text"
                placeholder="Search Getma.eg"
                onChange={(event) => setinputsearch(event.target.value)}
              />
              <div className="iconsearch">
                <SearchIcon onClick={Handlesubmit} />
              </div>
            </form>

            <div className="suggesstion ">
              <ul>
                {!loading && suggestion.length > 0 ? (
                  <>
                    {suggestion.map((item) => (
                      <Link
                        className="link"
                        key={item.id}
                        to={`/product/${item.id}`}
                        onClick={Handleitemlink}
                      >
                        <li>
                          {/* <span> */}
                          <SearchIcon />
                          {/* </span> */}
                          {item.title}
                        </li>
                      </Link>
                    ))}
                  </>
                ) : (
                  !loading &&
                  suggestion.length === 0 && (
                    <p className="not-found">no result </p>
                  )
                )}
              </ul>
            </div>
          </div>
          {/* ============================================================================== */}
          <div className="boxicons">
            <div className="shop">
              <Link className="link" to="/cartPage">
                <ShoppingCartIcon /> <span>{numberofitems}</span>
              </Link>
            </div>
            <div className="heart">
              <Link className="link" to="/heartPage">
                {" "}
                <FavoriteBorderIcon /> <span>{heartItems.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topheader;
