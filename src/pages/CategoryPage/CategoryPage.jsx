// import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Boxcategory from "../../component/Boxcategory";
import Container from "@mui/material/Container";
import TransitionPage from "../../component/TransitionPage";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <TransitionPage>
      <div
        className="CategoryPage"
        style={{ position: "relative", top: "-30px" }}
      >
        <Container>
          <Boxcategory
            category={{
              title: category,
              desc: `this is  ${category} lab lab lab..`,
            }}
          />
        </Container>
      </div>
    </TransitionPage>
  );
};

export default CategoryPage;
