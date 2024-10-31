$(function(){
  $("#toggle2").click();
    $("#toggle1").click(function(){
      $(".modal-mask").fadeIn('slow').
      show();
    });
    
    $("#toggle2").click(function(){
      $(".modal-mask").hide();
    });
    $(".fixed-top-right").click(function(){
      $(".ul-collapse").toggle()
    })
});
window.onload = hideModal()
function hideModal(){
  document.getElementsByClassName("modal-mask").display='none'
}
const qrContainer = document.getElementById('qr-container')
new QRCode(qrContainer, 'www.tecnitec.com-bono-15%')

/*
window.addEventListener('scroll', ()=>{
  if (document.documentElement.scrollTop > 96){
    //console.log(document.documentElement.scrollTop)
  } 
})*/
const onTop = ()=> document.body.scrollTop = 0
