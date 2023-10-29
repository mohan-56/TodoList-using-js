let inpbx = document.querySelector('#inp');
 let list = document.querySelector('#list') ;
inpbx.addEventListener("keyup", function(event){ 
    if (event.key == "Enter") {
        if(this.value==""){alert("write something..");
        return;
    }

addItem(this.value)
this.value = ""
}
})
function add()
{
    addItem(inpbx.value)
    inpbx.value=""
}
let addItem = (inpbx) => {
let listItem = document.createElement("li");
 listItem.innerHTML = `${inpbx}<i></i>`;
listItem.addEventListener("click", function()
{ this.classList.toggle('done');
})
listItem.querySelector("i").addEventListener("click",
function(){
    listItem.remove();
})

list.appendChild(listItem);
}
