var menu = document.getElementById('menubutton');
var layoutright = document.getElementById('rightmenu');
var layoutpage = document.getElementById('layout');
var layoutcenter = document.getElementById('layoutcenter');
menu.addEventListener("click" , function()
{
    layoutright.style.display = "block";
    layoutcenter.style.filter = "blur(2px)";
    layoutpage.style.gridTemplateColumns = "100% auto";

});
var menuclose = document.getElementById('menuclose');
menuclose.addEventListener("click" ,function(){
    layoutright.style.display = "none";
    layoutcenter.style.filter = "blur(0px)";
    layoutpage.style.gridTemplateColumns = "100%";
});

var headuserbox = document.getElementById('headuserbox');
var headuserboxopen = document.getElementById('headuserboxopen');
headuserbox.addEventListener("click" ,function(){
   
if(headuserboxopen.style.display == "none")
{
    headuserboxopen.style.display = "block";
}
else
{
    headuserboxopen.style.display = "none";

}

});
var showtoast = document.getElementById('show-toast');
var toast = document.getElementById('toast');
showtoast.addEventListener("click",function()
{
    toast.style.display = "block";
});