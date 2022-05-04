import * as React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  box,
  description,
  aboutPaper,
  subtitle,
  raleway,
  headerBox,
} from "./styles";

const About = () => {
  return (
    <div id="about">
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        align="center"
        gutterBottom
        sx={description}
      >
        India is one of the largest democratic countries in the world. As we all
        say that a Democratic Government is “Of the people, for the people and
        by the people” and this is one of the main reasons why the Governments
        announce Welfare Schemes for various sections of society from time to
        time. These schemes help in the upliftment of the socially,
        economically, and culturally marginalised communities.
        <br />
        <br />
        But one of the major hurdles which come in their way is the lack of
        proper information regarding these beneficial schemes. These schemes
        could be either Central, State specific or a joint collaboration between
        the Centre and the States. So we have decided to provide a solution for
        this problem by providing a proper channel for the correct information
        to be conveyed to the concerned people.
      </Typography>
      <Paper sx={aboutPaper}>
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={process.env.PUBLIC_URL + "images/doctors.jpg"}
            alt="Doctors"
          />
        }
        <Box sx={box} />
      </Paper>
    </div>
  );
};

export default About;
