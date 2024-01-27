// const mongoose  = require('mongoose');
// const uri = "mongodb://127.0.0.1:27017";

// mongoose.connect(uri)
//         .then(() => console.log("MongoDB Connected"))
//         .catch((err) => console.log(err))


// //defining the schema

// const Schema = mongoose.Schema;
// const MyModelSchema = new Schema({
//         username: {
//                 type: String,
//                 required: true,
//                 unique: true,
//                 trim: true,
//                 minlength: 3,
//               },
//               email: {
//                 type: String,
//                 required: true,
//                 unique: true,
//                 match: [/.+\@.+\..+/, "Please fill a valid email address"],
//               },
//               dateOfBirth: {
//                 type: Date,
//                 required: true,
//               },
//               interests: {
//                 type: [String],
//                 default: [],
//               },
//               createdAt: {
//                 type: Date,
//                 default: Date.now,
//               },
// });


// const UserProfile = mongoose.model("UserProfile", MyModelSchema);

// // Examples of valid documents based on this schema:
// const user1 = new UserProfile({
//   username: "user1",
//   email: "user1@example.com",
//   dateOfBirth: new Date(1990, 6, 20),
//   interests: ["coding", "hiking"],
// });

// const user2 = new UserProfile({
//   username: "user2",
//   email: "user2@example.com",
//   dateOfBirth: new Date(1985, 2, 15),
//   interests: ["photography", "traveling"],
// });

// const user3 = new UserProfile({
//         username: "user3",
//         email: "user3@email.com",
//         dateOfBirth : new Date(2002,12,14),
//         interests : ["gaming","music","sleeping"],
// });
// // Add user1 and user2 to the database
// const addUsersToDB = async () => {
//   try {
//     await user1.save();
//     console.log("User 1 added successfully!");
//     await user2.save();
//     console.log("User 2 added successfully!");
//   } catch (error) {
//     console.error("Error adding users:", error);
//   }
// };
// addUsersToDB();
// user3.save();

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', (err) => {
//         console.error("Error connecting to MongoDB:", err);
//     });
    
//     db.once('open', () => {
//             console.log("Connection to MongoDB established successfully");
//     // You can perform operations on your database here
// });

const mongoose = require('mongoose');
const uri = 'mongodb+srv://rajsinghrajpoot1:uKKRlbItp0mAaly7@cluster0.oxikqrk.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => console.log("Connection established"))
  .catch((err) => console.log(err));



const  Schema = mongoose.Schema;
const UserSchema = new Schema({
  uid :{
    type : Number,
    required : true,
    unique : true,
  },

  sem1 :{
    type : Number ,
    required : true,
  },
  sem2 :{
    type : Number,
    required : true,
  
  },
  cgpa :{
    type : Number,
    required : true,
  },
});

//creating a model
const UserDetails = mongoose.model("UserDetails",UserSchema);

const user1 = new UserDetails({
  uid : 1,
  sem1 : 7,
  sem2 : 8,
  cgpa : 7.5,
});
const user2 = new UserDetails({
  uid : 2,
  sem1 : 10,
  sem2 : 10,
  cgpa : 10,
});
const user3 = new UserDetails({
  uid : 3,
  sem1 : 5,
  sem2 : 7,
  cgpa : 6,
});

const addUsersToDB = async () => {
    try {
      await user1.save();
      console.log("User 1 added successfully!");
      await user2.save();
      console.log("User 2 added successfully!");
      await user3.save();
      console.log("User 3 added successfully!");
    } catch (error) {
      console.error("Error adding users:", error);
    }
  };
//   addUsersToDB();

  module.exports = {
    UserDetails,
  };










