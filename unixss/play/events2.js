function closeMe() {
    // Find the element
    x=document.getElementById("demo");

    // Option 1: Chnage the style attribute directly
    x.style.display="none";

    // Option 2: Change the class
    // x.className="closed";
}

function openMe() {
    // Find the element
    x=document.getElementById("demo");

    // Option 1: Chnage the style attribute directly
    x.style.display="block";

    // Option 2: Change the class
    // x.className="open";

}

// Template: ~/.vim/templates/html.skel
// vim: ft=javascript ai et ts=2

