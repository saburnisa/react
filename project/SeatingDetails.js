import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Grid, Typography, Box } from '@mui/material';
import EventSeatIcon from '@mui/icons-material/EventSeat'; // Seat icon

const SeatingDetails = ({ selectedBus, proceedToPayment }) => {
  const seats = Array(9).fill(false); // 9 seats available
  const berths = Array(9).fill(false); // 9 berths available
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedBerths, setSelectedBerths] = useState([]);
  const navigate = useNavigate();

  const toggleSeatSelection = (index) => {
    const updatedSeats = [...selectedSeats];
    if (updatedSeats.includes(index)) {
      updatedSeats.splice(updatedSeats.indexOf(index), 1);
    } else {
      updatedSeats.push(index);
    }
    setSelectedSeats(updatedSeats);
  };

  const toggleBerthSelection = (ind) => {
    const updatedBerths = [...selectedBerths];
    if (updatedBerths.includes(ind)) {
      updatedBerths.splice(updatedBerths.indexOf(ind), 1);
    } else {
      updatedBerths.push(ind);
    }
    setSelectedBerths(updatedBerths);
  };

  const handleProceed = () => {
    proceedToPayment(selectedSeats, selectedBerths);
    navigate('/payment');
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh" // Full height to vertically center content
        textAlign="center"
      >
        <Typography variant="h4" gutterBottom sx={{color: 'white'}}>
          Choose your seats on {selectedBus.name}
        </Typography>

        {/* Custom background color for the seat/berth section */}
        <Box
          mt={4}
          mb={3}
          p={3} // Padding for some space inside the box
          width="100%"
          sx={{ 
            backgroundColor: '#e0f7fa', // Light blue background color
            borderRadius: '8px', // Rounded corners
            maxWidth: '800px' // Limit the width of the box
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            {/* Seat selection */}
            {seats.map((seat, index) => (
              <Grid item key={index}>
                <Button
                  variant={selectedSeats.includes(index) ? 'contained' : 'outlined'}
                  color={selectedSeats.includes(index) ? 'success' : 'default'}
                  onClick={() => toggleSeatSelection(index)}
                  startIcon={<EventSeatIcon />}
                  sx={{ minWidth: '100px' }} // Adjust width for uniformity
                >
                  Seat {index + 1}
                </Button>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={2} justifyContent="center" mt={2}>
            {/* Berth selection */}
            {berths.map((berth, ind) => (
              <Grid item key={ind}>
                <Button
                  variant={selectedBerths.includes(ind) ? 'contained' : 'outlined'}
                  color={selectedBerths.includes(ind) ? 'success' : 'default'}
                  onClick={() => toggleBerthSelection(ind)}
                  startIcon={<EventSeatIcon />}
                  sx={{ minWidth: '100px' }}
                >
                  Berth {ind + 1}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleProceed}
          sx={{ marginTop: '20px' }}
        >
          Proceed to Payment
        </Button>
      </Box>
    </Container>
  );
};

export default SeatingDetails;
