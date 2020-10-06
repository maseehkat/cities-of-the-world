var cardToggle = document.getElementsByClassName("card-toggle");
var i;

for (i = 0; i < cardToggle.length; i++) {
    cardToggle[i].addEventListener("click", function() {

        var collapsibleContent = this.nextElementSibling;

        if (collapsibleContent.style.maxHeight) {
            collapsibleContent.style.maxHeight = null;
            this.classList.add("card-collapsed");
            this.classList.remove("card-active");
        } else {
            collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";
            this.classList.remove("card-collapsed");
            this.classList.add("card-active");
        }
    });
}

// FIRST ATTEMPT
// function toggle_col() {
//     // var collapsibleContent = document.getElementById("card-heading").nextElementSibling;
//     // // var collapsibleContent = document.getElementById("card-content");
//     // var heading = document.getElementById("card-heading");

//     if (collapsibleContent.style.maxHeight) {
//         collapsibleContent.style.maxHeight = null;

//         heading.classList.toggle("card-collapsed");
//     } else {
//         collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";

//         heading.classList.toggle("card-collapsed");
//     }
// }