document.addEventListener("DOMContentLoaded", function()
{
    document.querySelector("#frogbutton")
    {
        document.addEventListener("click", function()
        {
            let frogs = document.querySelector("#frogs");
            let frogsDisplay = window.getComputedStyle("#frogs");
            if (frogsDisplay.style.display == "none")
            {
                document.querySelector("#frogs").style.display="inline";
            }
            else 
            {
                document.querySelector("#frogs").style.display="none";
            }
        })
    }
})

