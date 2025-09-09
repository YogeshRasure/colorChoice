let area_change=document.getElementById("area")
function changeBgColor(color)
{
   
    
  area_change.style.background="none"
    area_change.style.backgroundColor=color;
    area_change.style.backgroundRepeat="no-repeat";
    area_change.style.backgroundSize="cover";

}

function changeFontStyle(font)
{
  area_change.style.fontFamily=font
}

function changeTextColor(color)
{
   
    area_change.style.color=color
}
function changeBgImage(bgimage)
{
   
    area_change.style.backgroundImage=`url('${bgimage}')`;



}
