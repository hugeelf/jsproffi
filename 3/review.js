"use strict";
const good = document.getElementById("goods-select");
const review = document.querySelector("#review-text-id");
const sendReview = document.querySelector(".submit-button");
const errorMessage = document.querySelector(".message-for-user");
const reviewsList = localStorage;

const allReviews = {
  phone: [],
  pc: [],
  mouse: [],
};

// const allReviews = JSON.parse(reviewsList.getItem("userReviews"))

const errorText = `
<h2 style="color: red">
Ошибка!!! Проверьте правильность заполнения формы!!!
</h2>
`;

const successText = `
<h2 style="color: green">
Отзыв успешно добавлен!!
</h2>
`;

sendReview.addEventListener("click", submitReview);
function submitReview() {
  if (good.value == "temp" || review.value == "") {
    errorMessage.innerHTML = errorText;
  } else {
    allReviews[good.value].push(review.value);
    reviewsList.setItem('userReviews', JSON.stringify(allReviews))
    errorMessage.innerHTML = successText;
  }
}
