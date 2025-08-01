const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "d:\vs\Github projects\My portfolio Me\Muzammil hussain CV (2).pdf"; // Replace with your actual file name
  link.download = "d:\vs\Github projects\My portfolio Me\Muzammil hussain CV (2).pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
