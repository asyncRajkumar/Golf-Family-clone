let cursor = document.querySelector("#cursor");
let blury = document.querySelector("#cursorblur");

document.addEventListener("mousemove", function (e) {
    console.log(e.y)
    cursor.style.left = e.x-9 + "px";
    cursor.style.top = e.y-9 + "px";
  blury.style.left = e.x - 250 + "px";
  blury.style.top = e.y - 250 + "px";
});

gsap.to('#nav',{
    backgroundColor:"black",
    duration:1,
    height:100,
scrollTrigger:{
    trigger:"#nav",
scoller:"body",
// markers:true,
start:"top -5%",
end:"top -12%",
scrub:1

}
})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
    scoller:"body",
    // markers:true,
    start:"top -37%",
    end:"top -70%",
    scrub:4,
    }
})
gsap.from("#last h1",{
y:40,
duration:1,
 scrollTrigger:{
    trigger:"#last h1",
scoller:"body",
// markers:true,
start:"top 100%",
end:"top 90%",
scrub:2
}
})
gsap.from("#w1",{
x:-52,
y:-52,
 scrollTrigger:{
    trigger:"#w1",
scoller:"body",
// markers:true,
start:"top 100%",
end:"top 80%",
scrub:3
}
})
gsap.from("#w2",{
x:52,
y:52,
 scrollTrigger:{
    trigger:"#w1",
scoller:"body",
// markers:true,
start:"top 80%",
end:"top 500%",
scrub:3
}
})