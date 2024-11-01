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
      $(".ul-collapse").slideDown()
      $('.fixed-top-right').hide()
    })
    $(".collapse-bottom").click(function(){
      $(".ul-collapse").slideUp()
      $('.fixed-top-right').show()
    })
});
window.onload = hideModal()
function hideModal(){
  console.log('hidden')
}
const form = document.querySelector('form')
const qrContainer = document.getElementById('qr-container')
const QR = new QRCode(qrContainer, 'www.tecnitec.com-bono-15%')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  QR.makeCode(form.qrText.value)

})
/*
window.addEventListener('scroll', ()=>{
  if (document.documentElement.scrollTop > 96){
    //console.log(document.documentElement.scrollTop)
  } 
})*/
const onTop = ()=> document.body.scrollTop = 0
