(()=>{

const nav = document.querySelector("dialog#navigation");
const navPopup = document.querySelector("#menuPopup");
const navCloseButton = nav.querySelector('#nav_close');
navPopup.addEventListener('click',() => {
    nav.showModal();
});

[...nav.querySelectorAll('li a')].forEach(el=>{
    el.addEventListener('click', () => {
        nav.close();
    })
})
navCloseButton.addEventListener('click', () => {
    nav.close();
})
})();