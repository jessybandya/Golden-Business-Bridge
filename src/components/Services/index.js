import React from 'react';
import ScrollToTop from "../ScrollToTop";
import { motion } from "framer-motion";
import Starter from "../../sections/Starter";
import About from "../../sections/About";
import Footer from "../../pages/LandingPages/Author/sections/Footer";
import Why from "../../sections/Why";
import Blogs from "../../sections/Blogs";
import DesignBlocks from "../../pages/Presentation/sections/DesignBlocks";

import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../examples/Footers/DefaultFooter";
import FilledInfoCard from "../../examples/Cards/InfoCards/FilledInfoCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
import MKSocialButton from "../MKSocialButton";
import MKButton from "../MKButton";
import routes from "./../../routes";
import footerRoutes from "./../../footer.routes";
import bgImage from "../../assets/images/bg-about-us.jpg";

function Services() {
  return (
    <motion.div initial="hidden" animate="show">
    <ScrollToTop />
    <DefaultNavbar
    routes={routes}
    action={{
      type: "external",
      route: "https://www.creative-tim.com/product/material-kit-react",
      label: "free download",
      color: "default",
    }}
    transparent
    light
  />
  <MKBox
    minHeight="75vh"
    width="100%"
    sx={{
      backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
        `${linearGradient(
          rgba(gradients.dark.main, 0.6),
          rgba(gradients.dark.state, 0.6)
        )}, url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "grid",
      placeItems: "center",
    }}
  >
    <Container>
      <Grid
        container
        item
        xs={12}
        lg={8}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ mx: "auto", textAlign: "center" }}
      >
        <MKTypography
          variant="h1"
          color="white"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >


        <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
        We have  Financial Consultancy And Virtual Admin Services for you to put together and customise into pixel
        perfect output.
      </MKTypography>
        </MKTypography>

        <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
        Golden Business Bridge Services
        </MKButton>
        <MKTypography variant="h6" color="white" mt={8} mb={1}>
          Find us on
        </MKTypography>
        <MKBox display="flex" justifyContent="center" alignItems="center">
          <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
            <i className="fab fa-facebook" />
          </MKTypography>
          <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
            <i className="fab fa-instagram" />
          </MKTypography>
          <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
            <i className="fab fa-twitter" />
          </MKTypography>
          <MKTypography component="a" variant="body1" color="white" href="#">
            <i className="fab fa-google-plus" />
          </MKTypography>
        </MKBox>
      </Grid>
    </Container>
  </MKBox>
  <div style={{marginTop:-50}}>
  <DesignBlocks />
  </div>
 <Footer/>

      </motion.div>
      )
}

export default Services;
