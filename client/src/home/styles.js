// NAVBAR SECTION

export const titleToolbar = {
  borderBottom: 1,
  borderColor: "divider",
  backgroundColor: "#782c2e",
  color: "#ffffff",
};

export const title = {
  flex: 1,
  fontWeight: "bold",
  fontFamily: "Raleway",
};

export const navbarToolbar = {
  justifyContent: "space-between",
  overflowX: "auto",
  backgroundColor: "#efead7",
};

export const link = {
  p: 1,
  flexShrink: 0,
  textDecoration: "none",
  color: "#782c2e",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontFamily: "Raleway",
  "&:hover": {
    backgroundColor: "#782c2e",
    color: "#efead7",
  },
};

// HEADER SECTION

export const headerPaper = {
  position: "relative",
  backgroundColor: "grey.800",
  color: "#fff",
  mb: 4,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: `url('images/home.jpg')`,
};

export const headerBox = {
  position: "relative",
  p: { xs: 3, md: 6 },
  pr: { md: 0 },
};

export const raleway = {
  fontFamily: "Raleway",
};

// REGISTER SECTION

export const button = {
  backgroundColor: "#782c2e",
  color: "#efead7",
  margin: "1%",
  fontFamily: "Raleway",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#efead7",
    color: "#782c2e",
  },
};

export const cardMedia = {
  width: 160,
  display: { xs: "none", sm: "block" },
};

export const boldRaleway = {
  fontFamily: "Raleway",
  fontWeight: "bold",
  color: "#782c2e"
};

// ABOUT SECTION

export const description = {
  fontFamily: "Raleway",
  marginBottom: "3vh",
};

export const aboutPaper = {
  position: "relative",
  backgroundColor: "grey.800",
  color: "#fff",
  mb: 4,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: `url('images/doctors.jpg')`,
};

export const box = {
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,.3)",
};

export const subtitle = {
  fontFamily: "Raleway",
  fontWeight: "bold",
  fontStyle: "italic",
  color: "#efead7"
};

// TESTIMONIALS SECTION

export const message = {
  fontFamily: "Raleway",
  fontStyle: "italic",
};

export const testimonialsTitle = {
  fontFamily: "Raleway",
  paddingBottom: "2%",
  fontStyle: "italic",
  fontWeight: "bold",
};

export const card = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

// FOOTER SECTION

export const footerBox = {
  py: 1,
  backgroundColor: "#782c2e",
  color: "#ffffff",
};

export const iconButton = {
  color: "#ffffff",
  "&:hover": { fontWeight: "bold" },
};

export const footerTitle = {
  mt: 1,
  fontFamily: "Raleway",
  fontWeight: "bold",
};

export const sendButton = {
  backgroundColor: "#efead7",
  color: "#782c2e",
  margin: "1%",
  fontFamily: "Raleway",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#782c2e",
    color: "#efead7",
  },
};
