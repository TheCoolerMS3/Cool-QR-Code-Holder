// imports i guess
import * as document from "document";

// the customizable part!!!!!!!!!!!!!!
let background_color = "#FFFFFF";
let text_color = "#000000";
let qrname = "Cool QR Code";

// get the elements by ids heheheheheheheheheheheheh
let qrnametext = document.getElementById("qrname");
let bg_asset = document.getElementById("background");

// apply it all
qrnametext.style.fill = text_color;
qrnametext.text = qrname;
bg_asset.style.fill = background_color;
console.log (background_color)

if (background_color === "#FFFFFF") { // if the background color is white, make the container not white
    document.getElementById("imagecontainer").style.fill = "#c1cbe0"
}
