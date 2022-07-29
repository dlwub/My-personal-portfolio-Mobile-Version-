//Mobile menu
const mobile_nav = document.querySelector('.mobile-navigation');
const img_1 = document.querySelector('.geomerty_1');
const close_btn = document.querySelector('.close_btn');
const menu_container = document.querySelector('.menu-container');
mobile_nav.addEventListener('click', showMenu);
close_btn.addEventListener('click', hideMenu);
let openMenu;
const dot_img_1 = document.createElement('img');

dot_img_1.className = "dot_img_1";
dot_img_1.src = "images/image_dots_small.png";
menu_container.appendChild(dot_img_1);
const createItems = (menu_items) => {
    const menu = document.createElement('ul');
    menu.className = "mobile-menu";
    for(let i=0; i < menu_items.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = "#" + menu_items[i];
        a.innerText = menu_items[i];
        li.appendChild(a);
        li.addEventListener('click', function(){
            hideMenu();         
        })
        menu.appendChild(li);
    }
    return menu;
}

const menu_items = ['Home', 'Portfolio', 'About', 'Contact'];
const mobile_menu = createItems(menu_items);
menu_container.appendChild(mobile_menu);

const dot_img_2 = document.createElement('img');
dot_img_2.className = "dot_img_2";
dot_img_2.src = "images/image_dots_small.png";
menu_container.appendChild(dot_img_2);
const img_bg = document.createElement('div');
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

// Creating the project section dynamically

const project_arr = [{
            project_name:"Project I",
            class_name: "project-i",
            project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n"
            + "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n"
            + "veniam, quis nostrud exercitation ullamco laboris nisi\n\n"
            + "Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet,\n"
            + "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n"
            + "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n"
            + "ullamco laboris nisi.",
            project_image: "images/Rectangle21.png",
            techs_used:["HTML/CSS", "Ruby on Rails", "JavaScript"],
            live_link:"",
            source_link:""
        }, 
        {
            project_name:"Project II",
            class_name: "project-ii",
            project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n"
            + "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n"
            + "veniam, quis nostrud exercitation ullamco laboris nisi\n\n"
            + "Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet,\n"
            + "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n"
            + "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n"
            + "ullamco laboris nisi.",
            project_image: "images/Rectangle22.png",
            techs_used:["HTML/CSS", "Ruby on Rails", "JavaScript"],
            live_link:"",
            source_link:""
        }, 
        {
            project_name:"Project III",
            class_name: "project-iii",
            project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n"
            + "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n"
            + "veniam, quis nostrud exercitation ullamco laboris nisi\n\n"
            + "Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet,\n"
            + "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n"
            + "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n"
            + "ullamco laboris nisi.",
            project_image: "images/Rectangle23.png", 
            techs_used:["HTML/CSS", "Ruby on Rails", "JavaScript"],
            live_link:"",
            source_link:""
        },
        {
            project_name:"Project IV",
            class_name: "project-iv",
            project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n"
            + "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n"
            + "veniam, quis nostrud exercitation ullamco laboris nisi\n\n"
            + "Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet,\n"
            + "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n"
            + "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n"
            + "ullamco laboris nisi.",
            project_image: "images/Rectangle24.png",
            techs_used:["HTML/CSS", "Ruby on Rails", "JavaScript"],
            live_link:"",
            source_link:""
        },
        {
            project_name:"Project V",
            class_name: "project-v",
            project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n"
            + "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n"
            + "veniam, quis nostrud exercitation ullamco laboris nisi\n\n"
            + "Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet,\n"
            + "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n"
            + "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n"
            + "ullamco laboris nisi.",
            project_image: "images/Rectangle25.png",
            techs_used:["HTML/CSS", "Ruby on Rails", "JavaScript"],
            live_link:"",
            source_link:""
        },
        {
            project_name:"Project VI",
            class_name: "project-vi",
            project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n"
                + "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n"
                + "veniam, quis nostrud exercitation ullamco laboris nisi\n\n"
                + "Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet,\n"
                + "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n"
                + "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n"
                + "ullamco laboris nisi.",
            project_image: "images/Rectangle26.png",
            techs_used:["HTML/CSS", "Ruby on Rails", "JavaScript"],
            live_link:"",
            source_link:""
        }]
