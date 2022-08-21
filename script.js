const nav = document.getElementById("nav-list");

nav.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    event.target.style.color = "white";
    }, false);


  nav.addEventListener("mouseout", (event) => {
    // highlight the mouseover target
    event.target.style.color = "#C39787";
  }, false);

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
