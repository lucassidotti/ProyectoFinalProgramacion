// card pequeña
function smallCardDinamic(contenedor){
    const smallCard=document.createElement('div');
    smallCard.setAttribute('class','small-card shadow');
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

for(let i=0;i<=5;i++){
    smallCardDinamic(destacados)

};
for(let i=0;i<=5;i++){
    smallCardDinamic(ofertas)

};
// card pequeña

// dark mode
const body=document.body
const btnMode=document.getElementById('btn-mode')
const icono=document.getElementById('icono')
function modoOscuro(cont,boton){
    if(cont.classList.contains('dark-mode')){
        cont.classList.remove('dark-mode');
        icono.src='imagenes/moon-stars-fill.svg'
        

    }else{
        cont.classList.add('dark-mode');
        icono.src='imagenes/sun-fill.svg'
        
       
        
    }
};
btnMode.addEventListener('click',()=>modoOscuro(body));

function elegirMarca(){
    const btnAsus=document.getElementById('btnAsus');
    const btnLogi=document.getElementById('btnLogi');
    const btnSteel=document.getElementById('btnSteel');
    const btnCorsair=document.getElementById('btnCorsair');
    const btnThermal=document.getElementById('btnThermal');
    const imgMarca=document.getElementById('imgMarc')
    btnAsus.addEventListener('click',()=>{
        imgMarca.src='imagenes/asus-logo.png'
    })
    btnLogi.addEventListener('click',()=>{
        imgMarca.src='imagenes/logi-logo.png'
    })
    btnSteel.addEventListener('click',()=>{
        imgMarca.src='imagenes/steel-logo.png'
    })
    btnCorsair.addEventListener('click',()=>{
        imgMarca.src='imagenes/corsair-logo.png'
    })
    btnThermal.addEventListener('click',()=>{
        imgMarca.src='imagenes/thermal-logo.png'
    })
};
elegirMarca();

//BigCard
function BigCardDinamic(contenido){
const BigCard=document.createElement('div');
BigCard.setAttribute('class','card');
BigCard.style.width='16rem';
contenido.appendChild(BigCard);
const imgBCard=document.createElement('img')
imgBCard.setAttribute('class','card-img-top');
imgBCard.src='imagenes/asusTuf.png'
imgBCard.alt='Imagen tarjeta grande';
BigCard.appendChild(imgBCard);
const cardBody=document.createElement('div');
cardBody.setAttribute('class','card-body');
BigCard.appendChild(cardBody);
const cardTitle=document.createElement('h6');
cardTitle.setAttribute('class','card-title');
cardTitle.innerText='Notebook ASUS Vivobook Go 15 15.6" AMD Ryzen 5 7520U 8GB DDR5 SSD 512GB Win11 E1504FA-NJ179W';
cardBody.appendChild(cardTitle);
const bodySpan=document.createElement('span');
bodySpan.setAttribute('class','card-text');
bodySpan.innerHTML='<s>$740.000</s>';
cardBody.appendChild(bodySpan);
const bodyPCardB=document.createElement('p');
bodyPCardB.setAttribute('class','card-text fs-5');
bodyPCardB.innerText='$ 850.000';
cardBody.appendChild(bodyPCardB)
};

const colMarc=document.getElementById('colMarc');
for(let i=0;i<=2;i++){
    BigCardDinamic(colMarc)
};



