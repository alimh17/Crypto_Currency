class Currency {
  constructor() {
    this.API = "1e072ae74646430eeb271b29654aece5";
  }

 async DisplayResult(Currency, days, price) {
    let URL = "https://api.nomics.com/v1/currencies/ticker?key=";

    URL += `${this.API}&`;

    URL += `ids=${Currency}&`;

    // URL += `interval=${days}&`;

    URL += `convert=${price}`;


    // console.log(URL)



    let request = await fetch(URL)
    let result = await request.json()    

    return result

  }
}
