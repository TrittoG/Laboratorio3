
var btnModal;
var modal;
var btnCerrar;



window.addEventListener('load', () => {

    btnModal = document.getElementById('btnModal');
    modal = document.getElementById('modal');
    btnCerrar = document.getElementById('btnCerrar');



    btnModal.addEventListener('click', () => {
        //modal.open = !modal.open;
        modal.setAttribute('open', true);

    });

    btnCerrar.addEventListener('click', () => {

        modal.removeAttribute('open');

    });



});


