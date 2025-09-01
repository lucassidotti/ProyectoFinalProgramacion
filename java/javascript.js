
function smallCardDinamic(contenedor){
    const smallCard=document.createElement('div');
    smallCard.classList.add('small-card');
    contenedor.appendChild(smallCard);
    const contImgSCard=document.createElement('div');
    contImgSCard.classList.add('cont-img-s-card');
    smallCard.appendChild(contImgSCard);
    const imgSCard=document.createElement('img');
    imgSCard.classList.add('img-s-card');
    imgSCard.src = "imagenes/monitor.jpg";
    imgSCard.alt = "Monitor Lenovo";
    contImgSCard.appendChild(imgSCard);
    const colDer=document.createElement('div');
    colDer.classList.add('col-der');
    smallCard.appendChild(colDer);
    const descSCard=document.createElement('div');
    descSCard.classList.add('desc-s-card');
    colDer.appendChild(descSCard)
    const desc=document.createElement('h4');
    desc.innerText='Monitor Lenovo ThinkVision S22i-30 21.5" FHD IPS 75Hz Anti Glare VESA';
    descSCard.appendChild(desc);
    const precioSCard=document.createElement('div');
    precioSCard.classList.add('precio-s-card');
    colDer.appendChild(precioSCard)
    const s1=document.createElement('span');
    s1.innerText='$';
    precioSCard.appendChild(s1)
    const s2=document.createElement('span');
    s2.innerText='500.000';
    precioSCard.appendChild(s2)
}
const destacados=document.getElementById('destacados')
const ofertas=document.querySelector('.ofertas')

for(i=0;i<=5;i++){
    smallCardDinamic(destacados)

}
for(i=0;i<=5;i++){
    smallCardDinamic(ofertas)

}

