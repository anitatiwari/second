document.querySelector("botton#add").addEventListener("click",dostuff);

let counter=0;
function dostuff(){
counter=counter+1;
const myTemplate=document.querySelector("template").content;
const myCopy=myTemplate.cloneNode(true);
myCopy.querySeclector("h1").textContent="country"+counter;
document.querySelector("main").appendChild(myCopy)





}