const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Creates a new Employee object with an id #", () => {
      const employee = new Employee(1);
      expect(employee.id).toEqual(1);
    });
  });
});
