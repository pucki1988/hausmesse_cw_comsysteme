
window.onload=function(){checkCookie()};
window.onscroll = function() {setScroll()};
function setScroll()
{

    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) 
    {
        if(window.innerWidth<991)
        {
            setPaddingTop("section","90px")
        }
        else{
            setPaddingTop("section","110px")
        }
        document.getElementsByTagName("body")[0].classList.add("small-menu");
        document.getElementsByTagName("header")[0].classList.add("position-fixed");
       
    }
    else
    {
        if(window.innerWidth<991)
        {
            setPaddingTop("section","0px")
        }
        else{
            setPaddingTop("section","10px")
        }
        document.getElementsByTagName("body")[0].classList.remove("small-menu");
        document.getElementsByTagName("header")[0].classList.remove("position-fixed");

       
    }
}


function setPaddingTop(selektor,pTop){
    var selektoren=document.querySelectorAll(selektor);

    for(i=0;i<selektoren.length;i++)
    {
        document.getElementById(selektoren[i].id).style.paddingTop=pTop;
    }

}

function clearCollapse()
{
    var myCol=document.getElementById("navbarNav")
    myCol.classList.remove("show");
    document.getElementById("mobile-toggler-check").checked=false;
}

document.getElementById("vipForm").addEventListener("submit",function(e){
    
    e.preventDefault()
    if(document.getElementById("vipCode").value.toUpperCase()=="VIP21"){
        setCookie();
        document.getElementById("overlay").classList.add("d-none");
    }
    else{
        document.getElementById("vipCode").classList.add("vip-false");
    }
})


function setCookie() {
    const d = new Date();
    d.setTime(d.getTime() + (3*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "vipcode=true;" + expires + ";path=/";
  }

  function checkCookie() {
    let vipcode = getCookie("vipcode");
    if (vipcode != "") {
        document.getElementById("overlay").classList.add("d-none");
    } 
  }

  function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}