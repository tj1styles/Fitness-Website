
let NameInput = document.getElementById('nameInput')
let passwordInput = document.getElementById('passwordInput')
let mobileInput = document.getElementById('numberInput')
let mailInput = document.getElementById('mailInput')
let btn = document.getElementById('createBtn')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let nameInputV = NameInput.value
    let passwordInputV = passwordInput.value
    let mobileInputV = mobileInput.value
    let emailInputV = mailInput.value
    localStorage.setItem('NameInput',nameInputV)
    localStorage.setItem('PasswordInput',passwordInputV)
    localStorage.setItem('MobileInput',mobileInputV)
    localStorage.setItem('EmailInput',emailInputV)
    window.location.href = './Dashboard.html'
})
