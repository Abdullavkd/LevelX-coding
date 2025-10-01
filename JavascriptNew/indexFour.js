// //API Fetching using Promise
// (function(){
    
//     fetch("https://fakestoreapi.com/products").then(response=>{
//         return response.json();

//     }).then((data)=>{
//         console.log(data);
        
//     })
// })();



// //API Fetching using Async Await
// (async function(){
//     let datas = await fetch("https://fakestoreapi.com/products");
//     console.log(datas);
//     let responses = await datas.json();
//     console.log(responses);
    
//     responses.map((data)=>{
//         document.getElementById("rawName").innerHTML = data.title;
//         document.getElementById("rawPrice").innerHTML = data.price;
//         document.getElementById("rawImage").src = data.image;
//     })
    
    
// })();



//API Fetching all
(async function(){
    let data = await fetch("https://fakestoreapi.com/products");
    let response = await data.json()
    console.log(response);
    
    response.map((data)=>{
        let table = document.querySelector("table");

        let row = document.createElement("tr");

        let name = document.createElement("td");
        name.textContent = data.title;

        let price = document.createElement("td");
        price.textContent = data.price;

        let imageParent = document.createElement("td");
        let image = document.createElement("img");
        image.src = data.image;

        image.style.width = "25px";
        image.style.height = "auto";

        row.appendChild(name);
        row.appendChild(price);
        row.appendChild(imageParent);
        imageParent.appendChild(image);
        table.appendChild(row);
    })

})();
