var animation = anime.timeline({
  autoplay:false
});

animation
 .add({
   targets:'#btn',
   top:'none',
   duration:500,
   easing:'easeInOutSine'
 });

animation
 .add({
  targets:'#stars',
  top:'0px',
  duration:1000,
  easing:'easeInOutSine'
});

animation
 .add({
  targets:'#mountain',
  bottom:'0',
  duration:500,
  easing:'easeInOutSine'
});

animation
 .add({
  targets:'#front',
  bottom:'0',
  duration:1000,
  easing:'easeInOutSine'
});

animation
 .add({
  targets:'#moon',
  top:'0px',
  duration:500,
  easing:'easeInOutSine'
});

 document.querySelector('#btn').onclick = animation.play;