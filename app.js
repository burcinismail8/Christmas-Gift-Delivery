function solution() {
  let mainDiv = document.querySelector(".container");
  let input = document.querySelector("input");
  let allUlElements = document.querySelectorAll(".card ul");
  let listOfGiftsUlElement = allUlElements[0];
  let listOfSendUlElement = allUlElements[1];
  let listOfDiscardUlElement = allUlElements[2];
  let allGifts = [];

  mainDiv.addEventListener("click", function (e) {
    if (e.target.textContent === "Add gift") {
      addGift();
      input.value = "";
    } else if (e.target.textContent === "Send") {
      sendGift(e);
    } else if (e.target.textContent === "Discard") {
      discardGift(e);
    }
  });

  function discardGift(e) {
    let currLiElement = e.target.parentElement;
    let sendButton = currLiElement.querySelector(".sendButton");
    let discardButton = currLiElement.querySelector(".discardButton");
    sendButton.remove();
    discardButton.remove();
    currLiElement.remove();
    let indexOfCurrGift = allGifts.findIndex(
      (element) => currLiElement.textContent === element
    );
    allGifts.splice(indexOfCurrGift, 1);

    listOfDiscardUlElement.appendChild(currLiElement);
    //CHECK FOR SORTING THE GIFTS
  }
  function sendGift(e) {
    let currLiElement = e.target.parentElement;
    let sendButton = currLiElement.querySelector(".sendButton");
    let discardButton = currLiElement.querySelector(".discardButton");
    sendButton.remove();
    discardButton.remove();
    currLiElement.remove();
    let indexOfCurrGift = allGifts.findIndex(
      (element) => currLiElement.textContent === element
    );
    allGifts.splice(indexOfCurrGift, 1);

    listOfSendUlElement.appendChild(currLiElement);
    //CHECK FOR SORTING THE GIFTS
  }
  function addGift() {
    let giftName = input.value;
    allGifts.push(giftName);
    allGifts.sort((a, b) => a.localeCompare(b));
    listOfGiftsUlElement.innerHTML = "";
    allGifts.forEach((gift) => {
      let liElementOfGift = createsElements("li", gift, ["class=gift"]);
      let sendButton = createsElements("button", "Send", ["class=sendButton"]);
      let discardButton = createsElements("button", "Discard", [
        "class=discardButton",
      ]);

      liElementOfGift.appendChild(sendButton);
      liElementOfGift.appendChild(discardButton);
      listOfGiftsUlElement.appendChild(liElementOfGift);
    });
  }
  function createsElements(type, text, attributes = []) {
    let element = document.createElement(type);
    element.innerHTML = text;

    attributes.forEach((arr) => {
      let newArr = arr.split("=");
      element.setAttribute(newArr[0], newArr[1]);
    });
    return element;
  }
}
