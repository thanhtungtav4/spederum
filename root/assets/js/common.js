var navicon = document.getElementById('navicon');
var navEl = document.getElementById('siteNav');


 function toggleMenu(){
   navEl.classList.toggle('is_active');
   navicon.classList.toggle('is_active');
};

navicon.addEventListener("click", toggleMenu, false);