
var mongoose=require("mongoose")
 mongoose.connect("mongodb+srv://chandinidevi:chandinidevi@cluster0.hu92b57.mongodb.net/")
.then(()=>{
    console.log("connected to the data base successfully");
})
.catch((e)=>{
    console.log("error",e)
})
var userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    Number:Number,
    isActive:Boolean
})
var user=mongoose.model("users",userSchema)
async function createUser(){
    try{
        var newUser=await user.create({
            name:"chandu",
            age:"21",
            city:"rjy",
            Number:1234,
            isActive:true
        })
        console.log("create a new user",newUser)
    }catch{
        console.log("error");
    }
}
 createUser();

