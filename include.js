

const header = document.getElementById('header');
header.innerHTML = `
  <img src="image/_of_Mao-Oak_Resources_Limited-removebg-preview (1).png" alt="">
  <ul class="header_content" id="content">
    <li><a href="#">Home</a></li>
    <li><a href="about.html">About </a></li>
    

    <li>Solutions <i class="fa fa-chevron-down"></i>
      <ul class="dropdown">
        <li>
       <a href="procure.html"> General Procurement</a></li>
        <li><a href="apcic.html">EPCIC</a></li>
        <li>fire Detection Protection</li>
        <li>Safety</li>
      </ul>
    </li>
    <li><a href="contact.html">Contact</a></li>
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
