//classes

const html = new HTML();
const currency = new Currency();


//variabels

const sppiner = document.querySelector("#sppiner");


//eventListeners

Listener();

function Listener() {
  document.querySelector("#submit").addEventListener("click", ShowResult);
}

//functions

function ShowResult() {
  const Currency = document.querySelector("#Currency").value;
  const day = document.querySelector("#days").value;
  const price = document.querySelector("#price").value;

  // || day === ""

  if (Currency === "" || price === "") {
    html.DisplayError(
      "Please enter all field",
      "alert , alert-warning text-center"
    );
  } else {
    currency
      .DisplayResult(Currency, day, price)
      .then((data) => html.DipalyResult(data[0], day, price));
    sppiner.style.display = "block";

    setInterval(() => {
      sppiner.style.display = "none";

    }, 5000);

    // 
  }
}
