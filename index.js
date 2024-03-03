var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activ");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var paginationContainer = document.querySelector('.pagination');
  var pages = document.querySelectorAll('.page');
  var dotsCount = pages.length;

  function showPage(pageIndex) {
      pages.forEach(function(page, index) {
          page.style.display = index === pageIndex ? 'block' : 'none';
      });
      updateActiveDot(pageIndex);
  }

  function updateActiveDot(index) {
      document.querySelectorAll('.dot').forEach(function(dot, dotIndex) {
          if(dotIndex === index) {
              dot.classList.add('active');
          } else {
              dot.classList.remove('active');
          }
      });
  }

  for (let i = 0; i < dotsCount; i++) {
      let dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', function() {
          showPage(i);
      });
      paginationContainer.appendChild(dot);
  }

  showPage(0);
});
