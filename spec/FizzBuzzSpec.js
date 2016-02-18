describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe("Given a number, return TRUE because is divisible by", function() {
    // caso especifico
    it("three", function() {
      // logica
      expect(fizzbuzz.divisibleBy(3)).toBe(true);
    });
    // caso especifico
    it("five", function() {
      // logica
      expect(fizzbuzz.divisibleBy(5)).toBe(true);
    });
  });

});

