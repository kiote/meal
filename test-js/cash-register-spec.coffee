describe "Dish", ->

  beforeEach ->
    @dish = new Dish "Steak $18.99 mains"

  it "extracts title", ->
    expect(@dish.title).toEqual "Steak"

  it "extracts price", ->
    expect(@dish.price.cents).toEqual 1899

describe "Money", ->

  describe "valid value", ->

    beforeEach ->
      @money = new Money "$15.99"

    it "parces to cents", ->
      expect(@money.cents).toEqual 1599

    it "formats to sting", ->
      expect(@money.toString()).toEqual "$15.99"

  describe "invalid value", ->

    beforeEach ->
      @money = new Money "NOT A CASH"

    it "parces to 0", ->
      expect(@money.cents).toEqual 0

describe "Meal", ->

  beforeEach ->
    @donut = new Dish "Donut $10.56"
    @fish =  new Dish "Fish $15.99 small pack"

  describe "blank object", ->

    beforeEach ->
      @meal = new Meal

    it "adds a single dish", ->
      @meal.add @donut
      expect(@meal.dishes.length).toEqual 1

    it "adds several dished", ->
      @meal.add @donut, @fish
      expect(@meal.dishes.length).toEqual 2

    it "calculates the total price", ->
      @meal.add @donut, @fish
      expect(@meal.totalPrice().cents).toEqual 2655     