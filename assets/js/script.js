document.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener("touchstart", playVideo);
    function playVideo() {
        const video = document.getElementById('headerVideo');
        if(video.playing) {
        } else {
            video.play();
        }
    }
});


// const zoomElement = document.querySelector("#zoom");
// let zoom = 1;
// const ZOOM_SPEED = 0.2;

// document.addEventListener("wheel", function (e) {
//   if (e.deltaY > 1) {
//     zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
//   } else {
//     zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
//   }
// });


// var content = document.getElementById('zoom').getElementsByTagName('h1');
// var zX = 1;
// window.addEventListener('wheel', function (e) {
//     var dir;
//     if (!e.ctrlKey) {
//         return;
//     }
//     dir = (e.deltaY > 0) ? 0.1 : -0.1;
//     zX += dir;
//     for (var i = 0; i<content.length; i++) {
//          content[i].style.transform = 'scale(' + zX + ')';
//         }

//     e.preventDefault();
//     return;
// });

// $(function() {

//     $(window).scroll(function() {
  
//       var mass = Math.min(20, 1+0.005*$(this).scrollTop());
  
//       $('#zoom').css('transform', 'scale(' + mass + ')');
//     });
//   });


// video.addEventListener('loadedmetadata', function() {
//     if (video.buffered.length === 0) return;

//     const bufferedSeconds = video.buffered.end(0) - video.buffered.start(0);
//     console.log(`${bufferedSeconds} seconds of video are ready to play.`);
// });



// const text = document.querySelector('h1');

// window.addEventListener('scroll', () => {
//     const current = window.scrollY;
//     text.style.fontSize = `clamp(2rem, ${current}px, 20rem)`; 
// })


// window.addEventListener('scroll',function(){
//     document.querySelector('h1').style.fontSize=((document.body.scrollTop*.05)+14)+'px';
//   });


