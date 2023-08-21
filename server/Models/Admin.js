const mongoose =require("mongoose");
const {Schema} = mongoose;
const adminSchema = new Schema({
  username : String,
  email : String,
  password : {
    type : String,
    required :true,
  }
});
adminSchema.methods.verifyPassword = (password) => {
  return this.password === password;
}
module.exports = mongoose.model('Admin', adminSchema);