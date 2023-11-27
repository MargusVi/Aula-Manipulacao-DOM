let square = document.querySelector(".square");
const mapedKeys = ['r'];
let deg = 0;

document.addEventListener("keydown", (r) => {
    if(mapedKeys.includes(r.key))
    {
        let rotation = deg + 90;
        console.log(rotation);
        square.style.webkitTransform = 'rotate('+rotation+'deg)'; 
        square.style.mozTransform    = 'rotate('+rotation+'deg)'; 
        square.style.msTransform     = 'rotate('+rotation+'deg)'; 
        square.style.oTransform      = 'rotate('+rotation+'deg)'; 
        square.style.transform       = 'rotate('+rotation+'deg)';
        deg = rotation;
    }
})