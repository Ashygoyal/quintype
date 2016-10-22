// Getting id of entire modal
var modal = document.getElementById('myModal');

// Getting id of <a> link which will close the modal
/*var link = document.getElementById("floatingDiv");*/
var link = document.getElementById("myLink");

// getting span element which closes modal
var span = document.getElementsByClassName("close")[0];

// Opening the modal, on click of anchor tag <a> element

link.onclick = function() {
    modal.style.display = "block";
}


// Closing the modal on click of  (x) button
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal on mouse-click at any area outside modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Closing modal on press of Esc key
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        modal.style.display = "none";
    }
});

//If modal shouldn't be displayed on desktops, follow these steps:
//Uncomment below function controlModal(), alongwith line number 5, 
//Also, comment line number 6, 13, 14, 15
// Similarly in index.html, uncomment line 41 and comment line 42 

/*
function controlModal () {
if(document.body.clientWidth > 1024){
    link.onclick = null;
}
else{
    modal.style.display = "block";
}
}*/