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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";
import MKSocialButton from "../../components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../examples/Footers/DefaultFooter";
import FilledInfoCard from "../../examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "./sections/Counters";
import Information from "./sections/Information";
import DesignBlocks from "./sections/DesignBlocks";
import Pages from "./sections/Pages";
import Testimonials from "./sections/Testimonials";
import Download from "./sections/Download";

// Presentation page components
import BuiltByDevelopers from "./components/BuiltByDevelopers";

// Routes
import routes from "../../routes";
import footerRoutes from "../../footer.routes";

// Images
import bgImage from "../../assets/images/bg-presentation.jpg";
// import Testimonials from "./sections/Testimonials";
import About from "./../../sections/About";
import Footer from "../LandingPages/Author/sections/Footer";
import Starter from "./../../sections/Starter";
import Why from "./../../sections/Why";
import Blogs from "./../../sections/Blogs";
import ScrollToTop from "./../../components/ScrollToTop";
import { motion } from "framer-motion";
import { useScroll } from "./../../components/useScroll";
import { textAnimation, cardAnimation } from "./../../utils/Animations";

function Presentation() {
  const [element, controls] = useScroll();
  return (
    <motion.div initial="hidden" animate="show" ref={element}>
     <ScrollToTop />
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "#",
          label: "free download",
          color: "info",
        }}
        sticky
      />

      <Starter />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <Container sx={{ mt: 0 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Why Us?"
                description="We will bring the best out of you and your company."
                variants={cardAnimation}
                animate={controls}
                action={{
                  type: "external",
                  route: "#",
                  label: "Let's go",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Dilligence"
                description="We commit to invest our energy and skills to make you succeed."
                variants={cardAnimation}
                animate={controls}
                action={{
                  type: "external",
                  route: "#",
                  label: "Golden Business Bridge",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Customer oriented"
                description="We believe that your success is our success."
                variants={cardAnimation}
                animate={controls}
                action={{
                  type: "external",
                  route: "#",
                  label: "Golden Business Bridge",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />

      </Card>
      <MKBox pt={0} px={1} mt={0}>
        <Footer />
      </MKBox>
    </motion.div>
  );
}

export default Presentation;
