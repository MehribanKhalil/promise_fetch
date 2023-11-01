// const todos={
//     title:'title1',desc:'desc1',
//     title:'title2',desc:'desc2',
//     title:'title3',desc:'desc3'
// }

// const toDoEl=document

const tbody = document.getElementById("tbody");
const p = document.getElementById("p");
const p2 = document.getElementById("p2");

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  
  data.forEach((element) => {
  let tr = document.createElement("tr");

    tr.innerHTML=`<td>${element.name}</td>
                 <td>${element.email}</td> 
                 <td>${element.phone}</td> `

    tbody.append(tr);
    console.log(tr);

  });
}

fetchData();



// setInterval(function (){
//     p.innerHTML += "Hello"}
// , 500);

const btn = document.getElementById("btn");
const stop = document.getElementById("stop");
const start = document.getElementById("start");


let timer=0
let count=0
let set

// const set2=setInterval(function () {
//     p2.innerHTML=count++
// }, 500);

btn.addEventListener("click",()=>{
   count=0
//    p2.innerHTML=''
})

stop.addEventListener("click",()=>{
    clearInterval(set)
})

start.addEventListener("click",()=>{
   
    set=setInterval(function () {
        timer=count++
        p2.innerHTML=timer
    }, 500);
    
})