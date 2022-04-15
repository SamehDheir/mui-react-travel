import {
  Container,
  Typography,
  Box,
  Paper,
  BottomNavigation,
} from "@mui/material";
import CustomizedAccordions from "../Accordion";
import QuiltedImageList from "../ImageCollage";
import BasicModal from "../Model";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore The World In Vegas
    </Typography>

    <Box sx={{ display: "flex" }} marginTop={3}>
      <img
        src="https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?auto=compress"
        alt=""
        height={325}
      />

      <QuiltedImageList />
    </Box>

    <Typography variant="h6" component="h4" marginTop={3}>
      About This Ticket
    </Typography>
    <Typography variant="paragraph" component="p" marginTop={3}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
      qui! Neque officia earum blanditiis, non nostrum ea tempora aut in sunt
      omnis. Tenetur, assumenda? Distinctio, doloribus molestiae vel eaque saepe
      minima pariatur ut harum nulla error aliquam laudantium eveniet quia!
    </Typography>

    <Typography variant="h6" component="h4" marginTop={3} marginBottom={1.5}>
      Frequently Asked Questions
    </Typography>
    <CustomizedAccordions />

    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;