// Image array
const img_arr = [    
            {
                img_name: "img-dots-i",
                src: "images/image_dots-1.png",
                alt: "Square of dots"
            }, 
            {
                img_name: "project-i-img",
                src: "images/Rectangle21.png",
                alt: "A person coding on a laptop"
            },
            {
                img_name: "project-ii-img",
                src: "images/Rectangle22.png",
                alt: "MacBook pro 16 free mockup"
            },
            {
                img_name: "img-dots-ii",
                src: "images/image_dots-1.png",
                alt: "Square of dots"
            }, 
            {
                img_name: "inverted-square",
                src: "images/inverted-square.png",
                alt: "Diamond shape"
            },
            {
                img_name: "project-iii-img",
                src: "images/Rectangle23.png",
                alt: "A laptop and a smart phone showing the same image"
            }, 
            {
                img_name: "joined-rectangles",
                src: "images/Group83.png",
                alt: "Different geometric shapes joined together"
            }, 
            {
                img_name: "project-iv-img",
                src: "images/Rectangle24.png",
                alt: "an open laptop showing a website"
            }, 
            {
                img_name: "project-v-img",
                src: "images/Rectangle25.png",
                alt: "an open laptop showing a website"
            },
            {
                img_name: "project-vi-img",
                src: "images/Rectangle26.png",
                alt: "A MacBook and an iPhone showing the same text"
            },  
            {
                img_name: "project-cell-viii",
                src: "images/image-geometry_5.png",
                alt: "Different geometric shapes joined"
            }, 
            {
                img_name: "close-btn-modal",
                src: "images/close_btn_big.png",
                alt: "Modal close button"
            },
            {
                img_name: "left-carousal",
                src: "images/left_carousel_sml.png",
                alt: "Left carousel"
            },
            {
                img_name: "right-carousal",
                src: "images/right_carousel_sml.png",
                alt: "Right carousel"
            },  
            {
                img_name: "livecode-img",
                src: "images/ic_live.png",
                alt: "Link to see code live"
            },     
            {
                img_name: "github-img",
                src: "images/ic_github_black.png",
                alt: "Github link"
            },        
        ]

// Function to create images dynamically

function createImage(i){
    const img1 = document.createElement('img');
    img1.className = img_arr[i]["img_name"];
    img1.src = img_arr[i]["src"];
    img1.alt = img_arr[i]["alt"];
    return img1;
}

//Function to create elements dynamically
function createElt(elt, class_name, text_content){
    const elt1 = document.createElement(elt);
    elt1.className = class_name;
    elt1.textContent = text_content;
    return elt1;
}
//Function to create grid containers (cells) dynamically
function createGridContainer(i){
    const div = createElt('div', project_arr[i]["class_name"], '');
    div.classList.add('grid-container');    
    const h3 = createElt('h3', 'project-name', project_arr[i]["project_name"]);
    if(i===4){
        h3.classList.add('project-v-name');
    }

    const span1 = createElt('span', "tech-1", project_arr[i]["techs_used"][0]);
    if(i===4){
        span1.classList.add('project-v-tech-1');
    }

    const span2 = createElt('span', "tech-2", project_arr[i]["techs_used"][1]);
    if(i===4){
        span2.classList.add('project-v-tech-2');
    }

    const span3 = createElt('span', "tech-3", project_arr[i]["techs_used"][2]);
    if(i===4){
        span3.classList.add('project-v-tech-3');
    }

    const btn = createElt('button', "project-btn", "See this project ->");
    if(i===4){
        btn.classList.add('project-v-btn');
    }

    btn.addEventListener('click', function(){
        displayModal(i);
    });
    const modal = createModal(i);
    
    div.appendChild(h3);
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    div.appendChild(btn);
    document.body.insertBefore(modal, document.body.firstChild);    
    return div;
}

