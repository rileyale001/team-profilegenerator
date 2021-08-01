// require in fs and path 
const fs = require("fs");
const path = require("path");
const src_Dir = path.resolve(__dirname, "../src")
// create function that generates html
const showHtml = company => {
    const html = [];
    // html stored in company
html.push(...company
    // filter for manager html content
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => showManager(manager))
    );
    html.push(...company
        // filter for Engineer html content
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => showEngineer(engineer))
    );
    html.push(...company
        // filter and map for manager html content and store into itern value 
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => showIntern(intern))
    ); 
    // joins all HTML into main HTML
    return showMain(html.join(""));
    };
    // create function that generates and shows manager html
    const showManager = manager => {
        // path to store holders to manager html and calls user input for manager
        let srcHtml = fs.readFileSync(path.resolve(src_Dir, "manager.html"),"utf-8");
        srcHtml = replaceSrc(srcHtml, "name", manager.getName());
        srcHtml = replaceSrc(srcHtml, "position", manager.getRole());
        srcHtml = replaceSrc(srcHtml, "email", manager.getEmail());
        srcHtml = replaceSrc(srcHtml, "id", manager.getId());
        srcHtml = replaceSrc(srcHtml, "telephone", manager.getTelephone());
        return srcHtml;
    };
    const showEngineer = engineer => {
          // path to store holders to engineer html and calls user input for engineer
        let srcHtml = fs.readFileSync(path.resolve(src_Dir, "engineer.html"),"utf-8");
        srcHtml = replaceSrc(srcHtml, "name", engineer.getName());
        srcHtml = replaceSrc(srcHtml, "position", engineer.getRole());
        srcHtml = replaceSrc(srcHtml, "email", engineer.getEmail());
        srcHtml = replaceSrc(srcHtml, "id", engineer.getId());
        srcHtml = replaceSrc(srcHtml, "github", engineer.getGithub());
        return srcHtml;
    };
    const showIntern = intern => {
          // path to store holders to intern html and calls user input for intern
        let srcHtml = fs.readFileSync(path.resolve(src_Dir,"intern.html"),"utf-8");
        srcHtml = replaceSrc(srcHtml, "name", intern.getName());
        srcHtml = replaceSrc(srcHtml, "position", intern.getRole());
        srcHtml = replaceSrc(srcHtml, "email", intern.getEmail());
        srcHtml = replaceSrc(srcHtml, "id", intern.getId());
        srcHtml = replaceSrc(srcHtml, "school", intern.getSchool());
        return srcHtml;
    };
    const showMain = html => {
          // path main html and function to store on main
        const srcHtml = fs.readFileSync(path.resolve(src_Dir, "main.html"),"utf-8");
        return replaceSrc(srcHtml, "company", html);
    };
    const replaceSrc = (srcHtml, placeholder, val) => {
        // placeholder is replaced with layout for html content
        const sectioning = new RegExp ("{{ " + placeholder + " }}","gm");
        return srcHtml.replace(sectioning, val);
    };
    module.exports = showHtml;