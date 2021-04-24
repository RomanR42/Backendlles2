const body           = document.getElementsByTagName ('body')[0];
const blocks         = document.getElementsByClassName ('main__item');
const modal          = document.querySelector ('.modal');
const modalBtn       = document.querySelector ('.modal__btn');
const modalClose     = document.querySelector ('.modal__close');

const inputLight = document.querySelector ('#inputLight');
const inputDark  = document.querySelector ('#inputDark');
const inputGray  = document.querySelector ('#inputGray');

const btnLight = document.querySelector ('#btnLight');
const btnDark  = document.querySelector ('#btnDark');
const btnGray  = document.querySelector ('#btnGray');

const select = document.querySelector ('#select');

inputLight.addEventListener ('change', () => {
    changeTheme('light');
    activeElementsLight();
}, false);
inputDark.addEventListener  ('change', () => {
    changeTheme('dark');
    activeElementsDark();
}, false);
inputGray.addEventListener  ('change', () => {
    changeTheme('gray');
    activeElementsGray();
}, false);

btnLight.addEventListener ('click', ()=> {
    changeTheme('light');
    activeElementsLight();
}, false);
btnDark.addEventListener  ('click', ()=> {
    changeTheme('dark');
    activeElementsDark();
}, false);
btnGray.addEventListener  ('click', ()=> {
    changeTheme('gray');
    activeElementsGray();
}, false);

select.addEventListener ('change', (e) => {
        changeTheme(e.target.value);
        if (e.target.value == 'light') {activeElementsLight()};
        if (e.target.value == 'dark')  {activeElementsDark()};
        if (e.target.value == 'gray')  {activeElementsGray()};
},false)

function changeTheme(theme) {
    body.className = '';
    body.className = theme;
}

function activeElementsLight() {
    btnLight.classList.add ('header__toggle-btn--active');
    btnDark.classList.remove ('header__toggle-btn--active');
    btnGray.classList.remove ('header__toggle-btn--active');
    inputLight.checked = true;
    select.selectedIndex = 0;
}
function activeElementsDark() {
    btnLight.classList.remove ('header__toggle-btn--active');
    btnDark.classList.add ('header__toggle-btn--active');
    btnGray.classList.remove ('header__toggle-btn--active');
    inputDark.checked = true;
    select.selectedIndex = 1;
}
function activeElementsGray() {
    btnLight.classList.remove ('header__toggle-btn--active');
    btnDark.classList.remove ('header__toggle-btn--active');
    btnGray.classList.add ('header__toggle-btn--active');
    inputGray.checked = true;
    select.selectedIndex = 2;
}

for (let i=0; i<blocks.length;i++) {
    blocks[i].addEventListener ('click', showModal, false);
}
modalBtn.addEventListener   ('click',closeModal, false);
modalClose.addEventListener ('click',closeModal, false);

function showModal() {
   modal.style.display = 'flex';
}
function closeModal() {
    modal.classList.add ('hide-modal');
    setTimeout(function(){
    modal.style.display = 'none';
    modal.classList.remove ('hide-modal');
    }, 300);
} 