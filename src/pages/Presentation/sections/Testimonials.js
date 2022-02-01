/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "../../../examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import appleLogo from "../../../assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "../../../assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "../../../assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "../../../assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "../../../assets/images/logos/gray-logos/logo-digitalocean.svg";
import ScrollToTop from "../../../components/ScrollToTop";
import { motion } from "framer-motion";
import { useScroll } from "../../../components/useScroll";
import { textAnimation, cardAnimation } from "../../../utils/Animations";

function Information() {
  const [element, controls] = useScroll();

  return (
    <MKBox component="section" py={3} ref={element}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2"><p>Trusted by over </p></MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={1}>
          <div style={{marginLeft:10}}> 12+ clients</div>
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={0}>
            Many Fortune  companies and startups love
            Golden Business Bridge&apos;s services.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 0 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Jessy Bandya"
              date="Software Engineer"
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
              variants={cardAnimation}
              animate={controls}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Odero Phelix"
              date="Highways Engineer"
              review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
              variants={cardAnimation}
              animate={controls}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Arnold  Sangha"
              date="Structural Engineer"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
              variants={cardAnimation}
              animate={controls}  
            />
          </Grid>
        </Grid>

      </Container>
    </MKBox>
  );
}

export default Information;
