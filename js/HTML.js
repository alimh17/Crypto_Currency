class HTML {
  DisplayError(message, className) {
    const div = document.createElement("div");
    div.textContent = message;
    div.className = className;

    document.querySelector("#show-message").appendChild(div);

    this.RemoveMessage();
  }

  RemoveMessage(div) {
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  DipalyResult(data, day, price) {
   


    if (price === "USD") {
      price = "$";
    } else {
      price = "€";
    }

    console.log(data);

    const div = document.createElement("div");
    div.classList = "text-center mt-2 result-container";




    div.innerHTML = `
    <img src=${data.logo_url} class="img">
    <p class="mt-2">price : <span>${data.price} ${price}</span></p>
    `;


    document.querySelector("#result").appendChild(div);
  }
}
