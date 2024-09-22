// Start Header
/* Header Scrolled */
document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 250) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
/*--------------------------------------------------------------*/
/*Header Links */
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener(
    'click', function () {
      navLinks.forEach(item => item.classList.remove('activate'));
      this.classList.add('activate');
    }
); 
});
// End   Header
// Start portfolio
// document.addEventListener('DOMContentLoaded', () => {
//   const filterLinks = document.querySelectorAll('.shuffle');
//   filterLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();
//       filterLinks.forEach(link => {
//         link.classList.remove('active');
//       });
//       link.classList.add('active');
//     });
//   });
// });

const filterLink = document.querySelectorAll ('.filter-link');
filterLink.forEach(linkE => {
  linkE.addEventListener("click", function () {
    filterLink.forEach(e => e.classList.remove('active'));
    this.classList.add('active');
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const filterLinks = document.querySelectorAll('.filter-link');
  const cards = document.querySelectorAll('.card');

  filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';  // إظهار البطاقات المتوافقة
        } else {
          card.style.display = 'none';   // إخفاء البطاقات غير المتوافقة
        }
      });
    });
  });
});



// document.addEventListener('DOMContentLoaded', () => {
//     const filterLinks = document.querySelectorAll('.filter-link');
//     const cards = document.querySelectorAll('.card');
//     filterLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const filter = link.getAttribute('data-filter');
//             cards.forEach(card => {
//                 if (filter === 'all' || card.classList.contains(filter)) {
//                     card.style.display = 'block';
//                 } else {
//                     card.style.display = 'none';
//                 }
//             });
//         });
//     });
// });

// function toggleBoxes() {
//     const boxes = document.querySelectorAll('.box');
//     boxes.forEach(box => {
//         if (box.classList.contains('hidden')) {
//             box.classList.remove('hidden');
//         } else {
//             box.classList.add('hidden');
//         }
//     });
// }

// Start About

// let counterProject = document.querySelector('.counterNumberProject > span');
// let targetProject = 120 ;
// let speed = 50;
// function updateCounterProject() {
//   const counterElement = document.querySelector('.counterNumberProject > span');
//   const increment = targetProject;
//   const counterInterval = setInterval(() => {
//     if (counterProject < targetProject) {
//       counterProject += increment;
//       counterElement.textContent = Math.ceil(counterProject);
//     } else {
//       clearInterval(counterInterval);
//     };
//   }, speed);
// };
// document.write(getElementsByClassName(".counterNumberProject").innerText(updateCounterProject()));



// let a = document.querySelector('.counterNumberProject > span');
// let e = a.innerHTML`120`;
// console.log(e);



function changeText() {
    document.getElementById("myParagraph").textContent = "120" ;
}
changeText();

function clientNum() {
    document.getElementById("clientNum").textContent = "50" ;
}
clientNum();

function workHour() {
    document.getElementById("workHours").textContent = "2,560" ;
}
workHour();

function countAward() {
    document.getElementById("count-award").textContent = "150" ;
}
countAward();


























