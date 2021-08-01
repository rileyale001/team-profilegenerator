const Employee = require("../lib/Employee");
test ("testing Employee instance", () => {
    const event = new Employee();
    expect(typeof(event)).toBe("object");
});
test ("testing name arguement", () => {
    const name = 'Alex';
    const event = new Employee(name);
    expect(event.name).toBe(name);
});
test ("testing setName arguement", () => {
    const testVal = 'Alex';
    const event = new Employee(testVal);
    const result = event.getName();
    expect(result).toBe(testVal);
});
test ("testing getRole arguement", () => {
    const testVal = "Employee";
    const event = new Employee("Aaa", 1, "email@test.com");
    expect(event.getRole()).toBe(testVal); 
});