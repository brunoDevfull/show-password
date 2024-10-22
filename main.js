function hideShowPassword() {
    const inputPassword = document.getElementById('password')
    const passswordEye = document.getElementById('password-eye')

    console.log(passswordEye.classList)

    if (inputPassword.type === 'password') {
        console.log(inputPassword.type, '-> text')
        inputPassword.type = 'text'

        passswordEye.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else {
        console.log(inputPassword.type, '-> passsword')
        inputPassword.type = 'password'

        passswordEye.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}