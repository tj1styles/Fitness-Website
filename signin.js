let emailInput = document.getElementById("emailInput")
let passWordInput = document.getElementById("passwordInput")
let Btn = document.getElementById("createBtn")
Btn.addEventListener("click",(e)=>{
   e.preventDefault()
   let p = localStorage.getItem("EmailInput")
   let y = localStorage.getItem("PasswordInput")
   if(emailInput.value == p && passWordInput.value == y){
     window.location.href = `Dashboard.html`
   }
   else{
       alert("Wrong Details Filled, Please Try again")
   }
})
