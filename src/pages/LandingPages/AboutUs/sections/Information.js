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
import MKBox from "../../../../components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "../../../../examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "../../../../examples/Cards/BlogCards/CenteredBlogCard";
import { motion } from "framer-motion";
import { reveal } from "../../../../utils/Animations";
import { useScroll } from "../../../../components/useScroll"

function Information() {
  const [element, controls] = useScroll();

  return (
    <MKBox component="section" py={12} ref={element}>
      <Container>
      <div className="cards" ref={element}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Nurture"
                    description="Nurturing is our strenght. We will bring the best out of you and your company."
                    animateCustom={controls}
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Dilligence"
                    description="We commit to invest our energy and skills to make you succeed."
                    animateCustom={controls}
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="public"
                    title="Communication"
                    description="We listen to your needs and offer the solution. Where it is not in our scope, we recommend vetted professionals."
                    animateCustom={controls}
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="public"
                    title="Teamwork"
                    description="We walk and work with you to provide services that will make your business better."
                    animateCustom={controls}
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Customer oriented"
              description="We believe that your success is our success."
              action={{
                type: "internal",
                route: "#",
                color: "info",
                label: "We here to build your firm",
              }}
            />
          </Grid>
        </Grid>
        </div>
      </Container>
    </MKBox>
  );
}

export default Information;
