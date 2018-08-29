const $submenuList = $(".submenu");
const $toggle = $("[data-toggle]");
const $content = $("[data-content]");

const $submenu = $("[data-submenu]");
const $submenuToggle = $("[data-submenu-toggle]");

// Dropdown Menu Function
// const Dropdown = () => {
//     let target = event.currentTarget;
//     let $submenuList = $(target).find('.submenu');
//     $submenuList.addClass('is-active');
// }

// const Dropdownrelease = () => {
//     $submenuList.removeClass('is-active');
// }

const toggle = () => {
  $content.slideToggle();

  let text = $toggle.html();
  // toggle text values
  $toggle.html(text == "Show More" ? "Show Less" : "Show More");
  // Toggle aria expanded
  $toggle.attr("aria-expanded", function(i, attr) {
    return attr == "true" ? "false" : "true";
  });
};

const submenuToggle = self => {
  $(self).attr("aria-expanded", function(i, attr) {
    return attr == "true" ? "false" : "true";
  });

  if($submenu.hasClass('is-active')) {
        $submenu.removeClass('is-active');
  } else {
      $submenu.addClass('is-active');
      $submenu.find('.submenu__link').eq(0).focus();
  }
};

const BindUIActions = () => {
  // $submenu.on('mouseenter', Dropdown);
  // $submenuList.on('mouseleave', Dropdownrelease);
  $toggle.on("click", toggle);
  $submenuToggle.on("click enter", function() {
    submenuToggle(this);
  });
  $submenu.on('blur', function(){
      $(this).removeClass('is-active');
      console.log(this, 'losing focus');
  });
  $('.submenu__list').on('blur', function(){
      $(this).removeClass('is-active');
      console.log(this, 'losing focus');
  });
};

$(window).on("load", function() {
  $content.hide();
  BindUIActions();
  console.log("hi");
});
