let data =``;
fetch("https://randomuser.me/api/?results=10").then((fetchedpromise) =>{
    fetchedpromise.json().then((jsonpromise) => {
        localStorage.setItem("userdetails",JSON.stringify(jsonpromise.results))
       let  y = JSON.parse(localStorage.getItem("userdetails"))
       console.log(y)
       y.forEach(element => {
           data += `<div class="card"><figure><img src="${element.picture.medium}" ><figcaption></figcaption></figure></div>`
           document.getElementById("main").innerHTML += data
           console.log(data)
        });
    })
})