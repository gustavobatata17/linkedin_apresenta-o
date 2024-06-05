//animação,animation 
const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
})
//menu
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var menu = document.getElementById("menu_frontal");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}
let g = 1;
function qrcode(){
  let qr = document.getElementById('qrcode_img')
  g++;
  if(g %2 == 0 ){
    qr.innerHTML = ""
  }else{
    qr.innerHTML = "<img class='img_frame' src='img/frame.png'>"
  }
}

function video_linkedin(){
  let video = document.getElementById('video_li')
  if(video.innerHTML == ""){
    video.innerHTML = `<iframe class="iframe_reference" width="20%" height="20%" src="https://www.youtube.com/embed/tzNr3pVQopg?si=nvGZtLM475w79LUx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  }else{
    video.innerHTML = ""
  }
}
