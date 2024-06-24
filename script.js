const sidebar = document.getElementById('side-bar');
const togglebtn = document.getElementById('togglebtn');
const sidebarlist = document.getElementById('sidebar-list');
const I = document.getElementById('I');
var toggleimg = true;

const toggleSidebar = () => {
    sidebar.classList.toggle('sidebar-open');
    I.classList.toggle('I-open');
    if (toggleimg) {
        togglebtn.src = srcleft;
        sidebarlist.classList.remove('sidebar-list-closed')
    }
    else{
        togglebtn.src = srcright;
        sidebarlist.classList.add('sidebar-list-closed')
    }
    toggleimg = !toggleimg;
}
console.log(toggleimg)


srcleft = "./assets/sidebar-arrow-left.png";
srcright = "./assets/sidebar-arrow-right.png"
togglebtn.addEventListener('click',toggleSidebar)