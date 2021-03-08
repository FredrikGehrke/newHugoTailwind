const navToggler = document.querySelector('#navToggler')
const menu = document.querySelector('#menu')

menu.classList.remove('hidden')

// Mobil: 
navToggler.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden') && window.innerWidth < 1023){
        menu.classList.remove('hidden')
    } else{
        menu.classList.add('hidden')
    }
});

// Stor skärm:
window.addEventListener('resize', () =>{
    if(window.innerWidth > 1023){
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})


// $(document).ready(function () {
//     $(".navToggler").each(function (_, navToggler) {
//         var target = $(navToggler).data("target");
//         $(navToggler).on("click", function () {
//         $(target).animate({
//             height: "toggle",
//         });
//         });
//     });
// });






