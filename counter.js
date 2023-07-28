let updateval1=document.getElementById("updatevalue")
function onincrement() {
    let a=updateval1.textContent;
    let counterval= parseInt(a)+1;
    if(counterval>0)
    updateval1.style.color = "green";
    else if(counterval<0)
    updateval1.style.color = "red";
    else
    updateval1.style.color = "black";
    updateval1.textContent=counterval;
}
function onres() {
   let count=0;
   updateval1.textContent=count;
   updateval1.style.color="black";
}
function ondecrement() {
    let a=updateval1.textContent;
    let counterval= parseInt(a)-1;
    if(counterval>0)
    updateval1.style.color = "green";
    else if(counterval<0)
    updateval1.style.color = "red";
    else
    updateval1.style.color = "black";
    updateval1.textContent=counterval;
}