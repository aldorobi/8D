canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext("2d");
color = "white";
ctx.beginPath();
ctx.arc(300,400,30,0,6.283);
ctx.strokeStyle = "blue";
ctx.lineWidth = "4";
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(340,430,30,0,6.283);
ctx.strokeStyle = "yellow";
ctx.lineWidth = "4";
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(380,400,30,0,6.283);
ctx.strokeStyle = "black";
ctx.lineWidth = "4";
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(420,430,30,0,6.283);
ctx.strokeStyle = "green";
ctx.lineWidth = "4";
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(460,400,30,0,6.283);
ctx.strokeStyle = "red";
ctx.lineWidth = "4";
ctx.stroke();
ctx.closePath();
setTimeout(function(){ctx.clearRect(0, 0, 600, 800); }, 15000)



