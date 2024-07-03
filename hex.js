// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
//      "A", "B", "C", "D", "E", "F"];
//      const btn=document.getElementById("btn");
//      const color=document.querySelector(".color");

//      btn.addEventListener('click',function(){
//         let hexColor="#";
//         for(let i=0;1<6;i++){
//             hexColor =+ hex[getRandomNumber()];
//         } 
//         color.textContent=hexColor;
//         document.body.style.background=hexColor;

//      });
//       function getRandomNumber(){
//         Math.floor(Math.random()*hex.length);
//       }

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
