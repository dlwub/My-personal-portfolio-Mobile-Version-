let mobile_nav = document.querySelector('.mobile-navigation');
let img_1 = document.querySelector('.geomerty_1');
let close_btn = document.querySelector('.close_btn');
let menu_container = document.querySelector('.menu-container');
mobile_nav.addEventListener('click', showMenu);
close_btn.addEventListener('click', hideMenu);
let openMenu;
let dot_img_1 = document.createElement('img');

dot_img_1.className = "dot_img_1";
dot_img_1.src = "images/image_dots_small.png";
menu_container.appendChild(dot_img_1);
const createItems = (menu_items) => {
    let menu = document.createElement('ul');
    menu.className = "mobile-menu";
    for(let i=0; i < menu_items.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = "#" + menu_items[i];
        a.innerText = menu_items[i];
        li.appendChild(a);
        li.addEventListener('click', function(){
            for(let item of menu.querySelectorAll('li')){
                if(item.textContent!==this.textContent){
                    item.style.display = 'block';
                }
            }           
            this.style.display = 'none';            
        })
        menu.appendChild(li);
    }
    return menu;
}

const menu_items = ['Home', 'Portfolio', 'About', 'Contact'];
let mobile_menu = createItems(menu_items);
menu_container.appendChild(mobile_menu);

let dot_img_2 = document.createElement('img');
dot_img_2.className = "dot_img_2";
dot_img_2.src = "images/image_dots_small.png";
menu_container.appendChild(dot_img_2);
let img_bg = document.createElement('div');
img_bg.style.backgroundImage = "url('images/mask_group.png')";
img_bg.style.height = '6.6em';
img_bg.style.backgroundSize = 'cover';    
img_bg.style.maxWidth = '100%';
img_bg.style.backgroundRepeat = 'norepeat';
menu_container.appendChild(img_bg);

function showMenu(){
    openMenu = true;
    img_1.src = "images/image_geometry_3.png";
    mobile_nav.style.display = "none";
    close_btn.style.display = "block";
    menu_container.classList.add('active-menu');
    window.addEventListener("resize", function(){
        if(this.window.innerWidth >= 768){
            close_btn.style.display = "none";
        } else if(openMenu){
            close_btn.style.display = "block";
        }   
      });
}

function hideMenu(){
    openMenu = false;
    img_1.src = "images/image_geometry_1.png";    
    close_btn.style.display = 'none';
    mobile_nav.style.display = "block";
    menu_container.classList.remove('active-menu');  
}



