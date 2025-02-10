# gestor-Academico-Daniel-Tuy

Gestor académico Laboratorio 2

# Endpoints de la API

## Registro y LOGIN

### Registro de estudiantes y alumnos, 

- **URL:** `/gestorAcademico/v1/auth/registro`
- **Método:** `POST`
- **Cuerpo:**

```json
{
    "nombre": "String",
    "apellido": "String",
    "nombreUsuario": "String",
    "email": "String",
    "contraseña": "String",
    "role": "String"
}
```

### Login

- **URL:** `/gestorAcademico/v1/auth/login`
- **Método:** `POST`
- **Cuerpo:**

```json
{
    "nombreUsuario": "String",
    "contraseña": "String"
}
```

## Usuarios

### Listar Usuarios

- **URL:** `/gestorAcademico/v1/usuario/`
- **Método:** `GET`

### Buscar Usuario Id

- **URL:** `/gestorAcademico/v1/usuario/findUser/:uid`
- **Método:** `GET`

### Actualizar Usuarios

- **URL:** `/gestorAcademico/v1/usuario/actualizarUsuario/:uid`
- **Método:** `PATCH`
- **Cuerpo:**
  
```json
{
    "nombre": "String",
    "apellido": "String",
    "nombreUsuario": "String",
    "email": "String"
}
```

### Actualizar Contraseña

- **URL:** `/gestorAcademico/v1/usuario/actualizarContrasena/:uid`
- **Método:** `PATCH`
```json
{
"nuevaContraseña": "String"
}
```

### Eliminar Usuario

- **URL:** `/gestorAcademico/v1/usuario/deleteUsuario/:uid`
- **Método:** `DELETE`


## Curso

### Crear Curso

- **URL:** `/gestorAcademico/v1/curso/registroCurso`
- **Método:** `POST`
```json
{
    "nombre": "String",
    "descripcion": "String"
}
```

### Listar Curso

- **URL:** `/gestorAcademico/v1/curso`
- **Método:** `GET`

### Buscar curso por Id

- **URL:** `/gestorAcademico/v1/curso/findCurso/:uid`
- **Método:** `GET`

### Actualizar Curso

- **URL:** `/gestorAcademico/v1/curso/actualizarCurso/:uid`
- **Método:** `PATCH`
- **Cuerpo:**

```json
{
    "nombre": "String",
    "descripcion": "String"
}
```

### Eliminar Curso

- **URL:** `/gestorAcademico/v1/curso/deleteCurso/:uid`
- **Método:** `DELETE`

## Profesor

### Crear Profesor

- **URL:** `/gestorAcademico/v1/profesor/registroProfesor`
- **Método:** `POST`
```json
{
    "nombre": "String",
    "apellido": "String",
    "nombreUsuario": "String",
    "email": "String",
    "contraseña": "String*",
    "curso": "String"

}
```

### Listar Profesores

- **URL:** `/gestorAcademico/v1/profesor/`
- **Método:** `GET`

### Buscar profesor por Id

- **URL:** `/gestorAcademico/v1/profesor/findProfesor/:uid`
- **Método:** `GET`

### Actualizar Profesor

- **URL:** `/gestorAcademico/v1/profesor/actualizarProfesor/:uid`
- **Método:** `PATCH`
- **Cuerpo:**

```json
{
    "nombre": "String",
    "apellido": "String",
    "nombreUsuario": "String",
    "email": "String",
    "contraseña": "String*",
    "curso": "String"

}
```

### Eliminar Profesor

- **URL:** `/gestorAcademico/v1/profesor/deleteProfesor/:uid`
- **Método:** `DELETE`

## Alumno

### Crear Alumno

- **URL:** `/gestorAcademico/v1/alumno/registroAlumno`
- **Método:** `POST`
```json
{
    "nombre": "String",
    "apellido": "String",
    "nombreUsuario": "String",
    "email": "String",
    "contraseña": "String*",
    "curso": "String"

}
```

### Listar Alumno

- **URL:** `/gestorAcademico/v1/alumno/`
- **Método:** `GET`

### Buscar Alumno por Id

- **URL:** `/gestorAcademico/v1/alumno/findAlumno/:uid`
- **Método:** `GET`

### Actualizar Alumno

- **URL:** `/gestorAcademico/v1/alumno/actualizarAlumno/:uid`
- **Método:** `PATCH`
- **Cuerpo:**

```json
{
    "nombre": "String",
    "apellido": "String",
    "nombreUsuario": "String",
    "email": "String",
    "contraseña": "String*",
    "curso": "String"

}
```

### Eliminar Alumno

- **URL:** `/gestorAcademico/v1/alumno/deleteAlumno/:uid`
- **Método:** `DELETE`

