import Curso from "./curso.model.js";

export const registroCurso = async (req, res) => {
    try{
        const data = req.body

        const curso = await Curso.create(data);

        return res.status(201).json({
            message: "Curso registrado",
            nombre: curso.nombre,
            descripcion: curso.descripcion,
        })
    }catch(err){
        return res.status(500).json({
            message: "Curso no registrado",
            success: err.message
        })
    }
}

export const getCursoById = async (req, res) => {
    try{
        const {uid} = req.params
        const curso = await Curso.findById(uid)
        
        if(!curso){
            return res.status(404).json({
                success: false,
                message: "No existe el curso",
            })
        }

        return res.status(200).json({
            success: true,
            curso
        })

    }catch(err){ 
        return res.status(500).json({
            success: false,
            message: "Error al obtener el curso",
            error: err 
        })
    }
}

export const getCursos = async (req, res) => {
    try{
        const{limite = 10, desde = 0} = req.query
        const query = { status: true }

        const [total, cursos] = await Promise.all([
            Curso.countDocuments(query),
            Curso.find(query)
            .limit(limite)
            .skip(desde)
        ])

        return res.status(200).json({  
            success: true,
            total,
            cursos
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al obtener los cursos",
            error: err.message  
        })
    }
}

export const deleteCurso = async (req, res) => {
    try{
        const {uid} = req.params
        const curso = await Curso.findOneAndDelete(uid, {status: false}, {new: true})

        return res.status(200).json({
            success: true,
            message: "Curso eliminado",
            curso
        })

    }catch(err){ 
        return res.status(500).json({
            success: false,
            message: "Error al eliminar el curso",
            error: err.message
        })
    }
}

export const updateCurso = async (req, res) => {
    try{
        const {uid} = req.params
        const {nombre, descripcion} = req.body
        const curso = await Curso.findByIdAndUpdate(uid, {nombre, descripcion}, {new: true})

        return res.status(200).json({
            success: true,
            message: "Curso actualizado",
            curso
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al actualizar el curso",
            error: err.message
        })
    }
}   

