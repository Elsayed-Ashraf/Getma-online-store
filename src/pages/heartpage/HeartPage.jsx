import "./HeartPage.css";
// import Product from "./Product";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import Product from "../../component/Product";
const HeartPage = () => {
  const heartitems = useSelector((state) => state.heart.value);
  const dispatch = useDispatch();
  return (
    <div className="heartpage">
      <Container>
        <div className="heartproduct">
          {heartitems.map((item, index) => (
            <Product  key={index} itemproduct={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HeartPage;
