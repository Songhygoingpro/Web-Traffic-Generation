const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

const root_logo = document.getElementById("root");
const marqueeElementsDisplayed_logo = getComputedStyle(root_logo).getPropertyValue("--marquee-elements-displayed-logo");
const marqueeContent_logo = document.querySelector("ul.marquee-content-logo");

root_logo.style.setProperty("--marquee-elements-logo", marqueeContent_logo.children.length);

for(let i=0; i<marqueeElementsDisplayed_logo; i++) {
  marqueeContent_logo.appendChild(marqueeContent_logo.children[i].cloneNode(true));
}

document.addEventListener("scroll", function() {
  var pageTop = window.pageYOffset;
  var pageBottom = pageTop + window.innerHeight;
  var tags = document.querySelectorAll(".reveal");

  tags.forEach(function(tag) {
    if (tag.offsetTop < pageBottom) {
      tag.classList.add("active");
    } 
  });
});
