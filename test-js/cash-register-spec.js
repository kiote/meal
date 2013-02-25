// Generated by CoffeeScript 1.4.0
(function() {

  describe("Dish", function() {
    beforeEach(function() {
      return this.dish = new Dish("Steak $18.99 mains");
    });
    it("extracts title", function() {
      return expect(this.dish.title).toEqual("Steak");
    });
    return it("extracts price", function() {
      return expect(this.dish.price.cents).toEqual(1899);
    });
  });

  describe("Money", function() {
    describe("valid value", function() {
      beforeEach(function() {
        return this.money = new Money("$15.99");
      });
      it("parces to cents", function() {
        return expect(this.money.cents).toEqual(1599);
      });
      return it("formats to sting", function() {
        return expect(this.money.toString()).toEqual("$15.99");
      });
    });
    return describe("invalid value", function() {
      beforeEach(function() {
        return this.money = new Money("NOT A CASH");
      });
      return it("parces to 0", function() {
        return expect(this.money.cents).toEqual(0);
      });
    });
  });

  describe("Meal", function() {
    beforeEach(function() {
      this.donut = new Dish("Donut $10.56");
      return this.fish = new Dish("Fish $15.99 small pack");
    });
    return describe("blank object", function() {
      beforeEach(function() {
        return this.meal = new Meal;
      });
      it("adds a single dish", function() {
        this.meal.add(this.donut);
        return expect(this.meal.dishes.length).toEqual(1);
      });
      it("adds several dished", function() {
        this.meal.add(this.donut, this.fish);
        return expect(this.meal.dishes.length).toEqual(2);
      });
      return it("calculates the total price", function() {
        this.meal.add(this.donut, this.fish);
        return expect(this.meal.totalPrice().cents).toEqual(2655);
      });
    });
  });

}).call(this);
