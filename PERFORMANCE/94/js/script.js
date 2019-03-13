 'use strict'
// optimalizacia progress baru
const progressBar = document.querySelector('.progress');
const shittyBar = document.querySelector('.shittier');
let documentHeight = document.body.scrollHeight - window.innerHeight; 
let percentScrolled;


window.addEventListener('scroll', () => {
    percentScrolled =(pageYOffset/documentHeight)
    console.log(documentHeight, pageYOffset, Math.floor(percentScrolled) + '%');
    //progressBar.style.width = percentScrolled + '%'
    // menit nie sirku ale transform scale po osy X
    progressBar.style.transform = `scaleX(${percentScrolled})`;
    shittyBar.style.width = (percentScrolled*100)+'%';

    heavyCoding();
});



// Performance funkcia

function heavyCoding() {
    var start = Date.now();
    var stoptime = Math.floor(Math.random() * 40) + 40; // pauza
  
    // this a blocking operation
    // a real ajax call, for example, would not be blocking
    // but this serves to illustrate a point
    // about how expensive constantly firing events is
    while ( Date.now() - start < stoptime ) {
        // sleep
    }
  
    console.log('fired', Date.now());
}