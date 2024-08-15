
document.querySelectorAll(".expandable").forEach((elem)=>
{
  elem.addEventListener("click", function(ev)
  {
    document.querySelector(".overlay").style.display = "initial";
    document.querySelector(".overlay").querySelector("img").src = ev.target.src;
  });
});

function hideOverlay()
{
    document.querySelector(".overlay").style.display = "none";
}
