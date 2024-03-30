//Function to change the site from light mode to dark mode

function modeSwitch(){
    
    document.body.classList.toggle("dark");
    
}

//Rotates pictures in the middle picture which is in the contact page
function rotatePictures(){
    var imageFiles = ["Coding1.jpg", "Coding2.jpg", "Sleep.jpg"];
    var currentImage = document.getElementById("image");
    for(var imageNo=0; imageNo<imageFiles.length; imageNo++) {
        if(currentImage.src.endsWith(imageFiles[imageNo])) {
            currentImage.src = "Images/" + imageFiles[(imageNo+1) % imageFiles.length];
            return;
        }
    }
}

//[1] DL, David Lewis, 'Rotate/source code' (), 2020. [JAVASCRIPT].
//It's from the video on the learn.gold page for javascript examples.



