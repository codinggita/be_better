import React, { useState } from 'react';
import { Card, CardContent, TextField, IconButton, List, ListItem, ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const DailyTasksTwo = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Card variant="outlined" sx={{padding:2,margin : 2 ,boxShadow : 2}}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <TextField
            label="Add New Task"
            variant="outlined"
            size="small"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <IconButton color="primary" onClick={handleAddTask}>
            <AddIcon />
          </IconButton>
        </div>

        <List>
          {tasks.map((task, index) => (
            <ListItem key={index}>
              <ListItemText primary={task} />
              <IconButton color="secondary" onClick={() => handleRemoveTask(index)}>
                {/* You can use a delete or remove icon */}
                🗑️
              </IconButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default DailyTasksTwo;
