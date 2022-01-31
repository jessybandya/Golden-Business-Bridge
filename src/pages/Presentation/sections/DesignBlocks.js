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

// react-router-dom components
import { Link } from "react-router-dom";
import { useScroll } from "../../../components/useScroll";
import { motion } from "framer-motion";
import "../../../styles/sections/Why.scss";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../../../utils/Animations";


// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKBadge from "../../../components/MKBadge";
import MKTypography from "../../../components/MKTypography";

// Presentation page components
import ExampleCard from "../components/ExampleCard";

// Data
import data from "./data/designBlocksData";


const containerVariants={
  hidden:{
    opacity: 0,
  },
  visible:{
    opacity:1,
    transition:{
      delay: 1.5,
      duration: 1.5
    }
  },
  exit:{
    x: '-100vw',
    transition:{
      ease: 'easeOut'
    }
  }
}

function DesignBlocks() {
  const [element, controls] = useScroll();


  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
      <motion.div
      className="reasons"
      variants={reasonsAnimation}
      animate={controls}
      transition={{ type: "tween", duration: 0.5 }}
    >
        <Grid container spacing={3}>
          {items.map(({ image, name, count, route, pro, desc }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route}>
                 <ExampleCard image={image} name={name} count={count} pro={pro}  desc={desc}/>
              </Link>
            </Grid>
          ))}
        </Grid>
        </motion.div>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6} ref={element}>
      <Container>

      <Grid
      container
      item
      xs={12}
      lg={6}
      flexDirection="column"
      alignItems="center"
      sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
    >

      <MKTypography variant="h2" fontWeight="bold">
      Our Services
      </MKTypography>

    </Grid>   

      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
