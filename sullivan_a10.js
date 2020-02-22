/*  Anna Sullivan
    sullivan_a10.js
    INFO2124WW
    Thoendel
    2/22/2020
*/


document.getElementById('action').addEventListener('click', function() {
    //WRITE YOUR SOLUTION BETWEEN THIS COMMENT
    
let img = document.getElementById("photo"); //return the element photo by its id

img.getAttribute("src"); //get attribute src from the photo element

img.setAttribute("src", "02.jpg"); //set attribute src in the photo element

//return the element by tag name h1
document.getElementsByTagName("H1")[0].setAttribute("class", "greenText"); //set attribute class to greenText

    //AND THIS COMMENT
});