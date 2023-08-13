const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
    inputBox.value = "";
    save();

}

listContainer.addEventListener("click", function(confirm){
    if(confirm.target.tagName === "LI"){
        confirm.target.classList.toggle("checked");
        save();
    }
    else if(confirm.target.tagName === "SPAN"){
        confirm.target.parentElement.remove();
        save();
    }
}, false);

function save(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function show(){
    listContainer.innerHTML = localStorage.getItem("data");
}
show();