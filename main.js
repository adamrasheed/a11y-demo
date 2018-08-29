const $submenu = $('[data-submenu]');
const $submenuList = $('.submenu');
const $toggle = $('[data-toggle]');
const $content = $('[data-content]');

const $submenuToggle = $('[data-submenu-toggle]');

// Dropdown Menu Function
const Dropdown = () => {
    let target = event.currentTarget;
    let $submenuList = $(target).find('.submenu');
    $submenuList.addClass('is-active');
}

const Dropdownrelease = () => {
    $submenuList.removeClass('is-active');
}

const toggle = () => {
    $content.slideToggle();
}


const BindUIActions = () => {
    $submenu.on('mouseenter', Dropdown);
    $submenuList.on('mouseleave', Dropdownrelease);
    $toggle.on('click', toggle);
}

$(window).on('load',function(){
    $content.hide();
    BindUIActions();
});