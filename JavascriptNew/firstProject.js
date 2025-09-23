let inputArea = document.getElementById('input-area');
let inputButton = document.getElementById('add-btn');
let addedItems = document.getElementById('added-items');

let itemArray = [];
let itemData;
//step 02
//Create add button action

//Set Value To Local Storage
function setValueToLocalStorage(){
    localStorage.setItem("items",itemData)
}

//Get Value From Local Storage
function getValueFromLocalStorage(){
    if(localStorage.getItem("items")){
        itemData = localStorage.getItem("items");
        viewItems();
    }

}
//To View When Refresh
function viewItems(){
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = itemData;
    li.appendChild(span);
    itemArray.push(li)
    addedItems.appendChild(itemArray[itemArray.length-1]);
    inputArea.focus();
    inputArea.value = "";

    //Create Delete Button
    let delButton = document.createElement("i");
    delButton.classList.add("fa","fa-trash-o")
    delButton.setAttribute('style','border: none; background-color: orange;color: black;height:17px;padding: 4px; margin-top:-3px;border-radius: 3px;cursor:pointer;margin-left: auto;margin-right: 9px;width:15px; padding-left:5px')
    li.appendChild(delButton);

    //Create Edit Button
    let editButton = document.createElement("i");
    editButton.classList.add("fa","fa-edit");
    editButton.setAttribute('style','border: none; background-color: orange;color: black;height:17px;padding: 4px; margin-top:-3px;border-radius: 3px;cursor:pointer;')
    li.appendChild(editButton);

    li.style.display = "flex";
    li.style.justifyContent = "space-between";
        console.log(li)
}


function addKitchenItems(){
    itemData = inputArea.value;

    setValueToLocalStorage();
    getValueFromLocalStorage();

    // let li = document.createElement("li");
    // let span = document.createElement("span");
    // span.innerHTML = itemData;
    // li.appendChild(span);
    // itemArray.push(li)
    // addedItems.appendChild(itemArray[itemArray.length-1]);
    // inputArea.focus();
    // inputArea.value = "";

    // //Create Delete Button
    // let delButton = document.createElement("i");
    // delButton.classList.add("fa","fa-trash-o")
    // delButton.setAttribute('style','border: none; background-color: orange;color: black;height:17px;padding: 4px; margin-top:-3px;border-radius: 3px;cursor:pointer;margin-left: auto;margin-right: 9px;width:15px; padding-left:5px')
    // li.appendChild(delButton);

    // //Create Edit Button
    // let editButton = document.createElement("i");
    // editButton.classList.add("fa","fa-edit");
    // editButton.setAttribute('style','border: none; background-color: orange;color: black;height:17px;padding: 4px; margin-top:-3px;border-radius: 3px;cursor:pointer;')
    // li.appendChild(editButton);

    // li.style.display = "flex";
    // li.style.justifyContent = "space-between";
    //     console.log(li)
}


//Delete Button Function
function deleteItem(event){
    console.log(event.target.classList[1])
    if(event.target.classList[1]==="fa-trash-o"){
        let item = event.target.parentElement;
        item.classList.add("slideOut");
        item.addEventListener("animationend",function(){
            item.remove();
        })
    }
}


//EditItem function for edit Button
function editItem(event){
    console.log(event.target.classList[1]);
    if(event.target.classList[1] == "fa-edit"){
        let editedValue = prompt("Pleae Add New Value");
        let span = event.target.parentElement.querySelector("span");
        span.innerText = editedValue;
        console.log(editedValue)
    }
}


addedItems.addEventListener("click",deleteItem);
addedItems.addEventListener("click",editItem);

//step 01
inputButton.addEventListener("click",addKitchenItems);
document.addEventListener('keydown',function(event){
    if(event.key == 'Enter'){
        addKitchenItems()
        console.log("Enter Pressed")
    }
})


getValueFromLocalStorage();
