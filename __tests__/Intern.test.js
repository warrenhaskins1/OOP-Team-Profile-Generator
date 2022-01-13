const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Creates a new Intern object with a school", () => {
      const intern = new Intern("Bill", 4, "test@test.com", "UoHK");
      expect(intern.school).toEqual("UoHK");
    });
  });
});