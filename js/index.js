function openMenu() {
  var element = document.getElementById("menu-celular");
  var body = document.getElementsByTagName("body");
  if(element.classList.contains("d-none")){
    element.classList.remove("d-none");
    body.classList.add("overflow-hidden");
  }else{
    element.classList.add("d-none");
    body.classList.remove("overflow-hidden");
  } 




}

