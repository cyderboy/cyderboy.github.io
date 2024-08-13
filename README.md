# cyderboy.github.io
### The Skills Network - Level 3 Software Development Projects

const PizzaCostCalculator = {
  totalCost: 0.00,

  // Base options
  thickCrust: 8.00,
  thinCrust: 10.00,

  // Size Options
  small: 0.00,
  large: 2.00,

  // Cheese Options
  yesCheese: 0.00,
  noCheese: -0.50,

  // Topping Options
  margarita: 0.00,
  veg: 1.00,
  meat: 2.00,

  // Voucher Codes
  voucher: -2.00,

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  async intro() {
    console.log("Welcome to Dough Boy's pizza emporium!");
    await this.sleep(1000);
    console.log("Home of the best pizza in the south west!");
    await this.sleep(1000);
    console.log("If I can take your order, we will prepare your pizza for you");
    await this.sleep(1000);
  },

  async selectCrust() {
    while (true) {
      console.log("Would you like thin crust or thick crust?");
      const crust = prompt().toLowerCase();

      if (crust === "thin" || crust === "thin crust") {
        this.totalCost += this.thinCrust;
        return crust;
      } else if (crust === "thick" || crust === "thick crust") {
        this.totalCost += this.thickCrust;
        return crust;
      } else {
        console.log("I'm sorry, I didn't recognise your choice");
        await this.sleep(1000);
      }
    }
  },

  async selectSize() {
    while (true) {
      console.log("What size pizza would you like?");
      console.log("The options are: 8 Inch, 10 Inch, 12 Inch, 14 Inch, or 18 Inch");
      const size = parseInt(prompt());

      if (size > 10 && size < 19) {
        this.totalCost += this.large;
        return size;
      } else if (size < 11 && size > 7) {
        this.totalCost += this.small;
        return size;
      } else {
        console.log("I'm afraid we don't make pizza's that size!");
        await this.sleep(1000);
      }
    }
  },

  selectCheese() {
    console.log("Would you like cheese on your pizza? Y/N");
    const cheese = prompt().toLowerCase();
    if (cheese !== "y") {
      this.totalCost += this.noCheese;
    }
    return cheese;
  },

  async selectTopping() {
    while (true) {
      console.log("What type of pizza would you like?");
      console.log("You can choose from: Margarita, Vegetable, Vegan, Hawaiian, or Meat Feast");
      const topping = prompt().toLowerCase();

      if (topping === "margarita") {
        this.totalCost += this.margarita;
        return topping;
      }
      if (topping === "vegetable" || topping === "vegan") {
        this.totalCost += this.veg;
        return topping;
      }
      if (topping === "hawaiian" || topping === "meat feast") {
        this.totalCost += this.meat;
        return topping;
      } else {
        console.log("I'm afraid we don't have those toppings!");
        await this.sleep(1000);
      }
    }
  },

  async applyVoucher(size) {
    console.log("If you have a voucher code, please enter it now. Press enter to skip.");
    const voucherCode = prompt();

    if (voucherCode === "FunFriday" && size === 18) {
      console.log("Voucher code has been successfully applied!");
      this.totalCost += this.voucher;
      await this.sleep(1000);
    } else if (voucherCode === "FunFriday") {
      console.log("I'm afraid this voucher isn't valid for your selected pizza");
      await this.sleep(1000);
    } else {
      console.log("Either an invalid code was entered, or you have not entered a voucher code");
      await this.sleep(1000);
    }
  },

  printSummary(size, crust, topping, cheese) {
    console.log(`OK, you have ordered one ${size} inch, ${crust} ${topping} pizza`);

    if (cheese === "n" || cheese === "no") {
      console.log("With no cheese");
    } else {
      console.log("With cheese");
    }

    console.log(`Your pizza will cost £${this.totalCost.toFixed(2)}`);
  },

  async orderPizza() {
    await this.intro();
    const crust = await this.selectCrust();
    const size = await this.selectSize();
    const cheese = this.selectCheese();
    const topping = await this.selectTopping();
    await this.applyVoucher(size);
    this.printSummary(size, crust, topping, cheese);
  }
};

// To use the pizza cost calculator:
// PizzaCostCalculator.orderPizza();
