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




    const div = document.createElement("div");

    div.classList = "text-center mt-2 result-container";

    div.innerHTML = `
        <img src=${data.logo_url} class="img">
        <p class="mt-2">price : <span>${data.price} ${price}</span></p>
        `;




    const myChart = document.createElement("canvas").getContext("2d");
    myChart.id = "chart"
    let barChart = new Chart(myChart, {
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


    setInterval(() => {
      document.querySelector("#result").appendChild(div);
      // document.querySelector("#chart").appendChild(barChart);
      // document.querySelector("#result").appendChild(myChart);
      // this.ChangeResult(lineChart);
    }, 5000);
  }

  // ChangeResult(lineChart) {
  //   document.querySelector("#Currency").onchange = () => {
  //     let res = document.querySelector("#result");

  //     while (res.children[0]) {
  //       res.children[0].remove();
  //       // lineChart.remove()
  //       break;
  //     }
  //   };
  //   document.querySelector("#price").onchange = () => {
  //     console.log("by");
  //   };

    // console.log(Currency)
    // console.log(price)
  // }
}