// Function to create popup windows dynamically

function createModal(i){
    const project_modal = createElt('div', "project-modal", "");  
    project_modal.setAttribute('id', 'modal-' + i);  
    const modal_content = createElt('div', "modal-content", "");
    const proj_name_container = createElt('div', "proj-name-container", "");
    const proj_name_modal = createElt('h2', "proj-name-modal", project_arr[i]["project_name"]);
    const modal_close = createImage(11);

    const btn_container = createElt('div', "btn-container-modal", '');
    const btn_1 = createElt('div', "tech-btn-1", project_arr[i]["techs_used"][0]);
    const btn_2 = createElt('div', "tech-btn-2", project_arr[i]["techs_used"][1]);
    const btn_3 = createElt('div', "tech-btn-3", project_arr[i]["techs_used"][2]);
    btn_container.appendChild(btn_1);
    btn_container.appendChild(btn_2);
    btn_container.appendChild(btn_3);
    //Create project images dynamically
    const img_container = createElt('div', "proj-img-container", "");
    const project_img = createElt('img', "project-image", "");
    project_img.src = project_arr[i]["project_image"];
    project_img.alt = "Project image big size";
    const left_carousel = createImage(12);
    const right_carousel = createImage(13);
    left_carousel.classList.add('left-carousel');
    right_carousel.classList.add('right-carousel');
    img_container.append(project_img);
    img_container.append(left_carousel);
    img_container.append(right_carousel);    
        
    const small_imgs_container = createElt('div', "small-imgs-container", "");
    for(let j = 0; j < 4; j++){
        const small_img = createElt('div', "project-small-image", "");
        small_img.style.backgroundImage = "url('" + project_arr[i]["project_image"]+"')";         
        small_imgs_container.append(small_img);
    } 
    img_container.append(small_imgs_container);

    const lower_container = createElt('div', "lower-container", '');
    const proj_descr = createElt('p', "proj-descr", project_arr[i]["project_description"]);
    
    const link_container = createElt('div', "link-container", "");
    const live_div = createElt('div', "live-div", "");
    const live_btn = createElt('button', "live-btn", "See live");
    const live_img = createImage(14);
    live_div.appendChild(live_btn);
    live_div.appendChild(live_img);

    const source_div = createElt('div', "source-div", "");
    const source_btn = createElt('button', "source-btn", "See source");
    const source_img = createImage(15);
    source_div.appendChild(source_btn);
    source_div.appendChild(source_img);

    source_btn.addEventListener('mouseover', function(){
        source_img.src = "images/ic_github.png";
    })

    source_btn.addEventListener('mouseout', function(){
        source_img.src = "images/ic_github_black.png";
        source_btn.style.backgroundColor = '#fff;'
    })

    link_container.appendChild(live_div);
    link_container.appendChild(source_div);

    lower_container.appendChild(proj_descr);
    lower_container.appendChild(link_container);

    const prev_btn = createElt("button", "prev-btn", "<- Previous project");
    const next_btn = createElt("button", "next-btn", "Next project ->");
    const btns_container = createElt("div", "btns-container", "");
    btns_container.appendChild(prev_btn);
    btns_container.appendChild(next_btn);
    lower_container.appendChild(btns_container);

    //Add event listner to previous and next buttons
    // Disable previous button when first element is reached 
    //and next button when last element is reached
    if(i===0){
        prev_btn.disabled = true;
    }else{
        prev_btn.disabled = false;
    }

    if(i===project_arr.length - 1){
        next_btn.disabled = true;
    }else{
        next_btn.disabled = false;
    }

    prev_btn.addEventListener('click', function(){
        if(i > 0){
            hideModal(i);
            displayModal(i-1);
        }
    });

    next_btn.addEventListener('click', function(){
        if(i < project_arr.length - 1){
            hideModal(i);
            displayModal(i + 1);
        }
    });


    proj_name_container.appendChild(proj_name_modal);
    proj_name_container.appendChild(modal_close);    
    modal_content.appendChild(proj_name_container);
    modal_content.appendChild(btn_container);
    modal_content.appendChild(img_container);
    modal_content.appendChild(lower_container);    
    project_modal.appendChild(modal_content);
    
    modal_close.onclick = function() {
        hideModal(i);
      }
    return project_modal;
}

