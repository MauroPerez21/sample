$(function(){
  $("#toggle2").click();
    $("#toggle1").click(function(){
      $(".modal-mask").fadeIn('slow')
      show();
    });
    
    $("#toggle2").click(function(){
      $(".modal-mask").hide();
    });
});
window.onload = hideModal()
function hideModal(){
  document.getElementsByClassName("modal-mask").display='none'
}

function rotateString()
{
  var element = document.getElementById('target')
  var textNode = element.childNodes[0]
  var text = textNode.data
  setInterval (
    function(){
    text = text[text.length-1] + text.substring(0,text.length-1)
    textNode.data = text
  },300)
 
} 

