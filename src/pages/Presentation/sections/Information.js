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

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import "../../../styles/sections/About.scss";

// Material Kit 2 React examples
import RotatingCard from "../../../examples/Cards/RotatingCard";
import RotatingCardFront from "../../../examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../../../examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "../../../assets/images/rotating-card-bg-front.jpeg";
import bgBack from "../../../assets/images/rotating-card-bg-back.jpeg";
import { motion } from "framer-motion";
import { reveal } from "../../../utils/Animations";
import { useScroll } from "../../../components/useScroll"


function Information() {
  const [element, controls] = useScroll();

  return (
    <MKBox component="section" py={6} my={6} ref={element}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
          <motion.div
          className="details"
          initial="hidden"
          animate="show"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
          >
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Feel the
                    <br />
                    Golden Business Bridge
                  </>
                }
                description="Investor Sourcing & Investor introduction Kickstart Programs
                Feasibility studies & Investment Recommenda Investor Ready Programs
                Corporate Financial Advisory
                "
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="Admin Services
                Lifestyle Management Services Sales & Marketing Services Reception Services
                "
                action={{
                  type: "internal",
                  route: "#",
                  label: "Nurture Dilligence Communication Teamwork ",
                }}
              />
            </RotatingCard>
            </motion.div>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>

          <div className="cards" ref={element}
          >
          <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <DefaultInfoCard
              icon="devices"
              title="Nurture"
              description="Nurturing is our strenght. We will bring the best out of you and your company."
              animateCustom={controls}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DefaultInfoCard
              icon="devices"
              title="Dilligence"
              description="We commit to invest our energy and skills to make you succeed."
              animateCustom={controls}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
          <Grid item xs={12} md={6}>
            <DefaultInfoCard
              icon="devices"
              title="Communication"
              description="We listen to your needs and offer the solution. Where it is not in our scope, we recommend vetted professionals."
              animateCustom={controls}

            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DefaultInfoCard
              icon="devices"
              title="Teamwork"
              description="We walk and work with you to provide services that will make your business better."
              animateCustom={controls}
            />
          </Grid>
        </Grid> 
          </div>

          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
