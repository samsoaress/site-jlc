function openMenu() {
  var element = document.getElementById("menu-celular");
  if(element.classList.contains("d-none")){
    element.classList.remove("d-none")
  }else{
    element.classList.add("d-none")
  } 
}

