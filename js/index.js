let sidenavActivator = document.getElementById("sidenav-activater");

sidenavActivator.onclick = (e) => {
  let sidenav = document.getElementsByClassName("sidenav")[0];
  if (sidenav.classList.contains("close")) {
    sidenav.classList.remove("close");
    sidenav.classList.add("open");
  } else {
    sidenav.classList.remove("open");
    sidenav.classList.add("close");
  }
};

let sidenav_close = document.getElementsByClassName("sidenav-close");
for (let x = 0; x < sidenav_close.length; x++) {
  sidenav_close[x].onclick = (e) => {
    let sidenav = document.getElementsByClassName("sidenav")[0];
    sidenav.classList.remove("open");
    sidenav.classList.add("close");
  };
}
document.getElementsByClassName("main")[0].onclick = (e) => {
  let sidenav = document.getElementsByClassName("sidenav")[0];
  sidenav.classList.remove("open");
  sidenav.classList.add("close");
};
