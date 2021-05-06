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

  DipalyResult(data, price) {
    let result = document.querySelector("#result");

    if (price === "USD") {
      price = "$";
    } else {
      price = "€";
    }

    const div = document.createElement("div");

    div.classList = "text-center mt-2 result-container";

    div.innerHTML = `
        <img src=${data.logo_url} class="img">
        <p class="mt-2">price : <span>${data.price} ${price}</span></p>
        <canvas id="myChart"></canvas>
        `;

    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let barChart = new Chart(ctx, {
      type: "bar",

      data: {
        labels: ["last year", "last month", "last week", "yesterday"],
        datasets: [
          {
            label: `Changes ${data.name}`,
            data: [
              data["365d"].price_change,
              data["30d"].price_change,
              data["7d"].price_change,
              data["1d"].price_change,
            ],
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)",
              "rgba(75,192,192,0.6)",
              "rgba(255,159,64,0.6)",
              "rgba(255,102,255,0.6)",
            ],
            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 3,
            hoverBorderColor: "#333",
          },
        ],
        Option: {
          title: {
            display: true,
            text: "Crypto Currency Market Changes",
            fontSize: 18,
          },
        },
      },
    });

    let res = document.createElement("div").appendChild(div);
    res.appendChild(canvas);

    setTimeout(() => {
      result.insertBefore(res, result.firstChild);
    }, 5000);
  }
}
