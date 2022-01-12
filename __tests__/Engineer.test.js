const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Creates a new Engineer object with an id #", () => {
      const engineer = new Engineer(2);
      expect(engineer.id).toEqual(2);
    });
  });
});
