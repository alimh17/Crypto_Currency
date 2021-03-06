class Currency {
  constructor() {
    this.API = "1e072ae74646430eeb271b29654aece5";
  }

  async DisplayResult(Currency, price) {
    let URL = "https://api.nomics.com/v1/currencies/ticker?key=";

    URL += `${this.API}&`;

    URL += `ids=${Currency}&`;

    URL += `convert=${price}`;

    let request = await fetch(URL);
    let result = await request.json();

    return result;
  }
}
