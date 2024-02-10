const contextMenu = document.querySelector( ".wrapper" );
const shareMenu = contextMenu.querySelector(".share-menu")
document.addEventListener( "contextmenu", e => {
  e.preventDefault();
  let x = e.offsetX, y = e.offsetY,
    winWidth = window.innerWidth,
    winHight = window.innerHeight,
    cmWidth = contextMenu.offsetWidth;
    cmHight = contextMenu.offsetHight;
  
  if ( x > ( winWidth - cmWidth - shareMenu.offsetWidth ) ) {
    shareMenu.style.left = "-200px";
  } else {
      shareMenu.style.left = "";
      shareMenu.style.right = "-200px";
    }


  x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
  y = y > winHight - cmHight ? winHight - cmHight : y;

  contextMenu.style.left=`${x}px`
  contextMenu.style.top=`${y}px`
  contextMenu.style.visibility = "visible"
} );
document.addEventListener("click", ()=> contextMenu.style.visibility = "hidden")