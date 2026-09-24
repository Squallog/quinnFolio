const canvas = document.getElementById("bg");
const tile = document.getElementById("carpetTile");
console.log(canvas);

function setSize(canvas) {
    let viewWidth = document.documentElement.clientWidth;
    let viewHeight = document.documentElement.clientHeight;
    canvas.width = viewWidth;
    canvas.height = viewHeight;
}

function drawPattern(canvas, tile) {
    let ctx = canvas.getContext("2d");
    let pattern = ctx.createPattern(tile, "repeat");
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = pattern;
    ctx.fill();
}

window.addEventListener("resize", ()=>{
    setSize(canvas);
    drawPattern(canvas, tile);
})

setSize(canvas);
drawPattern(canvas, tile);