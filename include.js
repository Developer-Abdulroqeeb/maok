

const header = document.getElementById('header');
header.innerHTML = `
  <img src="image/_of_Mao-Oak_Resources_Limited-removebg-preview (1).png" alt="">
  <ul class="header_content" id="content">
    <li><a href="">Home</a></li>
    <li><a href="about.html">About Us</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="#">Blog</a></li>
    <li>Services <i class="fa fa-chevron-down"></i>
      <ul class="dropdown">
        <li>Procurement Service</li>
        <li>Manpower Service</li>
        <li>Offshore Support Service</li>
        <li>Equipment Leasing service</li>
      </ul>
    </li>
    <li><a href="#">Careers</a></li>
  </ul>
  <i class="fa fa-bars" id="bars"></i>
`;

const bars = document.getElementById('bars');
const content = document.getElementById("content");
const serviceMenu = document.querySelector('.dropdown-container');
const dropdown = document.querySelector('.dropdown');
bars.addEventListener("click", function() {
  content.classList.toggle('show');
});
serviceMenu.addEventListener("click", function() {
    dropdown.classList.toggle('show-dropdown');
  });
