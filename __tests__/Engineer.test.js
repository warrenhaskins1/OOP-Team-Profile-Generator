const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Creates a new Engineer object with a Github", () => {
      const engineer = new Engineer("Ernie", 7, "test@test.com", "ErnieGH");
      expect(engineer.github).toEqual("ErnieGH");
    });
  });
});
