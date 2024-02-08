import React from "react";
import {
  Container,
  Box,
  Card,
  Typography,
  Divider,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import '@fontsource/poppins';

function AboutUs() {
  return (
    <Container>
      {/* About us what are we */}

      <Card sx={{ padding: 3, margin: 3, boxShadow: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
              <Typography variant="h2" 
                sx={{
                  fontFamily: 'Poppins, san-serif',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  }}>
                About US
              </Typography>

          </Grid>

          <Grid item xs={12} sm={8}>
            <Typography variant="body1" sx={{fontFamily: 'Poppins, san-serif'}}>
              At Be Better, we're dedicated to helping you achieve your goals
              and build better habits. My name is Divyanshu Singh, and I'm a
              Computer Science Engineering Student passionate about software
              development and personal growth. Inspired by my own journey and
              struggles with productivity, I created Be Better to provide a
              convenient platform for tracking your daily habits, tasks, and
              to-do lists. 
              
            
              Whether you're striving for personal growth,
              increased productivity, or simply want to stay organized, Be
              Better is here to support you every step of the way. With
              intuitive features and user-friendly design, we aim to empower you
              to take control of your life and make positive changes.
            </Typography>
          </Grid>
        </Grid>
      </Card>


      <Card sx={{ padding: 3, margin: 3, boxShadow: 5 }}>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={8}>
            <Typography variant="body1" sx={{fontFamily: 'Poppins, san-serif'}}>
            Our motive at Be Better is rooted in the belief that small, consistent actions lead to significant improvements over time. Inspired by this philosophy, our app is designed to harness the power of habit formation and productivity techniques to help you become the best version of yourself. By leveraging data-driven insights and user feedback, we strive to create a personalized experience tailored to your unique needs and aspirations. With Be Better, you'll not only track your progress but also gain valuable insights to optimize your routines and maximize your potential.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
              <Typography variant="h2" 
                sx={{
                  fontFamily: 'Poppins, san-serif',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  }}> 
                  Our Motive
              </Typography>

          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default AboutUs;
