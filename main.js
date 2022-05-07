"use strict"

const ratingItems = document.querySelectorAll(".rating__item")

let rating = 0

const selectRating = function () {
  init()
  rating = +this.textContent

  this.classList.add("active")
}

const init = function () {
  ratingItems.forEach((item) => {
    item.classList.remove("active")
    item.addEventListener("click", selectRating)
  })
  rating = 0
}

init()

document.querySelector(".btn-submit").addEventListener("click", function () {
  if (!rating) return
  document.querySelector(".container").remove()
  const markup = `
    <div class="thanks__container">
      <img
        src="./images/illustration-thank-you.svg"
        alt="well received"
        class="thanks__img"
      />
      <p class="thanks__msg">You selected ${rating} out of ${ratingItems.length}</p>

      <h3 class="heading">Thank you!</h3>
      <p class="content">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  `
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup)
})
