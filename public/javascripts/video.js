

// this is the if / else like statment for my play/pause button for the video, cant be done in css because js is for logic //
    
var myVideo=document.getElementById("video");
function playPause() 
    { 
        if (myVideo.paused) myVideo.play(); 
        else myVideo.pause(); 
    }