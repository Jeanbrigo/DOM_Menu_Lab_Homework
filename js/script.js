// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

// 1.0
const mainEl = document.querySelector("main");

// console.log(mainEl)

// 1.1

mainEl.style.backgroundColor = 'var(--main-bg)';

// 1.2

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// 1.3

mainEl.classList.add('flex-ctr');

// 2.0

const topMenuEl = document.querySelector("#top-menu");

// 2.1

topMenuEl.style.height = '100%';

// 2.2

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// 2.3

topMenuEl.classList.add('flex-around');

// 3.1

for(const link of menuLinks) {
    const newLink = document.createElement("a")
    newLink.innerText = link.text
    topMenuEl.append(newLink)
}

// 4.0

const subMenuEl = document.querySelector("#sub-menu");

// 4.1

subMenuEl.style.height = '100%'

// 4.2

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

// 4.3

subMenuEl.classList.add('flex-arouind');

// 4.4

subMenuEl.style.position = 'absolute';

// 4.5

subMenuEl.style.top = 0

// 5.1

const topMenuLinks = document.querySelectorAll('a')

var showingSubMenu = false;

// 5.2

topMenuEl.addEventListener("click", function(event) {
    event.preventDefault()
    if(event.target == "a"){
        console.log(event.target)
    }
    else {
    return
    }
})
