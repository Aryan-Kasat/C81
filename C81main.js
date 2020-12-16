canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(100,100,50,0,2*Math.PI);
ctx.stroke();
  color="blue";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(event){
color=document.getElementById("colour").value;
mouse_x=event.clientX-canvas.offsetLeft;
mouse_y=event.clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
function cleararea(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}
