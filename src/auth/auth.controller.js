import { hash, verify } from "argon2";
import Usuario from "../usuario/usuario.model.js";
import { generateJWT } from "../helpers/generate-jwt.js";

export const registro = async (req, res) => {
    try{
        const data = req.body

        const encryptedPassword = await hash(data.contraseña)
        data.contraseña = encryptedPassword
        const usuario = await Usuario.create(data);

        return res.status(201).json({
            message: "Usuario registrado",
            nombre: usuario.nombre,
            email: usuario.email,
        })
    }catch(err){
        return res.status(500).json({
            message: "Usuario no registrado",
            success: err.message
        })
    }
}

export const login = async (req, res) => {
    const {email, nombreUsuario, contraseña} = req.body 
    try {
        const usuario = await Usuario.findOne({
            $or: [{email: email}, {nombreUsuario: nombreUsuario}]
        })
        console.log(usuario)
        if(!usuario){
            return res.status(400).json({
                message: "Credenciales incorrectas",
                error: "No existe el usuario o correo electrónico"
            })
        }

        const validacionContraseña = await verify(usuario.contraseña, contraseña)

        if(!validacionContraseña){
            return res.status(400).json({
                message: "Credenciales incorrectas",
                error: "Contraseña incorrecta"
            })
        }

        const token = await generateJWT(usuario.id)

        
        return res.status(200).json({
            message: "Credenciales correctas",
            usuariosDetallados:{
                token: token
            }
        })
    } catch (err) {
        return res.status(500).json({
            message: "Login fallido, error con el servidor",
            error: err.message
        })
    }
}