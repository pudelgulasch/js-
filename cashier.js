let money = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

class Change {
  constructor(price, moneyTaken, money) {
    this.price = price;
    this.moneyTaken = moneyTaken;
    this.money = money;
  }
  coins() {
    console.log(typeof result);
    let rest = 0;
    rest = this.moneyTaken - this.price;
    let moneyRest = this.money
      .filter(amo => rest > amo)
      .reduce((acc, val) => {
        if (val in acc) {
          if (rest > acc + val) {
            acc[val]++;
          }
        } else {
          acc[val] = 0;
        }
        return acc;
      }, {});
    console.log("1: ", moneyRest);
    console.log("2: ", rest);
  }
}
let newBuy = new Change(5, 20, money);
newBuy.coins();
