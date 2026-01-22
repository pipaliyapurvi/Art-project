import { Box, Grid, Typography, Button, Card } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";

const TicketDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 } }}>
      <Grid container spacing={4} alignItems="center">

        {/* IMAGE */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://oneart.wpengine.com/wp-content/uploads/2025/09/exhibition-list-01-1536x714.jpg"
            alt="Ticket"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Grid>

        {/* DETAILS */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Ticket Details (Event {id})
          </Typography>

          <Typography color="text.secondary" mb={2}>
            Date: September 25 - September 26
          </Typography>

          <Typography mb={3}>
            Experience stunning artworks, creative storytelling and modern
            visual expressions in this exclusive art showcase.
          </Typography>

          <Card sx={{ p: 3, mb: 3 }}>
            <Typography fontWeight="bold">Price: ₹499</Typography>
            <Typography color="text.secondary">
              Entry + Gallery Access
            </Typography>
          </Card>

          <Button variant="contained" size="large" sx={{ mr: 2 }}>
            Book Now
          </Button>

          <Button variant="outlined" onClick={() => history.push("/")}>
            Back
          </Button>
        </Grid>

      </Grid>
    </Box>
  );
};

export default TicketDetails;
