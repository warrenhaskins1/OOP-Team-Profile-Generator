const Manager = require("../lib/Manager");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Creates a new Employee object with an id #", () => {
      const manager = new Manager(3);
      expect(manager.id).toEqual(3);
    });
  });
});