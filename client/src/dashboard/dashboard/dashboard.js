import React from "react";
import { Grid, Paper, Container } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../navbar";
import Form from "./form";
import Upload from "./upload";
import { container, paper, upload } from "../styles";

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <Navbar />
    </>
  );
};

export default Dashboard;
