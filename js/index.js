let hamburger = document.getElementById("hamburger")
let navContents = document.querySelectorAll(".nav-content")

hamburger.addEventListener('click', function () {
    navContents.forEach(function(content) {
        if (content.style.display == "none"){
            content.style.display = "block"
        } else {
            content.style.display = "none"
        }
    })
})