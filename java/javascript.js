//Menu burger
const btnBurger=document.getElementById('btnBurger');
const menuBurger=document.getElementById('menuBurger');
if(btnBurger && menuBurger){
    btnBurger.addEventListener('click',function(){
        menuBurger.classList.toggle('show');
        const cerrarBurger=btnBurger.querySelector('i');
        if(menuBurger.classList.contains('show')){
         cerrarBurger.classList.remove('bi-list');
         cerrarBurger.classList.add('bi-x');
        
        }else{
         cerrarBurger.classList.remove('bi-x');
         cerrarBurger.classList.add('bi-list');
        
        }
});
};

// Esto agrega un offcanva clonado totalmente de Boostrap
if (!document.getElementById('offcanvasRight')) {
const offcanva=document.createElement('div');
const offcanvaHeader=document.createElement('div');
const offcanvaTitle=document.createElement('h5');
const offcanvaCerrar=document.createElement('button');
const offcanvaBody=document.createElement('div');
const cartItems=document.createElement('div');
const buyBtn=document.createElement('button');


offcanva.setAttribute('class','offcanvas offcanvas-end');
offcanva.setAttribute('tabindex','-1');
offcanva.setAttribute('id','offcanvasRight');
offcanva.setAttribute('aria-labelledby','offcanvasRightLabel');
document.body.appendChild(offcanva);

offcanvaHeader.setAttribute('class','offcanvas-header');
offcanva.appendChild(offcanvaHeader);

offcanvaTitle.setAttribute('class','offcanvas-title');
offcanvaTitle.setAttribute('id','offcanvasRightLabel');
offcanvaTitle.textContent='Tu carrito';
offcanvaHeader.appendChild(offcanvaTitle);

offcanvaCerrar.setAttribute('type','button');
offcanvaCerrar.setAttribute('class','btn-close');
offcanvaCerrar.setAttribute('data-bs-dismiss','offcanvas');
offcanvaCerrar.setAttribute('aria-label','close')
offcanvaHeader.appendChild(offcanvaCerrar);

offcanvaBody.setAttribute('class','offcanvas-body d-flex flex-column');
offcanva.appendChild(offcanvaBody);

cartItems.setAttribute('id','cart-items');
cartItems.setAttribute('class','mb-3');
offcanvaBody.appendChild(cartItems);

buyBtn.setAttribute('id','buy-btn');
buyBtn.setAttribute('class','btn btn-success mt-auto comprar');
buyBtn.textContent='Comprar';
offcanvaBody.appendChild(buyBtn);
};
// Esto agrega un offcanva clonado totalmente de Boostrap

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
if(destacados){
    for(let i=0;i<=5;i++){
        smallCardDinamic(destacados)
    }
};
if(ofertas){
    for(let i=0;i<=5;i++){
        smallCardDinamic(ofertas)
    }
};
// card pequeña

// dark mode
const body = document.body;
const btnMode = document.getElementById('btn-mode');
const icono = document.getElementById('icono');

function modoOscuro(cont){
    if(cont.classList.contains('dark-mode')){
        cont.classList.remove('dark-mode');
        icono.src = 'imagenes/moon-stars-fill.svg';
    } else {
        cont.classList.add('dark-mode');
        icono.src = 'imagenes/sun-fill.svg';
    }
}

if(btnMode && icono){
    btnMode.addEventListener('click', ()=> {
        modoOscuro(body);
    });
}

//Elegir marca
function elegirMarca(){
    const btnAsus=document.getElementById('btnAsus');
    const btnLogi=document.getElementById('btnLogi');
    const btnSteel=document.getElementById('btnSteel');
    const btnCorsair=document.getElementById('btnCorsair');
    const btnThermal=document.getElementById('btnThermal');
    const imgMarca=document.getElementById('imgMarc')
     if(imgMarca) {  
        if(btnAsus) {
            btnAsus.addEventListener('click', ()=> {
                imgMarca.src='imagenes/asus-logo.png';
            });
        }
        if(btnLogi) {
            btnLogi.addEventListener('click', ()=> {
                imgMarca.src='imagenes/logi-logo.png';
            });
        }
        if(btnSteel) {
            btnSteel.addEventListener('click', ()=> {
                imgMarca.src='imagenes/steel-logo.png';
            });
        }
        if(btnCorsair) {
            btnCorsair.addEventListener('click', ()=> {
                imgMarca.src='imagenes/corsair-logo.png';
            });
        }
        if(btnThermal) {
            btnThermal.addEventListener('click', ()=> {
                imgMarca.src='imagenes/thermal-logo.png';
            });
        }
    }
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
if(colMarc){
for(let i=0;i<=2;i++){
    BigCardDinamic(colMarc)
};
};

//Carrito
let datos=['$800.000','Monitor Lenovo ThinkVision 21.5" FHD IPS 75Hz Anti Glare VESA']

const bodyCanva=document.getElementById('cart-items');
const listaCarrito=document.createElement('ul');
const agregarCarrito=document.getElementById('btnAgregarCarrito');
if(bodyCanva && agregarCarrito){
    agregarCarrito.addEventListener('click',function(){
        bodyCanva.appendChild(listaCarrito);
        listaCarrito.classList.add('lista-carrito');
        const items=document.createElement('li');

        const contImgCanva=document.createElement('div');
        contImgCanva.classList.add('img-cont-canva')
        items.appendChild(contImgCanva);
        const imgCanva=document.createElement('img');
        imgCanva.src= "imagenes/monitor.jpg"
        contImgCanva.appendChild(imgCanva);

        const descProdCarrito = document.createElement('span');
        descProdCarrito.textContent = datos.join(', ');
        descProdCarrito.classList.add('desc-prod-carrito')
        items.appendChild(descProdCarrito);

        let contador=1;
        const divCont=document.createElement('div');
        divCont.classList.add('div-contador');
        items.appendChild(divCont);
        
        const btnMenos=document.createElement('button');
        const iconMenos=document.createElement('i')
        btnMenos.addEventListener('click',()=>{
            if(contador>1){
                contador=contador-1
                scont.innerText=contador;
            }
        });
        iconMenos.setAttribute('class','bi bi-dash');
        btnMenos.appendChild(iconMenos);
        btnMenos.classList.add('btn-menos');
        divCont.appendChild(btnMenos);

        const scont=document.createElement('span');
        scont.innerText=contador;
        scont.classList.add('contador-text')
        divCont.appendChild(scont);
        
        const btnMas=document.createElement('button');
        const iconMas=document.createElement('i')
        btnMas.addEventListener('click',()=>{
            contador=contador+1;
            scont.innerText=contador;
        });
        iconMas.setAttribute('class','bi bi-plus');
        btnMas.appendChild(iconMas);
        btnMas.classList.add('btn-mas');
        divCont.appendChild(btnMas);

        const eliminar=document.createElement('button');
        eliminar.classList.add('eliminar-item');
        eliminar.innerText='Eliminar';
        items.appendChild(eliminar);
        eliminar.addEventListener('click',()=>{
            items.remove()
        });
         listaCarrito.appendChild(items);
    })

};


