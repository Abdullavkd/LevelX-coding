let inputArea = document.getElementById('input-area');
let inputButton = document.getElementById('add-btn');
let addedItems = document.getElementById('added-items');

//step 02
function addKitchenItems(){
    let itemData = inputArea.value;
    let li = document.createElement("li");
    li.innerHTML = itemData;
    addedItems.appendChild(li);
    inputArea.focus();
    inputArea.value = "";
    console.log(li)
}



//step 01
inputButton.addEventListener("click",addKitchenItems)