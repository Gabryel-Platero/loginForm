
const name = document.getElementById("NOMBRE COMPLETO")
const email = document.getElementById("CORREO")


const cotrasena = document.getElementById("password")
const repetirContrasena = document.getElementById("password2")

const succes = document.getElementById("succes")
const fail = document.getElementById("fail")

function verifyPassword() {
    if (cotrasena.value == repetirContrasena.value) {
        console.log("contrasenaCorrecta");
        succes.classList.add("d-block");
        succes.classList.remove("d-none");

        fail.classList.add("d-none");
        fail.classList.remove("d-block");

    } else {
        console.log("contraseña incorrecta,vuelve escribirla hasta que coincida");
        succes.classList.add("d-none");
        succes.classList.remove("d-block");
        fail.classList.add("d-block");
        fail.classList.remove("d-none");

    }
}