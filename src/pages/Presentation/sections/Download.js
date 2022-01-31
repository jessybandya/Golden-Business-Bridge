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
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKButton from "../../../components/MKButton";
import MKTypography from "../../../components/MKTypography";

// Images
import bgImage from "../../../assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
            Your Bridge To Business
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
            & Wholistic  &amp; Prosperity!
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
            Based on where you are, we work towards seeing you and your business move from one level to another. Be it in ensuring that your business operations run smoothly or linking you to a potential financier/investor, we will walk with you till you reach there. This is through our admin services and financial consultancy services.
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="#"
              sx={{ mb: 2 }}
            >
            Golden Business Bridge
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container>

      </Container>
    </MKBox>
  );
}

export default Download;
