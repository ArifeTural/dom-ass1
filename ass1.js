const header= document.querySelector(".header")
header.style.backgroundColor="#4a0b10c3"
header.style.height ="100px"
header.style.display="flex"
header.style.flexDirection="column"
header.style.gap = "1rem"
header.style.alignItems = "center"


const navBaslik =document.getElementById("title")
console.log(navBaslik);

navBaslik.textContent ="Javascript Dom Assignment 1"
navBaslik.style.display = "flex"
navBaslik.style.justifyContent = 'center'
navBaslik.style.color = "bisque"
navBaslik.style.fontWeight= "bolder"
navBaslik.style.marginTop="20px"


const naviTem =document.querySelector(".nav-item")
naviTem.style.display = "flex"
naviTem.style.justifyContent = 'center';
naviTem.style.gap = "4rem"
naviTem.style.color ="bisque"
naviTem.style.fontWeight= "bolder"
naviTem.style.listStyleType ="none"



const user = document.querySelector("#username")
console.log(user);
user.setAttribute("placeholder","Arife")

const pas = document.querySelector("#password")
console.log(pas);
pas.setAttribute("placeholder","Q7135")


const btn= document.querySelector(".btn")
console.log(btn);
btn.style.padding= "10px 20px"
btn.style.backgroundColor="#4a0b10c3"
btn.style.color="bisque"
btn.style.borderColor="#78060f"
btn.style.cursor="pointer"
btn.style.fontWeight= "bolder"
btn.style.borderRadius="10px" 
btn.textContent="Giriş Yap"

const projects = document.getElementById("projects")
console.log(projects);

projects.textContent="Js Dom Projects"
projects.style.color="#78060f"
projects.style.fontSize= "2rem"
projects.innerHTML += `<ul class="liste" >
 <li>Hello World!</li>
<li>Guess Number</li>
<li>Checkout Page</li>
<li>Gelir-Gider Projesi</li>
<li>Api Projects</li>

</ul>

` 

const list = document.querySelector(".liste")
console.log(list);

list.style.display= "flex"
list.style.flexDirection="column"
list.style.gap="0.5rem"
list.style.color="grey"
list.style.fontSize= "1rem"
list.style.marginTop= "15px"







