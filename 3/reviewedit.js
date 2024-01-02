"use strict";
const reviewFromLocalstorage = JSON.parse(localStorage.getItem("userReviews"));
const reviewBox = document.querySelector(".review-box");

for (let good in reviewFromLocalstorage) {
  if (reviewFromLocalstorage[good].length > 0) {
    let h2 = document.createElement("details");
    h2.className = good;
    h2.innerHTML = `<summary> ${good} </summary>`;
    reviewBox.append(h2);

    for (let singleReview in reviewFromLocalstorage[good]) {
      h2.insertAdjacentHTML(
        "beforeend",
        `<div class="review-style"><p>${reviewFromLocalstorage[good][singleReview]}</p> <button class="reviewDelete">удалить отзыв</button> </div>`
      );
      console.log(reviewFromLocalstorage[good]);
      console.log(reviewFromLocalstorage[good][singleReview]);
      console.log(
        reviewFromLocalstorage[good].indexOf(
          reviewFromLocalstorage[good][singleReview]
        )
      );
    }
  }
}

// for (let good in reviewFromLocalstorage) {
//     if (reviewFromLocalstorage[good].length > 0) {
//       let h2 = document.createElement("details");
//       h2.className = good;
//       h2.innerHTML = `<summary> ${good} </summary>`
//       reviewBox.append(h2);
//       for (let singleReview in reviewFromLocalstorage[good]){
//           console.log(reviewBox);
//       }
//     }
//   }

// for (let singleReview in reviewFromLocalstorage[good]) {
//   console.log(reviewFromLocalstorage[good][singleReview]);
// }
