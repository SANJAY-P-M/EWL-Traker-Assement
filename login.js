fetch('https://randomuser.me/api/?results=10').then((data)=>{
    data.json().then((usableData) => {
       localStorage.setItem( "apiData",JSON.stringify(usableData.results));
        let userData =JSON.parse(localStorage.getItem("apiData"))
       // console.log(userData[0])
   })
})
function check(){
    
}