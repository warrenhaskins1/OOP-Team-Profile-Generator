const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Creates a new Employee object with an id #", () => {
      const employee = new Employee("Bobert", 123, "test@test.com");
      expect(employee.id).toEqual(123);
    });
  });
});
