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
import MKTypography from "../../../../components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "../../../../examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "../../../../assets/images/team-5.jpg";
import team2 from "../../../../assets/images/bruce-mars.jpg";
import team3 from "../../../../assets/images/ivana-squares.jpg";
import team4 from "../../../../assets/images/ivana-square.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image="https://i.stack.imgur.com/l60Hf.png"
                name="Rahab Wanderi"
                position={{ color: "info", label: "Business Development Manager" }}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image="https://i.stack.imgur.com/l60Hf.png"
                name="Mumbi Wachiuri"
                position={{ color: "info", label: "Investment Officer" }}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image="https://i.stack.imgur.com/l60Hf.png"
                name="Aggrey Marisia"
                position={{ color: "info", label: "Business Analyst" }}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image="https://i.stack.imgur.com/l60Hf.png"
                name="Gladys Bett"
                position={{ color: "info", label: "Financial Management Trainer" }}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
          <MKBox mb={{ xs: 1, lg: 0 }}>
            <HorizontalTeamCard
              image="https://i.stack.imgur.com/l60Hf.png"
              name="Linet Oola"
              position={{ color: "info", label: "Marketing & Communications Manager" }}
              // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={6}>
        <MKBox mb={{ xs: 1, lg: 0 }}>
          <HorizontalTeamCard
            image="https://i.stack.imgur.com/l60Hf.png"
            name="Kihara Nyaga"
            position={{ color: "info", label: "Construction Adviser" }}
            // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
          />
        </MKBox>
      </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
