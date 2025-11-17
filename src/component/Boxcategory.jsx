import { useState } from "react";
import Slideproducts from "./Slideproducts";
import Container from "@mui/material/Container";
// import { useState } from "react";
const Boxcategory = ({category}) => {
  return (
    <div className="boxcategory">
      <Container>
        <div className="categoryAddress">
          <h1>{category.title.replace("-"," ")}</h1>
          <p>{category.desc}</p>
        </div>
        <Slideproducts category={category}/>
      </Container>
    </div>
  );
};

export default Boxcategory;
