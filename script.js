// Script para alternar entre os modos claro e escuro.
 //O script é acionado quando o usuário clica no elemento com id "switch".
 //Ele verifica se o elemento <html> tem a classe "light" ou "dark" e alterna entre elas.
 //Isso permite que o site mude seu tema visual de acordo com a preferência do usuário.
 
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") //versão simplificada usando toggle
    
  //pegar a tag img
  const img = document.querySelector("#profile img") //pegar o atributo src da tag img
       
  // substituir a imagem do perfil
  if (html.classList.contains("light")) {
     //se tiver light mode, adicionar a imagem light
     img.setAttribute("src", "./assets/avatar-light.png") //mudar o atributo src da tag img para a imagem light")
  } else {
     //se tiver sem light mode, manter a imagem normal
     img.setAttribute("src", "./assets/avatar.png") //mudar o atributo src da tag img para a imagem normal
  }
}    
    
    