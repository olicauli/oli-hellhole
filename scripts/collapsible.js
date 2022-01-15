document.addEventListener("DOMContentLoaded", function()
{
    //console.log("dom content loaded");
    let contentDisplayed = false;
    let containers = document.querySelectorAll(".collapsible");
    //console.log("button variable defined");
    
    containers.forEach( (container) => {
        container.addEventListener('click', () => {
            container.classList.toggle("active");
            let content = container.nextElementSibling;
            if (content.style.display === "block")
            {
                console.log("in if");
                content.style.display = "none";
            }
            else 
            {
                console.log("in else");
                content.style.display = "block";
            }
        })
    })
})