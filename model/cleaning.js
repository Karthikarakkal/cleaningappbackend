const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "place":{type:String,required:true},
        "address":{type:String,required:true},
        "phone number":{type:String,required:true},
        "E-mail":{type:String,required:true}

    }
)

let cleaning=mongoose.model("cleanings",schema)
module.exports={cleaning}