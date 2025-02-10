import { Schema, model} from "mongoose";

const cursoSchema = Schema({
    nombre:{
        type: String,
        required: [true, "El nombre es requerido"],
        maxLength: [25, "El nombre no debe exceder de los 25 caracteres"]
    },
    descripcion:{
        type: String,
        required: [true, "La descripcion del curso es requerida"],
        maxLength: [130, "La descripcion no debe exceder de los 25 caracteres"]
    },
    status:{
        type: Boolean,
        default: true
    }, 
},
{
    versionKey: false,
    timeStamps: true
})

cursoSchema.methods.toJSON = function(){
    const {__v, _id, ...curso} = this.toObject()
    curso.uid = _id
    return curso
}

export default model("Curso", cursoSchema)