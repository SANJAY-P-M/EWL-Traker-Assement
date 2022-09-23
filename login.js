fetch('https://randomuser.me/api/?results=10').then((fetchedPromise) => {
    fetchedPromise.json().then((jsonPromise) => {
        localStorage.setItem("validation-details",JSON.stringify(jsonPromise.results))
    })
})
function check(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    JSON.parse(localStorage.getItem("validation-details")).forEach(element => {
        if(element.login.username = username && element.login.password == password)
            location.replace("home.html")
        else
            document.getElementById("notice").innerHTML = "Doode check your passwordv! <br> Try again :)"
    });
    //console.log();

}