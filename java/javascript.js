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
offcanvaCerrar.setAttribute('class','btn-close btn-close-white');
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
    agrBtnSCard=document.createElement('button');
    agrBtnSCard.setAttribute('class','btn btn-success agregarCarrito');
    agrBtnSCard.innerText='Agregar'
    colDer.appendChild(agrBtnSCard);
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
cardBody.appendChild(bodyPCardB);
const agrBtnBCard=document.createElement('button');
agrBtnBCard.setAttribute('class','btn btn-success agregarCarrito');
agrBtnBCard.innerText='Agregar'
cardBody.appendChild(agrBtnBCard);
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
const agregarCarrito=document.querySelectorAll('.agregarCarrito');
if(bodyCanva && agregarCarrito.length > 0){
    agregarCarrito.forEach(agregar => {
       agregar.addEventListener('click',function(){
        bodyCanva.appendChild(listaCarrito);
        listaCarrito.classList.add('lista-carrito');
        const items=document.createElement('li');
        items.style.backgroundColor='whitesmoke'

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
    });
    });
};

//Registro - Login sacado de github
const flipCard = document.getElementById('flipCard');
    const registerText = document.getElementById('registerText');
    const loginText = document.getElementById('loginText');

    registerText.addEventListener('click', () => {
        flipCard.style.transform = 'rotateY(180deg)';
        msjNombre.innerText='';
        msjTel.innerText='';
        msjMail.innerText='';
        msjPassword.innerText='';
        msjFechaNac.innerText='';
    });

    loginText.addEventListener('click', () => {
        flipCard.style.transform = 'rotateY(0deg)';
        msjMailLogin.innerText='';
        msjPasswordLogin.innerText='';
    });

//Validacion de formulario de registro
const registerForm=document.getElementById('registerForm')
const msjNombre=document.getElementById('msjNombre');
const msjTel=document.getElementById('msjTel');
const msjMail=document.getElementById('msjMail');
const msjPassword=document.getElementById('msjPassword');
const msjFechaNac=document.getElementById('msjFechaNac');

registerForm.addEventListener('submit',function(e){
    
    msjNombre.innerText='';
    msjTel.innerText='';
    msjMail.innerText='';
    msjPassword.innerText='';
    msjFechaNac.innerText='';
    const nombreReg=document.getElementById('nombreReg').value.trim();
    const telReg=document.getElementById('telReg').value.trim();
    const mailReg=document.getElementById('mailReg').value.trim();
    const passwordReg=document.getElementById('passwordReg').value.trim();
    const fechaNacReg=document.getElementById('fechaNacReg').value;
    let erroresReg=false;

    if(nombreReg===''){
        msjNombre.innerText='Ingrese su nombre'
        msjNombre.style.color='red'
        erroresReg=true
    };
    if(!/^\d{7,15}$/.test(telReg)){
        msjTel.innerText='Ingrese su telefono'
        msjTel.style.color='red'
        erroresReg=true
    };

    const mailRegex=/^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if(mailReg===''){
        msjMail.innerText='Ingrese su correo'
        msjMail.style.color='red'
        erroresReg=true
    }else if(!mailRegex.test(mailReg)){
        msjMail.innerText='Su mail es invalido.'
        msjMail.style.color='red'
        erroresReg=true
    };

    if(passwordReg===''){
        msjPassword.innerText='Ingrese una contraseña'
        msjPassword.style.color='red'
        erroresReg=true
    };

    if(fechaNacReg===''){
        msjFechaNac.innerText='Seleccione su fecha de nacimiento';
        msjFechaNac.style.color='red';
        erroresReg=true;
    }else{
        const fechaNacRegIng=new Date(fechaNacReg);
        const fechaHoy=new Date();
        let edad=fechaHoy.getFullYear() - fechaNacRegIng.getFullYear();
        const mes=fechaHoy.getMonth() - fechaNacRegIng.getMonth();
        const dia=fechaHoy.getDate() - fechaNacRegIng.getDate();
        if (mes < 0 || (mes === 0 && dia < 0)){
             edad--; 
            };
        
        if (edad < 18) {
            msjFechaNac.innerText = 'Debe ser mayor de 18 años para registrarse';
            msjFechaNac.style.color = 'red';
            erroresReg = true;
        };
    };
    if(erroresReg){
        e.preventDefault();
        return;
    }
    
});

//Validacion de formulario de login
const loginForm=document.getElementById('loginForm');
const msjMailLogin=document.getElementById('msjMailLogin');
const msjPasswordLogin=document.getElementById('msjPasswordLogin');

if(loginForm){
    loginForm.addEventListener('submit', function(e){
        
        msjMailLogin.innerText='';
        msjPasswordLogin.innerText='';
        
        const mailLogin=document.getElementById('mailLogin').value.trim();
        const passwordLogin=document.getElementById('passwordLogin').value.trim();
        let erroresLogin=false;
        
        const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(mailLogin===''){
            msjMailLogin.innerText = 'Ingrese su correo electrónico';
            msjMailLogin.style.color = 'red';
            erroresLogin = true;
        }else if(!mailRegex.test(mailLogin)){
            msjMailLogin.innerText='El formato del correo es inválido';
            msjMailLogin.style.color='red';
            erroresLogin=true;
        }
        
        if(passwordLogin===''){
            msjPasswordLogin.innerText='Ingrese su contraseña';
            msjPasswordLogin.style.color='red';
            erroresLogin=true;
        } 

        if(erroresLogin){
            e.preventDefault();
        }
});    
}


    const params = new URLSearchParams(window.location.search);
    const login = params.get('login');     
    const nombre = params.get('nombre');    
    //Busca un nombre asociado al logueo, lo decodifica y lo asocia al id con text content
    //El usuario se loguea con mail y pass pero en la bienvenida se muestra el nombre asociado al registro
    //Esto se va a mostrar en el offcanvas de registro.
    if (nombre) {
        const nombreUsuario = document.getElementById('nombre_usuario');
        if (nombreUsuario) {
            nombreUsuario.textContent = 'Bienvenido ' + decodeURIComponent(nombre);
        }
    }
    //Aca reutilice un toast que tenia de otro proyecto y lo fui adaptando para que muestre algunas cosas en el logueo
    //Si el logueo es "success" todo salio bien entonces muestra la bienvenida
    if (login === 'success') {
        iziToast.success({
            title: '¡Bienvenido ' + (nombre ? decodeURIComponent(nombre) : '') + '!',//Lo mismo que arriba con el nombre
            message: 'Has iniciado sesión correctamente',
            position: 'topRight',
            timeout: 3000,
            onOpening: function () {
                const btnCerrarLog = document.querySelector('#offcanvasRight1 .btn-close');
                if (btnCerrarLog) btnCerrarLog.click();
            }//Esa funcion cierra el canva y muestra el msj
        });
        //Mensajes de error asociados al logueo
    } else if (login === 'wrong_pass') {
        iziToast.error({ 
            title: 'Error',
            message: 'Contraseña incorrecta',
            position: 'topRight' 
        });
    } else if (login === 'no_user') {
        iziToast.warning({ 
            title: 'Atención',
            message: 'Usuario no registrado',
            position: 'topRight'
        });
    }  else if (login === 'server_error') {
        iziToast.error({ 
            title: 'Servidor',
            message: 'Error de conexión',
            position: 'topRight'
        });
    }

    if (login) {
        window.history.replaceState({}, document.title, window.location.pathname);
    }
