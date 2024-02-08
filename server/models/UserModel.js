const mongoose = require('mongoose');

// const uri = 'mongodb+srv://rajsinghrajpoot1:il2TFvV8YZfQINmH@cluster0.oxikqrk.mongodb.net/be-better?retryWrites=true&w=majority';
// mongoose.connect(uri)
//   .then(() => console.log('Connected to MongoDB Atlas'))
//   .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

const UserSchema = mongoose.Schema({
    firstName: {type: String , required: true},
    lastName: {type: String , required: true},
    email: {type: String , required : true , unique : true},
    password: {type: String , required : true },
});

const User = mongoose.model("User",UserSchema);

// const newUser = new User({
//     firstName: "Divyanshu",
//     lastName: "Singh",
//     email: "rajsinghrajpoot@gmail.com",
//     password: "Password"
// });

// newUser.save();
module.exports = User;