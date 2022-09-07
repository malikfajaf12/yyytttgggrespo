document.getElementById("year").innerHTML = new Date().getFullYear();

// link wa
function buy(harga) {
    const konten = document.getElementsByClassName("harga")[harga].innerHTML;
    const barang = document.getElementsByClassName("barang")[harga].innerHTML;
    
    const message = `Halo saya mau beli ${barang} harga ${konten}`
    const whatsapp = `https://wa.me/6281285241889?text=${message}`
    location.href = whatsapp

    // alert(barang + " harga : " + konten)
    alert(message)
}

function chat() {
    const halo='halo Min ';
    const wa = `https://wa.me/6281285241889?text=${halo}`;
    location.href = wa
    alert(wa)
}
