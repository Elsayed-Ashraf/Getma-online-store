import Container from "@mui/material/Container";
import "./footer.css";
import { Link } from "react-router";
const footercolumns = [
  [
    { title: "Get to Know Us" },
    [
      { title: "About Getma", path: "/" },
      { title: "Careers", path: "/" },
      { title: "Getma Science", path: "/" },
    ],
  ],
  [
    { title: "Shop with Us " },
    [
      { title: "your acount", path: "/" },
      { title: "your order", path: "/" },
      { title: "your addresses", path: "/" },
    ],
  ],

  [
    { title: "Make Money with Us" },
    [
      { title: " Protect and build your brand ", path: "/" },
      { title: " Advertise Your Products ", path: "/" },
      { title: " Sell on Getma ", path: "/" },
      { title: " Fulfillment by Getma ", path: "/" },
      { title: " Supply to Getma", path: "/" },
    ],
  ],
  [
    { title: "Let Us Help You" },
    [
      { title: " Help", path: "/" },
      { title: "Shipping & Delivery", path: "/" },
      { title: "Returns & Replacements", path: "/" },
      { title: "Recalls and Product Safety Alerts", path: "/" },
      { title: "Getma App Download", path: "/" },
    ],
  ],
];
function Backtotop() {
  window.scroll(0, 0);
}

const Footer = () => {
  return (
    <div className="footer">
      <div onClick={Backtotop} className="back-to-top">
        {" "}
        back to top
      </div>
      <Container>
        <div className="footer-content">
          {footercolumns.map((column, index) => (
            <div key={index} className="column">
              <h4>{column[0].title}</h4>
              {column[1].map((itemrow, index) => (
                <Link className="link" key={index} qto={itemrow.path}>
                  <p>{itemrow.title}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
         <div className="footer-bottom">
          <p>© 2025 YourStore. All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
