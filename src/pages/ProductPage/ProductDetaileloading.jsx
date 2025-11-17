import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Skeleton from '@mui/material/Skeleton';

const ProductDetaileloading = () => {

  return (
    <div className="productpage">
      <Container>
        <div className="productdetails">
          <div className="mainimage" >
              <Skeleton  sx={{ width: "80%",height:"400px" }} />
            {/* small-images*/}
            <div className="images">
              <div className="image">
                 <Skeleton  sx={{ height:"100px" }} />
              </div>
              <div className="image">
                 <Skeleton  sx={{ height:"100px" }} />
              </div>
              <div className="image">
                 <Skeleton  sx={{ height:"100px" }} />
              </div>
            </div>
            {/* small-images*/}
          </div>
          <div className="content">
            <Box sx={{ width: "70%" }}>
              <Skeleton sx={{ height: "33px" }} />
            </Box>
            <Box sx={{ width: "70%" }}>
              <Skeleton sx={{ height: "33px" }} animation="wave" />
            </Box>
            <Box sx={{ width: "70%" }}>
              <Skeleton sx={{ height: "33px" }} animation={false} />
            </Box>
            <Box sx={{ width: "70%" }}>
              <Skeleton sx={{ height: "33px" }} />
            </Box>
            <Box sx={{ width: "70%" }}>
              <Skeleton sx={{ height: "33px" }} animation="wave" />
            </Box>
            <Box sx={{ width: "70%" }}>
              <Skeleton sx={{ height: "33px" }} animation={false} />
            </Box>
            <Box sx={{ width: "70%" }}>
              <Skeleton sx={{ height: "33px" }} />
            </Box>
            <Box sx={{ width: "70%" }}>
              <Skeleton sx={{ height: "33px" }} animation="wave" />
            </Box>
          
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetaileloading;
