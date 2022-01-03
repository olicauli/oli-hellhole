document.addEventListener("DOMContentLoaded", function()
{
    //console.log("dom content loaded");
    let contentDisplayed = false;
    let button = document.querySelector(".collapsible");
    //console.log("button variable defined");
    
    let toggleContent = function()
    {
        //console.log("inside displayFrog");
        if (contentDisplayed)
        {
            //console.log("inside if");
            document.querySelector(".collapse_content").style.display = "none";
            contentDisplayed = false;
        }
        else 
        {
            //console.log("inside else");
            document.querySelector(".collapse_content").style.display = "block";
            contentDisplayed = true;
        }
    };
    
    //console.log("before eventlistener");
    button.addEventListener('click', toggleContent);
});

