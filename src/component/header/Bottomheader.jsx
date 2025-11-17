import LoginIcon from "@mui/icons-material/Login";
import Container from "@mui/material/Container";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { v4 as uuidv4 } from "uuid";

//
// import { useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { Link } from "react-router";
//
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 170,
    },
  },
};
const navlist = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/category/fragrances",
    title: "fragrances",
  },
  {
    path: "/category/mens-shirts",
    title: "mens-shirts",
  },
  {
    path: "/category/furniture",
    title: "furniture",
  },
  {
    path: "/category/laptops",
    title: "laptops",
  },
  {
    path: "/category/sunglasses",
    title: "sunglasses",
  },
];

const Bottomheader = () => {
  const [datacategories, setdatacategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setdatacategories(data));
  }, []);
  const [personName, setPersonName] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  //
  return (
    <div className="bottomheader">
      <Container>
        <div className="boxbottomheader">
          {/* <MenuIcon/> */}
          <div
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon />
          </div>

          <div className="box-categories">
            {/* ====================================== */}
            <div style={{ display: "flex" }}>
              <FormControl sx={{ m: 1, width: "80px", height: "45px" }}>
                {/* <div className="input"> */}
                <InputLabel
                  sx={{ color: "white", height: "45px", paddingLeft: "17px" }}
                >
                  All
                </InputLabel>
                {/* </div> */}
                <Select
                  sx={{ color: "white", height: "45px" }}
                  // multiple
                  // value={personName}
                  // onChange={handleChange}
                  MenuProps={MenuProps}
                >
                  <div className="categoryitems">
                    {datacategories.map((name) => (
                      <MenuItem className="itemincategory" key={name}>
                        <Link
                          to={`/category/${name}`}
                          className="category-link"
                        >
                          {name}
                        </Link>
                      </MenuItem>
                    ))}
                  </div>
                </Select>
              </FormControl>
            </div>
            {/* ================================= */}

            {/* <ArrowDropDownIcon/> */}
          </div>
          <div className={`boxnav ${isMenuOpen ? "active" : ""}`}>
            <nav>
              <ul>
                {navlist.map((nav) => (
                  <Link
                    className="link"
                    key={uuidv4()}
                    to={nav.path}
                    style={{
                      height: "100%",
                      textDecoration: "none",
                      border: "none",
                      outline: "none",
                    }}
                  >
                    <li>{nav.title}</li>
                  </Link>
                ))}
              </ul>
            </nav>
            <div
              className="closebar"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              x
            </div>
          </div>
          <div className="boxicons">
            <LoginIcon />
            <PersonAddAltIcon />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bottomheader;
