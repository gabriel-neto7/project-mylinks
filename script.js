function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    
    img.setAttribute("src", "assets/IMG_20251022_090835_019.jpg")} 
  else {
    img.setAttribute("src", "assets/IMG_20251022_090835_019.jpg")}
 
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
}

