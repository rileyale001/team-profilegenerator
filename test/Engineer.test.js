// require in Engineer.js to test 
const Engineer = require("../lib/Engineer");
test ("testing Github constructor", () => {
    // test value string for gitHub
    const testVal = "GitHub";
    const event = new Engineer ("Aaa", 1, "email@test.com", testVal);
    expect(event.github).toBe(testVal);
});
test ("testing getRole arguement", () => {
    // test value for string for position
    const testVal = "Engineer";
    const event = new Engineer ("Aaa", 1, "email@test.com", "GitHub");
    expect(event.getRole()).toBe(testVal); 
});
test ("testing getGithib arguement", () => {
    // test for string
    const testVal = "GitHub";
    const event = new Engineer ("Aaa", 1, "email@test.com", testVal);
    expect(event.getGithub()).toBe(testVal);
});