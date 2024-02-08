import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios' ;
function Copyright(props) {
  
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function LogIn({isLoggedIn,setIsLoggedIn}) {
  const LOCAL_DOMAIN = process.env.REACT_APP_LOCAL_DOMAIN;
  console.log("Before log");
  console.log(LOCAL_DOMAIN);
  const [formData,setFormData] = React.useState({
    email: '',
    password: '',
  });


  const handleChange = (event) => {
    const {name,value} = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name] : value,
    }));

  };

  const handleSubmit =  async (event) => {
    event.preventDefault();

    try{
      const response = await axios.post(`${LOCAL_DOMAIN}/login`, {
        formData
      });

      alert(response.data.message);
      if(response.status === 200){
        alert(response.data.message);
        setIsLoggedIn(true);
      }
        
    }catch(error){
      if(error.response && error.response.status === 400){
        alert(error.response.data.message);
      }else if(error.response && error.response.status === 404){
        alert(error.response.data.message);
      }
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} autoComplete='off' noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={formData.email}
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              
              margin="normal"
              required
              fullWidth
              value={formData.password}
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              autoFocus
              
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <NavLink to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}