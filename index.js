$(function(){
  $("#toggle2").click();
    $("#toggle1").click(function(){
      $(".modal-mask").fadeIn('slow').
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
const qrContainer = document.getElementById('qr-container')
new QRCode(qrContainer, 'www.tecnitec.com-bono-15%')