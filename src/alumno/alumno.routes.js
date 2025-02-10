import { Router } from "express"
import { registroAlumno, getAlumnoById, getAlumnos, deleteAlumno, updateAlumno } from "./alumno.controller.js"
import { registroAlumnoValidator, getAlumnoByIdValidator, deleteAlumnoValidator, updateAlumnoValidator } from "../middlewares/alumno-validators.js"
import { deleteFileOnError } from "../middlewares/delete-file-on-error.js"
const router = Router()

router.post("/registroAlumno", registroAlumnoValidator, deleteFileOnError, registroAlumno)

router.get("/findAlumno/:uid", getAlumnoByIdValidator, getAlumnoById)

router.get("/", getAlumnos)

router.delete("/deleteAlumno/:uid", deleteAlumnoValidator, deleteAlumno)

router.patch("/actualizarAlumno/:uid", updateAlumnoValidator, updateAlumno)


export default router