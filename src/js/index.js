// tab start
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('ul li a');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      tabs.forEach(t => {
        t.classList.remove('active-tab');
        t.classList.add('inactive-tab');
      });
      tabContents.forEach(content => content.classList.add('hidden'));

      this.classList.add('active-tab');
      this.classList.remove('inactive-tab');
      tabContents[index].classList.remove('hidden');
    });

    if (tabs.length > 0) {
      tabs[0].click();
    }
  });
});

// accodion start 
function toggleAccordion(element) {
    const content = element.nextElementSibling;

    if (content.classList.contains('open')) {
        content.classList.remove('open');
    } else {
        document.querySelectorAll('.accordion-content.open').forEach((item) => {
            item.classList.remove('open');
        });
        content.classList.add('open');
    }
}

 // Get the current year and insert it into the span with the id 'year'
    document.getElementById("year").textContent = new Date().getFullYear();

    