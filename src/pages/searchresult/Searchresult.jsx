import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Product from "../../component/Product";
import "./searchresult.css";
// import ProductDetaileloading from "../ProductPage/ProductDetaileloading";
import SlideProductsloading from "../../component/SlideProductsloading";

const Searchresult = () => {
  const [searchParams] = useSearchParams();
  const [result, setresult] = useState([]);
  const [loading, setloading] = useState(true);
  //   console.log(`searchParams  ${searchParams}`);
  const query = searchParams.get("query"); // بتجيب القيمة بعد ?query=
  //   console.log(query);
  //   console.log(result.length);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setresult(data.products))
      .catch((error) => console.log(error))
      .finally(() => setloading(false));
  }, [query]);
  // if (loading) {
  //   return <SlideProductsloading />;
  // }
  return (
    // <>
    <div className="search-result">
      <Container>
        {loading ? (
          <SlideProductsloading />
        ) : result.length == 0 ? (
          <h5>
            result for: (<span> {query} </span> )not found
          </h5>
        ) : (
          <>
            <h4>
              result for: (<span> {query} </span>)
            </h4>

            <div className="contentsearch">
              {result.map((item) => (
                <div key={item.id} className="itemsearch">
                  {" "}
                  <Product itemproduct={item} />
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
    // </>
  );
};

export default Searchresult;
