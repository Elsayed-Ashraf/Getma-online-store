import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
const SlideProductsloading = () => {
  return (
    <div className="slideproductloading">
      <Grid container wrap="nowrap">
        <Box sx={{ width: 210, marginRight: 2 }}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
            <Skeleton width="60%" />
          </Box>
        </Box>
        <Box sx={{ width: 210, marginRight: 2 }}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
            <Skeleton width="60%" />
          </Box>
        </Box>
        <Box sx={{ width: 210, marginRight: 2 }}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
            <Skeleton width="60%" />
          </Box>
        </Box>
        <Box sx={{ width: 210, marginRight: 2 }}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
            <Skeleton width="60%" />
          </Box>
        </Box>
        <Box sx={{ width: 210, marginRight: 2 }}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
            <Skeleton width="60%" />
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default SlideProductsloading;



