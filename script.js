let imgQR = document.getElementById( 'imgQR' );
let qrcode = document.getElementById('qrcode');
let QRtext = document.getElementById('QRtext');

function generateQR(){
    if( QRtext.value.length > 0 ) {
        qrcode.src =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
        imgQR.classList.add("show-img");
    }
   else {
    QRtext.classList.add('error');
    setTimeout(()=> {
        QRtext.classList.remove('error')
    },1000);
   }
}