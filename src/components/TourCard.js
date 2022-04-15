import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});
export const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3} marginTop={4}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img className="img" src={tour.image} alt="" />
          <Box paddingX={2}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
            <Box className="time">
              <AccessTimeIcon sx={{ width: 15.5 }} />
              <Typography paddingX={1} variant="body1" component="p">
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            >
              <Rating
                size="small"
                value={tour.value}
                readOnly
                precision={0.5}
              />

              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body2" component="p" marginLeft={1}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0.5}>
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};
