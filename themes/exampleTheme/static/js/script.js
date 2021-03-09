// let openVariable

// if(window.innerWidth > 1023) {
//     openVariable = true
// } else {
//     openVariable = false
// }
// console.log(openVariable)


// function openMenu() {
//     return {
        
//         show: openVariable,
//         open() { this.show = true },
//         close() { this.show = false },
//         isOpen() { return this.show === true },
//     }
// }


// const navToggler = document.querySelector('#navToggler')
// const menu = document.querySelector('#menu')

// if(window.innerWidth > 1023) {
//     menu.classList.remove('hidden')
// } else {
//     menu.classList.add('hidden')
// }

// // Mobil: 
// navToggler.addEventListener('click', ()=>{
//     if(menu.classList.contains('hidden') && window.innerWidth < 1023){
//         menu.classList.remove('hidden')
//     } else{
//         menu.classList.add('hidden')
//     }
// });

// // Stor skärm:
// window.addEventListener('resize', () =>{
//     if(window.innerWidth > 1023){
//         menu.classList.remove('hidden')
//     } else {
//         menu.classList.add('hidden')
//     }
// })





// const navToggler = document.querySelector('#navToggler')
// const menu = document.querySelector('#menu')

// // menu.classList.remove('hidden')
// if(window.innerWidth > 1023) {
//     menu.classList.remove('hidden')
// } else {
//     menu.classList.add('hidden')
// }

// // Mobil: 
// navToggler.addEventListener('click', ()=>{
//     if(menu.classList.contains('hidden') && window.innerWidth < 1023){
//         menu.classList.remove('hidden')
//     } else{
//         menu.classList.add('hidden')
//     }
// });

// // Stor skärm:
// window.addEventListener('resize', () =>{
//     if(window.innerWidth > 1023){
//         menu.classList.remove('hidden')
//     } else {
//         menu.classList.add('hidden')
//     }
// })



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






