// require in Manager.js
const Manager = require("../Manager");
test ("testing telephone constructor", () => {
    // test value for numnber not just 100
    const testVal = 100;
    const event = new Manager ("Aaa", 1, "email@tes.com", testVal);
    expect(event.telephone).toBe(testVal);
});
test ("testing getRole arguement", () => {
    // test value for string for setPosition
    const testVal = "Manager";
    const event = new Manager("Aaa", 1, "test@test.com", 100);
    expect(event.getRole()).toBe(testVal); 
});
test ("testing setTelephone arguement", () => {
    // test value for Manager's telephone number and tests for number
    const testVal = 100;
    const event = new Manager ("Aaa", 1, "email@test.com", testVal);
    expect(event.getTelephone()).toBe(testVal);
});