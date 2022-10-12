let getPassword = document.getElementById('getPassword') //button get password
let savePassword = document.getElementById('savePassword')//button save password
let passwordLength = document.getElementById('passwordLength')// panjang password yang di input
let password = document.getElementById('password')// password yang ditampilkan

function generatePassword(len) {
  const lowerAlphabet = "abcdefghijklmnopgrstuvwxyz"
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numerik = "0123456789"
  const symbol = "!@#$%^&*()_+=-[]/.,`{}|';><?"

  const data = lowerAlphabet + upperAlphabet + numerik + symbol
  console.log(data.length)
  let generator = ''
  for (let index = 0; index < len; index++) {
    generator += data[Math.floor(Math.random() * 90)]
  }
  return generator
}

getPassword.addEventListener(('click'), function () {
  const newPassword = generatePassword(passwordLength.value)
  password.value = newPassword
  setTimeout(() => {
    alert('Password Has Been Generated')
  }, 500);
})

savePassword.addEventListener('click', function () {
  savePassword.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${password.value}`))
  savePassword.setAttribute('download', 'PasswordGeneratorLog.txt')
})





