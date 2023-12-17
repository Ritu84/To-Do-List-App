const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

// fn. for adding the task
function addTask(){
    if(inputBox.value ===''){
        alert("Provide some Task!");
    }
    else{
        //storing input by user in li
        let li = document.createElement('li');
        // whatever user enters in input field it'll be added in li
        li.innerHTML=inputBox.value;
        // display the li using ul whose id is list-con.
        listContainer.appendChild(li);

        let span=document.createElement('span');
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
     inputBox.value='';
     savedata();
}
// function for adding task on clicking enter key 
inputBox.addEventListener('keyup', function (event) {
    if (event.key === 'Enter' && inputBox.value.trim() !== '') {
        addTask(inputBox.value);
        inputBox.value = '';
    }
});

// marking checked and removing the task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

// save the data in local storage
function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// displaying the data, whenever user opens the browser
function showtask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showtask();