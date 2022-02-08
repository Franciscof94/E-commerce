class Username {

    constructor(username, email, password) {

        this.username = username,
        this.email = email,
        this.password = password
    }

    registerUser() {
        if(this.username !=="") {
            return "OK"
        } else {
            return "ERROR: No se pudo crear el usuario"
        }
    }
}