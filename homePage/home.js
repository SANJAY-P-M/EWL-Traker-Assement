fetch("https://randomuser.me/api/?results=10").then((fetchedpromise) =>{
    fetchedpromise.json().then((jsonpromise) => {
        localStorage.setItem("userdetails",JSON.stringify(jsonpromise))
        y = JSON.phaselocalstorage.getItem("userdetails")
    })
})
var data= "<div class="card"><figure><img src="apple.jpg" ><figcaption>Apple</figcaption></figure></div>"