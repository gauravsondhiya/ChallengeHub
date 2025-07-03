import moongoose from "moongoose";

const todosschema = new moongoose.Schema(
    {
     date: {
        createdAt:true,
        required:true,
        type:Number,
        require:true,
     },
     taskDetail:{
        type:String,
        require:true,
     },
     timetaken:{
        type:Number,
     },
     link:{
        type:String
     },
     status:{
        type:String
     }

 }
)

export const Todos = mongoose.model("Todos", todosschema);