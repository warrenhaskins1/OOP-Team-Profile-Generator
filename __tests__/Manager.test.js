const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Creates a new Manager object with a name", () => {
      const manager = new Manager("Burt");
      expect(manager.name).toEqual("Burt");
    });
  });
});