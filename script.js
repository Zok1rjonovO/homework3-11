// let numberArr = [15,23,45,65,89,654];

let elList = document.querySelector("#list")
let elForm = document.querySelector("#form")

let todosArr = [ 
    // {
    //     id: 1,
    //     todo: "darsga borish",
    //     isComplate: true,
    // },
    // {
    //     id: 2,
    //     todo: "darsdan qaytish",
    //     isComplate: false,
    // },
    // {
    //     id: 3,
    //     todo: "darsdan qochish",
    //     isComplate: false,
    // }
];

elForm.addEventListener("submit" , evt =>{
    evt.preventDefault()
    let {todo} = evt.target.elements
    
    let newObj = {
        id: todosArr.length + 1,
        todo: todo.value.trim(),
        isComplate: false
    };
    todosArr.unshift(newObj);
    renderignFunc(todosArr , elList);
    todo.value = null
})

function renderignFunc(array , element) {
    element.innerHTML = null
    for (let i = 0; i < array.length; i++) {
        let newLi = document.createElement("li");
        let newCheckbox = document.createElement("input");
        let newP = document.createElement("p");
        let newButton = document.createElement("button");
        
        if(array[i].isComplate){
            newCheckbox.setAttribute("checked" , "true");
        }
        
        newLi.setAttribute("class", "flex gap-16");
        newCheckbox.setAttribute("type", "checkbox");
        newButton.setAttribute("class", "delbtn");
        
        newButton.dataset.todoID = array[i].id;
        newCheckbox.dataset.todoID = array[i].id;
        
        newButton.addEventListener("click" , evt => {
            let btnID = evt.target.dataset.todoID;
            let found = todosArr.findIndex((item) => item.id == btnID);
            todosArr.splice(found , 1);
            renderignFunc(todosArr , elList);
        })

        newCheckbox.addEventListener("click" , evt => {
            let btnID = evt.target.dataset.todoID;
            let foundtodo = todosArr.find((item) => item.id == btnID);
            foundtodo.isComplate = !foundtodo.isComplate;
            renderignFunc(todosArr , elList);
        })
        
        newP.textContent = array[i].todo;
        newButton.textContent = "Delete";
        
        newLi.append(newCheckbox);
        newLi.append(newP);
        newLi.append(newButton);
        
        element.append(newLi);
    }
}
renderignFunc(todosArr , elList);