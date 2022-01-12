const Intern = require("../lib/Intern");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Creates a new Employee object with an id #", () => {
      const intern = new Intern(4);
      expect(intern.id).toEqual(4);
    });
  });
});