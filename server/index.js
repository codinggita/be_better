const express = require('express');
const { UserDetails } = require('./db')
const app = express();
const port = 8000;

app.use(express.json());

let tasks = [
    {
      "id" : 1,
      "taskname": "Complete Assignment",
      "status": true,
      "notes": "Ensure all requirements are met before submission."
    },
    {
      "id" : 2,
      "taskname": "Review Meeting",
      "status": false,
      "notes": "Prepare agenda and gather relevant documents."
    },
    {
      "id" : 3,
      "taskname": "Exercise",
      "status": true,
      "notes": "Cardio and strength training for 30 minutes."
    },
    {
      "id" : 4,
      "taskname": "Read Book",
      "status": false,
      "notes": "Finish the last two chapters of 'The Great Gatsby.'"
    },
    {
      "id" : 5,
      "taskname": "Grocery Shopping",
      "status": true,
      "notes": "Buy fruits, vegetables, and essentials."
    }
]

// app.get("/",(req,res) => {
//   res.send("Home page ,Welcone");
// });

// app.get("/tasks",(req,res)=>{
//   const tasknames = tasks.map(task => task.taskname);
//   res.json(tasknames);
// });

// app.post("/new_task" , (req,res) => {
//   const task = req.body;
//   tasks.push(task);
//   res.status(200).json( { "message " : "task updated successfully" , "update array" : tasks});
// });

// // Update the status of a task
// app.put('/tasks/:id', (req, res) => {
//   const taskId = parseInt(req.params.id);
//   const updatedStatus = req.body.status;
//   flag = false;
//   tasks.forEach(task => {
//     if (task.id === taskId) {
//       task.status = updatedStatus;
//       flag = true;
//     }
//   });
//   if(flag)
//     res.send('Task status updated successfully!');
//   else  
//     res.send('Invalid ID');
  
// });


// // Update task details
// app.patch('/tasks/:id', (req, res) => {
//   const taskId = parseInt(req.params.id);
//   const updatedNotes = req.body.notes;

//   flag = false;
//   tasks.forEach(task => {
//     if (task.id === taskId) {
//       task.notes = updatedNotes;
//       flag = true;
//     }

//   });
//   if(flag)
//     res.send('Task details updated successfully!');
//   else  
//     res.send('Can not UPDATE , Task not found')
// });

// // Delete a task
// app.delete('/tasks/:id', (req, res) => {
//   const taskId = parseInt(req.params.id);

//   tasks = tasks.filter(task => task.id !== taskId);

//   res.send('Task deleted successfully!');
// });

app.get('/' , (req,res) => {
    res.send("Home Page");
});

app.get('/students', async (req, res) => {
  try {
      const users = await UserDetails.find();
      res.json(users);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.post('/students', async (req, res) => {
  try {
      const newItem = new UserDetails(req.body);
      await newItem.save();
      res.json(newItem);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.put('/students/:uid', async (req, res) => {
  try {
      const updatedItem = await UserDetails.findOneAndUpdate({uid : req.params.uid} , req.body, { new: true });
      res.json(updatedItem);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.patch('/students/v1/:uid', async (req, res) => {
  try {
      const updatedItem = await UserDetails.findOneAndUpdate({uid: req.params.uid}, { $set: req.body }, { new: true });
      res.json(updatedItem);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.delete('/students/d1/:uid', async (req, res) => {
  try {
      const deletedItem = await UserDetails.findOneAndDelete({uid: req.params.uid});
      res.json(deletedItem);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


// app.get('/students/d1/:uid' , (req,res) => {

// });







app.listen(port , () =>{
    console.log(`Server is running on port : ${port} `);
});
