// require in Intern.js to test Intern input
const Intern = require("../lib/Intern");
test ("testing school constructor", () => {
    // test value if string for school input
    const testVal = "Uw";
    const event = new Intern("Aaa", 1, "email@test.com", testVal);
    expect(event.school).toBe(testVal);
});
test ("testing setPosition arguement", () => {
    // test value for string for setPosition
    const testVal = "Intern";
    const event = new Intern("school", 1, "email@test.com", "Uw");
    expect(event.getRole()).toBe(testVal); 
});
test ("testing getSchool arguement", () => {
    const testVal = "Uw";
    const event = new Intern("Aaa", 1, "email@test.com", testVal);
    // setSchool passes when string is inputed
    expect(event.getSchool()).toBe(testVal);
});