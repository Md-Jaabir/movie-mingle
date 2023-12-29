let mobileMenu=document.querySelector("nav .mobile-menu");
let hamBurger=document.querySelector("nav .hamburger");
let closeButton=document.querySelector("nav .close");

function goTo(url){
    window.open(url,"_self");
}

function openNav(){
    mobileMenu.style.display="flex";
    document.body.style.overflowY="hidden";
    setTimeout(()=>{
        mobileMenu.classList.add("active");
    },100);
}

function closeNav(){
    document.body.style.overflowY="auto";
    mobileMenu.classList.remove("active");
    setTimeout(()=>{
        mobileMenu.style.display="none";
    },300);
}

hamBurger.onclick=openNav;
closeButton.onclick=closeNav;

function getParams(){
    let result={}
    location.search.replace("?","").split("&").forEach(pair=>{
        let key=pair.split("=")[0];
        let value=pair.split("=")[1];
        result[key]=value;
    });
    return result;
}