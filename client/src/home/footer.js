import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  footerBox,
  footerTitle,
  iconButton,
  raleway,
  sendButton,
} from "./styles";

const Copyright = () => {
  return (
    <Typography variant="body2" color="#ffffff" align="center" sx={raleway}>
      {"Copyright © "} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box component="footer" sx={footerBox} id="contact">
      {/* COPYRIGHT */}
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" gutterBottom sx={raleway}>
          Government Schemes
        </Typography>
        <Copyright />
        <Typography variant="subtitle1" align="center" sx={raleway}>
          Developed by Team IT-B1
        </Typography>

        <Grid container>
          {/* CONNECT WITH US */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={footerTitle}>
              Connect with us
            </Typography>

            <IconButton href="https://github.com/Sneha0607" sx={iconButton}>
              <GitHubIcon />
            </IconButton>

            <IconButton href="https://twitter.com/sneha_0607" sx={iconButton}>
              <TwitterIcon />
            </IconButton>

            <IconButton href="#" sx={iconButton}>
              <FacebookIcon />
            </IconButton>

            <Typography variant="h6" gutterBottom sx={footerTitle}>
              Go back to top
            </Typography>
            <IconButton href="#" sx={iconButton}>
              <ArrowUpwardIcon />
            </IconButton>
          </Grid>

          {/* CONTACTS */}
          <Grid xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={footerTitle}>
              Developed by
            </Typography>
            <IconButton href="#" sx={iconButton}>
              <Typography variant="body2">
                {" "}
                1. Sneha Singh (20198023)
              </Typography>
            </IconButton>
            <IconButton href="#" sx={iconButton}>
              <Typography variant="body2">
                {" "}
                2. Mohammed Rifat Khan (20198079)
              </Typography>
            </IconButton>
            <IconButton href="#" sx={iconButton}>
              <Typography variant="body2">3. Rihan Sah (20198075)</Typography>
            </IconButton>
            <IconButton href="#" sx={iconButton}>
              <Typography variant="body2">4. Raviprakash (20198102)</Typography>
            </IconButton>
          </Grid>

          {/* NEWSLETTER SUBSCRIPTION */}
          <Grid xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={footerTitle}>
              Information Related to
            </Typography>
            <ul>
              <li>Agriculture</li>
              <li>Art & Culture</li>
              <li>Commerce</li>
              <li>Communications & IT</li>
              <li>Defence</li>
              <li>Education</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
