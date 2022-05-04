import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Link, Toolbar, Typography } from "@mui/material";
import { link, navbarToolbar, title, titleToolbar } from "./styles";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Schemes = () => {
  const [schemes, setSchemes] = useState([]);

  // useEffect(() => {
  //   const feedDisplay = document.querySelector("#feed");
  //   const site = "https://www.india.gov.in";
  //   fetch("http://localhost:5000/results")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       data.forEach((article) => {
  //         const articleItem =
  //           `<h3>` +
  //           article.title +
  //           `</h3><a href='https://www.india.gov.in'+article.url>https://www.india.gov.in` +
  //           article.url +
  //           `</a>`;
  //         feedDisplay.insertAdjacentHTML("beforeend", articleItem);
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // });

  useEffect(() => {
    const site = "https://www.india.gov.in";
    fetch("http://localhost:5000/agriculture")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((article) => {
          db.collection("schemes").add({
            title: article.title,
            url: site + article.url,
            topic: "agriculture",
            fetchedAt: new Date(),
          });
        });
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:5000/education")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((article) => {
          db.collection("schemes").add({
            title: article.title,
            url: site + article.url,
            topic: "education",
            fetchedAt: new Date(),
          });
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // FETCHING PATIENT'S DATA FROM DB
  useEffect(() => {
    db.collection("schemes").onSnapshot((snapshot) => {
      setSchemes(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div id="feed">
      {/* TITLE */}
      <Toolbar sx={titleToolbar}>
        <Typography
          variant="h3"
          color="#efead7"
          align="center"
          noWrap
          sx={title}
        >
          Government Schemes Alerts
        </Typography>
      </Toolbar>

      <Toolbar component="nav" variant="dense" sx={navbarToolbar}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>

      <h1>Agriculture</h1>
      {schemes.map((scheme) => {
        if (scheme.topic === "agriculture")
          return (
            <>
              <h3>{scheme.title}</h3>
              <a href={scheme.url}>{scheme.url}</a>
            </>
          );
      })}

      <h1>Education</h1>
      {schemes.map((scheme) => {
        if (scheme.topic === "education")
          return (
            <>
              <h3>{scheme.title}</h3>
              <a href={scheme.url}>{scheme.url}</a>
            </>
          );
      })}
    </div>
  );
};

export default Schemes;


/*
Agriculture
Art & Culture
Commerce
Communications & IT
Defence
Education
Environment & Forest
Finance & Taxes
Food & Public Distribution
Foreign Affairs
Governance & Administration
Health & Family Welfare
Home Affairs & Enforcement
Housing
Industries
Infrastructure
Information & Broadcasting
Labour & Employment
Law & Justice
Power & Energy
Rural
Science & Technology
Social Development
Transport
Travel & Tourism
Youth & Sports
*/