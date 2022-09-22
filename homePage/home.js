fetch("https://randomuser.me/api/?results=10").then((fetchedpromise) =>{
    fetchedpromise.json().then((jsonpromise) => {
        localStorage.setItem("userdetails",JSON.stringify(jsonpromise.results))
       let  y = JSON.parse(localStorage.getItem("userdetails"))
       let data =""
       y.forEach(element => {
           data += "<div class="card"><figure><img src=/"${element.picture.medium}/" ><figcaption>Apple</figcaption></figure></div>"
        });
        console.log(data)
        document.getElementsByName("main").innerHTML=data;
    })
})