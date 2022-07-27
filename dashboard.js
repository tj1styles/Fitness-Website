let collect = localStorage.getItem("NameInput")
// let span = document.getElementById("spark")
// span.textContent = collect
// let cog = document.getElementById("cog")
let loggedBtn = document.getElementById('logged')
loggedBtn.addEventListener('click',()=>{
    window.location.href = `./signin.html`
    console.log('i am working')
})
// let setDiv = document.getElementById("settingsDiv")
// cog.addEventListener("click",()=>{
//     setDiv.style.display = "block"
// })
// cog.addEventListener("dblclick",()=>{
//     setDiv.style.display = "none"
// })
