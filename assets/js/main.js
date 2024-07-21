const $body = document.body,
  $nav = document.querySelector(".nav"),
  $navItems = document.querySelectorAll(".nav-item"),
  $desktopBpMd = window.matchMedia("only screen and (max-width: 991px)"),
  loader = new Loader({
    id: "loader",
    nixe: ".loader-nixe"
  }),
  scrollspy = new Scrollspy({
    header: ".header",
    sections: "section",
    active: "nav-link-active"
  }),
  header = new Header({
    header: ".header",
    active: "header-active",
    nixe: ".logo-img"
  }),
  nixe = new Nixe({
    nixe: ".logo-img",
    nixeImg1: "assets/img/nixe/nixe-hands-up.png",
    nixeImg2: "assets/img/nixe/Nixe-cartel.png"
  }),
  typewriter = new Typewriter({
    id: "#typewriter",
    text: ["marca", "empresa", "idea"]
  }),
  portafolioSlider = new FadeSlider({
    sliderImg: ".slider-img",
    nextItem: ".slider-arrow-next",
    previousItem: ".slider-arrow-previous",
    interval: 5e3,
    sliderActive: "slider-active"
  }),
  blogLeerMas = new Blog({
    blogPostText: ".blog-post-text",
    btnLeerMas: ".btn-leer-mas"
  }),
  year = new Year({
    id: "year"
  });
window.addEventListener("load", function () {
  loader.nixeDone(),
    scrollspy.init(),
    typewriter.init()
}),
  window.addEventListener("scroll", function () {
    scrollspy.spy(),
      header.scroll(),
      nixe.scroll()
  }),
  window.addEventListener("resize", function () {
    scrollspy.init()
  }),
  window.addEventListener("DOMContentLoaded", function () {
    portafolioSlider.init(),
      blogLeerMas.init(scrollspy),
      year.getYear()
  });
const headerMQ = e => {
  e.matches,
    loader.start()
};
$desktopBpMd.addListener(headerMQ),
  headerMQ($desktopBpMd);
const sidenavMQ = e => {
  var instances;
  if (e.matches) {
    $nav.style.transform = "translateX(-105%)",
      instances = M.Sidenav.init($nav);
    for (let i of $navItems) i.classList.add("waves")
  } else {
    $body.style.overflow = "",
      $nav.style.transform = "translateX(0px)";
    for (let i of $navItems) i.classList.remove("waves")
  }
};
$desktopBpMd.addListener(sidenavMQ),
  sidenavMQ($desktopBpMd);
const nixeMQ = e => {
  e.matches ? nixe.changeValues({
    nixe: ".nixe-responsive",
    nixeImg1: "assets/img/nixe/Nixe-responsive-up.png",
    nixeImg2: "assets/img/nixe/Nixe-responsive.png"
  }) : nixe.changeValues({
    nixe: ".logo-img",
    nixeImg1: "assets/img/nixe/nixe-hands-up.png",
    nixeImg2: "assets/img/nixe/Nixe-cartel.png"
  })
};
$desktopBpMd.addListener(nixeMQ),
  nixeMQ($desktopBpMd);
function mostrarContenido() {
  var elemento = document.getElementById('contenidoMisionVision');
  elemento.classList.add('mostrarContenido');
}