const container = document.querySelector('.container');
function displayModal(i){
    const modal = document.getElementById('modal-'+i);
    modal.style.display = 'block';
    container.style.display = 'none';
    window. scrollTo(0, 0);
}

function hideModal(i){
    const modal = document.getElementById('modal-'+i);
    container.style.display = 'block';
    modal.style.display = 'none';       
}

//Create projects dynamically
const projects = document.getElementById("Portfolio");
const div1 = createElt('div', "project-cell-i", "");
const h2 = createElt('h2', "project-heading", "Projects");

const img_dots_i = createImage(0);
div1.appendChild(h2);
div1.appendChild(img_dots_i);

const img1 = createImage(1);
img1.classList.add("project-img");

const div2 = createGridContainer(0);

const div3 = createElt('div', "project-cell-iii", "");
const img2 = createImage(2);
img2.classList.add("project-img");
const div4 = createGridContainer(1);
div3.appendChild(img2);
div3.appendChild(div4);

const div5 = createElt('div', "project-cell-iv", "");
const div6 = createElt('div', "half-circle-background", "");
const img3 = createImage(3);
const div7 = createElt('div', "lemniscate-background", "");
const img4 = createImage(4);
div5.appendChild(div6);
div5.appendChild(img3);
div5.appendChild(div7);
div5.appendChild(img4);

const div8 = createElt('div', "project-cell-vi", "");
const img5 = createImage(5);
img5.classList.add("project-img");
const div9 = createGridContainer(2);
div8.appendChild(img5);
div8.appendChild(div9);

const div10 = createElt('div', "project-cell-vii", "");
const img6 = createImage(6);
const div11 = createElt('div', "inverted-red-square", "");
div10.appendChild(img6);
div10.appendChild(div11);

const div12 = createElt('div', "project-cell-x", "");
const img7 = createImage(7);
img7.classList.add("project-img");
const div13 = createGridContainer(3);
div12.appendChild(img7);
div12.appendChild(div13);

const img8 = createImage(8);
img8.classList.add("project-img");
const div14 = createGridContainer(4);

const img9 = createImage(9);
img9.classList.add("project-img");
const div15 = createGridContainer(5);

const img10 = createImage(10);
const div16 = createElt('div', "project-cell-ix", "");

projects.appendChild(div1);
projects.appendChild(img1);
projects.appendChild(div2);
projects.appendChild(div3);
projects.appendChild(div5);
projects.appendChild(div8);
projects.appendChild(div10);
projects.appendChild(div12);
projects.appendChild(img8);
projects.appendChild(div14);
projects.appendChild(img9);
projects.appendChild(div15);
projects.appendChild(img10);
projects.appendChild(div16);

// Form validation 
const emailEl = document.getElementById('email-input');
const form = document.querySelector('.contact-form');
const error = form.querySelector('small');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    const isLowerCase = value => {
        return value === value.toLowerCase();
    }
    let message = "";
    const email = emailEl.value.trim();
    if(!isLowerCase(email)){
        message = "Email should be in lower case.";
        error.textContent = message + "\n Suggested: " + email.toLowerCase();
        error.classList.add('error');        
        emailEl.style.border = '2px solid red';        
    }else{
        form.submit();
    }

    emailEl.addEventListener('focus', ()=>{
        emailEl.style.border = 'none';
        error.textContent = "";
    });
})


