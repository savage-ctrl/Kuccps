const search=document.getElementById("search");
const items=document.querySelectorAll("#courses li");

if(search){
 search.addEventListener("keyup",()=>{
  items.forEach(i=>{
   i.style.display=i.textContent.toLowerCase()
   .includes(search.value.toLowerCase())?"block":"none";
  });
 });
}
