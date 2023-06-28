function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");

  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}

const filters_cat = document.querySelectorAll(".filter-btn");
let active_cards = document.querySelectorAll(
  ".project-slider .swiper-slide:not(.d-none)"


);

filters_cat.forEach((filter)=>{
    filter.addEventListener("click",function(){
        filters_cat.forEach((filter)=>{
            filter.classList.remove("btn-active")
        });
        this.classList.add("btn-active");
        const category=this.dataset.cat;
        const cards=document.querySelectorAll(
            ".project-slider .swiper-slide"
        )
    
    });

    let selectedcat
})