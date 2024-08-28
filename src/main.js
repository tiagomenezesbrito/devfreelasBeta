import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/services.css';
import '../styles/components/questions.css';
import '../styles/components/footer.css';
import '../styles/utilis.css';



// Nav bar Start
const toggle = document.querySelector(".header__bars");
const nav = document.querySelector(".nav__mobile");
console.log(toggle);
console.log(nav)


toggle.addEventListener("click", function(){
  

  nav.classList.toggle("show__navmobile");

});






// Section Services Start

//Service cards
const service__cards = [
  {
    id: 1,
    title: "Websites",
    text: "Otimize processos e economize tempo com nossas soluções de automação. Deixe que a tecnologia trabalhe por você!",
    img: "./img/ilustração2.png",
  },
  {
    id: 2,
    title: "Design",
    text: "Otimize processos e economize tempo com nossas soluções de automação. Deixe que a tecnologia trabalhe por você!",
    img: "./img/ilustração3.png",
  },
  {
    id: 3,
    title: "Automações",
    text: "Otimize processos e economize tempo com nossas soluções de automação. Deixe que a tecnologia trabalhe por você!",
    img: "./img/ilustração1.png",
  },
  {
    id: 4,
    title: "Aplicativos Mobile",
    text: "Otimize processos e economize tempo com nossas soluções de automação. Deixe que a tecnologia trabalhe por você!",
    img: "./img/ilustraçao4.png",
  },
  {
    id: 5,
    title: "Sistemas Desktop",
    text: "Otimize processos e economize tempo com nossas soluções de automação. Deixe que a tecnologia trabalhe por você!",
    img: "./img/ilustraçao5.png",
  },
  {
    id: 6,
    title: "Web Scraping",
    text: "Otimize processos e economize tempo com nossas soluções de automação. Deixe que a tecnologia trabalhe por você!",
    img: "./img/ilustração6.png",
  },
];



// BTNS
const nextBtn = document.querySelector(".foward__icon");
const prevBtn = document.querySelector(".back__icon");

//Cards

//card1:
const img1 = document.querySelector("#service__img1");
const title1 = document.querySelector("#service__title1");
const text1 = document.querySelector("#service__text1");

//card2:
const img2 = document.querySelector("#service__img2");
const title2 = document.querySelector("#service__title2");
const text2 = document.querySelector("#service__text2");


//card3:
const img3 = document.querySelector("#service__img3");
const title3 = document.querySelector("#service__title3");
const text3 = document.querySelector("#service__text3");



// Logic start

let counter = 0;


//Function to change the items of the cards
function changeItems(counter){
    if(counter == 0) {

        //card1
        img1.src =  service__cards[0].img;
        title1.textContent =  service__cards[0].title;
        text1.textContent =  service__cards[0].text;
        img1.classList.remove("service__img4");

        //card2
        img2.src =  service__cards[1].img;
        title2.textContent =  service__cards[1].title;
        text2.textContent =  service__cards[1].text;

        img2.classList.remove("service__img5");  

        //card3
        img3.src =  service__cards[2].img;
        title3.textContent =  service__cards[2].title;
        text3.textContent =  service__cards[2].text;


    }
    if (counter == 1){
      //card1
      img1.src = service__cards[3].img;
      title1.textContent = service__cards[3].title;
      text1.textContent = service__cards[3].text;

      img1.classList.add("service__img4");

      //card2
      img2.src = service__cards[4].img;
      title2.textContent = service__cards[4].title;
      text2.textContent = service__cards[4].text;
      img2.classList.add("service__img5");  
      //.service__img5
      //card3
      img3.src = service__cards[5].img;
      title3.textContent = service__cards[5].title;
      text3.textContent = service__cards[5].text;
    }
}    

/* changeItems(counter); */

//BTNS LOGIC

nextBtn.addEventListener("click", function(){
    

    if(counter == 0) {
        counter++;
    }

    else if(counter == 1){
        counter = 0;
    }

    changeItems(counter);

})

prevBtn.addEventListener("click", function(){
    

    if(counter == 0) {
        counter++;
    }

    else if(counter == 1){
        counter = 0;
    }

    changeItems(counter);

})



// Section services end








// Questions section Start

//Icons

const questionBtn = [...document.querySelectorAll(".question__btn")];
const questions = [...document.querySelectorAll(".question")];


questionBtn.forEach(function(btn){

  
  // Aciciona Evento no botão, que encontra a questão atual e toggle show__Question
  btn.addEventListener("click", function(){
    console.log(btn.parentElement.parentElement.lastElementChild);
    const question = btn.parentElement.parentElement;
    question.classList.toggle("show__question");

    //Remove show__question de todas as questões menos a questão atual
    questions.forEach(function(item){
      if(item != question) {
        item.classList.remove("show__question");
      }
    });

  })

})





// Questions section End