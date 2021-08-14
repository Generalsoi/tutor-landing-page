let hamburger = document.getElementById("hamburger")
let navContents = document.querySelectorAll(".nav-content")

hamburger.addEventListener('click', function () {
    navContents.forEach(function(content) {
        if (content.style.display == "block"){
            content.style.display = "none"
        } else {
            content.style.display = "block"
        }
    })
})