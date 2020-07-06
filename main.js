var overlay = document.querySelector('#overlay');

let timeline = gsap.timeline();

 timeline.to('#overlay',{
     duration:2,
     ease:'expo.inOut',
     height:'150%',
     width:'150%',
 })
 .from('#overlay h3',{
     opacity:0,
     y:20,
     duration:1,
    ease:'expo.inOut'
 })
 .to('#overlay h3',{
    opacity:0,
    y:-20,
    duration:1,
   ease:'expo.inOut'
})
.to('#overlay',{
    opacity:0,
    duration:1,
    onComplete: function(){
        overlay.style.display = 'none';
    },
   ease:'expo.inOut',
})
.from('#leftNav h4',{
    opacity:0,
    x:20,
    duration:1,
    ease:'expo.inOut'
}
)
.from('#middleMain',{
    opacity:0,
})

.from('#navIcons i',{
    opacity:0,
    stagger:0.3,
    delay:-1,
    x:20,
    delay:-0.7,
    duration:1,
    ease:'expo.inOut'
}
)
.from('#line1',{
    width:0,
    delay:-0.7,
    duration:1,
    ease:'expo.inOut'
}
)
.from('#line2',{
    opacity:0,
    width:0,
    delay:-0.95,
    duration:1,
    ease:'expo.inOut'
}
)
.from('#leftDetailsInfo ',{
    opacity:0,
    stagger:0.3,
    y:20,
    delay:-1,
    duration:1,
    ease:'expo.inOut'
}
)
.from('#scroller',{
    opacity:0,
    delay:-0.5,
    duration:1,
    ease:'expo.inOut'
}
)
.from('#rightMain a ',{
    opacity:0,
    stagger:0.3,
    y:20,
    delay:-1,
    duration:1,
    ease:'expo.inOut'
}
)
var rightOverlay = document.querySelector('#rightOverlay');
function displayWorkSamples(){
    rightOverlay.style.display = 'flex';
    gsap.to('#rightOverlay',{
        delay:-.5,
        left:0,
        ease:'expo.inOut',
        duration:1.5,
    })
    run();
}


var tl2 = gsap.timeline();
function run(){
tl2.from('#rightOverlay h3',{
    delay:1,
    opacity:0,
    duration:1,
    x:60,
    ease:'expo.inOut'
})
tl2.from('#rightOverlay h3 span',{
    opacity:0,
    duration:1,
    ease:'expo.inOut'
})
tl2.from('#wsImg img',{
    opacity:0,
    stagger:.3,
    delay:-.8,
    x:'100%',
    duration:1,
    ease:'expo.inOut'
})
tl2.from('#wsButton',{
    opacity:0,
    duration:1,
    delay:-.8,
    y:40,
    ease:'expo.inOut'
})
tl2.from('#wsfInsta',{
    opacity:0,
    duration:1,
    x:40,
    ease:'expo.inOut'
})  
tl2.from('#designWork',{
    opacity:0,
    duration:1,
    delay:-.8,
    y:40,
    ease:'expo.inOut'
})
tl2.from('#interactive',{
    opacity:0,
    duration:1,
    delay:-.8,
    y:-40,
    ease:'expo.inOut'
})
tl2.from('#web',{
    opacity:0,
    duration:1,
    delay:-.8,
    ease:'expo.inOut'
})
tl2.from('#font',{
    opacity:0,
    duration:1,
    delay:-.8,
    y:40,
    ease:'expo.inOut'
})
tl2.from('#c4d',{
    opacity:0,
    duration:1,
    delay:-.8,
    y:-40,
    ease:'expo.inOut'
})
}

var cross = document.querySelector('.close');       
cross.addEventListener('click',function(){
    tl2.reverse();
    setTimeout(function(){
        gsap.to('#rightOverlay',{
            delay:-.5,
            left:'100%',
            ease:'expo.inOut',
            duration:1.5,
        })
        setTimeout(function(){
            rightOverlay.style.display = 'none';
        },500)
    },5000
)})