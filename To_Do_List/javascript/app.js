let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    let delbtn = document.createElement("button");    
    item.innerText = input.value;
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value = ""; // Clear the input
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
        let par = event.target.parentElement;
        par.remove();
    }
});




// function addtask (){
//     if(inputBox.value === ""){
//         alert("You Must Enter Something")
//     }
//     else{
//         let li = document.createElement("li")
//         li.innerHTML = inputBox.value;
//         listcontainer.appendChild(li)

//     }
// }