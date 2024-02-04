import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { List, ListItemButton } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, Link } from "react-router-dom";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  function handleToggle() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <IconButton color="inherit" onClick={handleToggle}>
              <MenuRoundedIcon />
            </IconButton>
            <Drawer open={drawerOpen} onClose={handleToggle}>
              <List>
              <ListItem  component={Link} to={"/daily-tasks"} >
                <ListItemIcon>
                  <AssignmentTurnedInIcon/>
                </ListItemIcon>
                <ListItemText>
                  Daily Tasks!
                </ListItemText>
              </ListItem> 

              <ListItem  component={Link} to={"/daily-tasks2"} >
                <ListItemIcon>
                  <AssignmentTurnedInIcon/>
                </ListItemIcon>
                <ListItemText>
                  Daily Tasks Two
                </ListItemText>
              </ListItem> 
            </List>
            </Drawer>
          </Box>

          <Box>
            <Button component={Link} to={"/home"} color="inherit">Home</Button>
            <Button component={Link} to={"/aboutus"} color="inherit">About Us</Button>
            <Button component={Link} to={"/faqs"} color="inherit">FAQs</Button>
          </Box>

          <IconButton color="inherit" size="large">
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
