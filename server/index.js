const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const cors = require('cors');
const User = require('./models/UserModel');

app.use(express.json());
app.use(cors());

const uri = 'mongodb+srv://rajsinghrajpoot1:il2TFvV8YZfQINmH@cluster0.oxikqrk.mongodb.net/be-better?retryWrites=true&w=majority';
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

app.get("/",(req,res) => {
  res.send("Home page ,Welcone");
});

app.post("/signup", async (req,res) => {
    const {email } = req.body.formData;
    try{
      const existingUser = await User.find({email});
      if(existingUser.length > 0){
        return res.status(400).json({message : "User already Exists"});
      }
      const newUser = new User({...req.body.formData});
      await newUser.validate();
      await newUser.save();

      return res.status(200).json({message : "Usser Added Successfully"})

    }catch(error){
      console.error("Error signing up  ", error);
      return res.status(400).json({error: " An Error Occured " });
    }
});


app.post("/login", async (req,res) => {
    const {email,password} = req.body.formData;
    const existingUser = await User.find({email});

    console.log("existing user " , existingUser);
    if(existingUser.length === 0){
      console.log("here 1")
      res.status(404).json({message: "User is not registered"});
    }else{
        if(existingUser[0].password === password){
          res.status(200).json({message: "Credentials Verified"});
        }else{
          res.status(400).json({message: "Wrong Password"});
        }
    }
});



app.listen(port , () =>{
    console.log(`Server is running on port : ${port} `);
});
