import * as React from "react";
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { boldRaleway, button, cardMedia, raleway } from "./styles";

const Register = () => {
  return (
    <Grid container spacing={4} id="register">
      {/* REGISTER */}
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1, fontFamily: "Raleway" }}>
              <Typography component="h1" variant="h4" sx={boldRaleway}>
                Register 
              </Typography>
              <Typography variant="h5" paragraph sx={raleway}>
                Sign Up to get personalized notifications
              </Typography>
              <Button sx={button} href="/signup">
                Sign Up
              </Button>

              <Button sx={button} href="/signin">
                Sign In
              </Button>
            </CardContent>

            {/* Image */}
            <CardMedia
              component="img"
              sx={cardMedia}
              image="images/doctor.jpg"
              alt="Doctor"
            />
          </Card>
        </CardActionArea>
      </Grid>

      {/* WITHOUT REGISTER */}
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h1" variant="h4" sx={boldRaleway}>
                Continue without registering
              </Typography>
              <Typography variant="h5" paragraph sx={raleway}>
              </Typography>
              <br/>
              <Button sx={button} href="/schemes">
                Continue
              </Button>
            </CardContent>

            {/* Image */}
            <CardMedia
              component="img"
              sx={cardMedia}
              image="images/patient.jpg"
              alt="Patient"
            />
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
};

export default Register;
