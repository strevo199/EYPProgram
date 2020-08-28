const menuBtn = document.querySelector('.menu-btn')
const menu2 = document.querySelector('.menu2')
const menuItems = document.querySelectorAll('.menu-item')

let show = false;

menuBtn.addEventListener('click',function (e) {
  if (!show) {
    menuBtn.classList.add('show')
    menu2.classList.add('show')
    menuItems.forEach(item =>{
      item.classList.add('show')
    })
    show = true
  } else {
    menuBtn.classList.remove('show')
    menu2.classList.remove('show')
    menuItems.forEach(item =>{
      item.classList.remove('show')
    })
    show = false 
  }
})

//scroll;

document.addEventListener('scroll', function (e) {
  if (scrollY > 90) {
    document.querySelector('.nav-wrapper').style.lineHeight = '40px';
    
  } else {
    document.querySelector('.nav-wrapper').style.lineHeight = '80px';
  }
})