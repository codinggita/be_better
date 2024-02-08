import React , {useState } from "react";
import Container from "@mui/material/Container";
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Box,
  Card,
  Stack,
  Button,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  IconButton,
  Icon,
} from "@mui/material";
import { ThemeContext } from "@emotion/react";
import AddIcon from '@mui/icons-material/Add';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { grey } from "@mui/material/colors";

const DailyTasks = () => {
  const [tasks,setTasks] = useState(["Task 1 ","Task 2 ","Task 3" , "Task 4", "Task 5"]);

  return (

    <Card variant="outlined"
      sx={{
        margin: 3 ,
        boxShadow: 3,
        borderRadius: 3,
        maxWidth: 'sm'

        }}>
          
      <CardActionArea >
        <CardActions 
          sx={{
            display: 'flex',
            bgcolor: 'pink',
            paddingY: 0,
          }}>
            
          <Typography sx={{
            flexGrow:2,
          }}>
            Your Daily Tasks

          </Typography>

          <IconButton>
            <AddIcon />
          </IconButton>

          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </CardActions>


        <CardContent>
          <List 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}>
              {tasks.map((task,index) => (
                <Paper elevation={3} 
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <ListItem>
                    <ListItemText primary={task} />
                  </ListItem>

                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Paper>
              ))}
          </List>

        </CardContent>

      </CardActionArea>
    </Card>
  );
};

export default DailyTasks;
