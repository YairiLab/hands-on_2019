let food_storage = {};
let offset = 0;

function rotate(){
    let parentDiv = document.getElementById("rotate-boxes__wrapper");
    let childDiv = parentDiv.firstElementChild;
    parentDiv.removeChild(childDiv);
    parentDiv.appendChild(childDiv);
    offset = (offset+1)%7;
    localStorage.setItem("offset", offset);
}

function right_rotate(){
    let parentDiv = document.getElementById("rotate-boxes__wrapper");
    let childDiv = parentDiv.lastElementChild;
    parentDiv.removeChild(childDiv);
    parentDiv.insertBefore(childDiv, parentDiv.childNodes[0]);
    offset = (offset+6)%7;
    localStorage.setItem("offset", offset);
}

function addNewFavorite(){
    let food_text = document.getElementById("new-favorite").value;
    if(food_text===""){
        alert("１文字以上入力してください。");
        return;
    }
    let food_list = document.getElementById("favorite-food__list");
    let food_element = document.createElement("li");
    food_element.textContent = food_text;
    food_list.appendChild(food_element);
    food_storage[food_text] = food_text;
    localStorage.setItem("food_storage", JSON.stringify(food_storage));
}

function reload_favorite(){
    let obj = JSON.parse(localStorage.getItem("food_storage"));
    let food_list = document.getElementById("favorite-food__list");
    let rotate_times = localStorage.getItem("offset");
    for(let i=0;i<rotate_times;i++){
        rotate();
        console.log(i);
    }
    Object.keys(obj).forEach(function (key) {
        let food_element = document.createElement("li");
        food_element.textContent = obj[key];
        food_list.appendChild(food_element);
        food_storage[key] = obj[key];
      });
}