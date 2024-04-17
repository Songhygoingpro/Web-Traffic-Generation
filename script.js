const root = document.getElementById("root");
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
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
