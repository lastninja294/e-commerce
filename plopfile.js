module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name ?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/Components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
      },
      {
        type: "add",
        path: "src/Components/{{pascalCase name}}/index.jsx",
        templateFile: "plop-templates/Component.jsx.hbs",
      },
    ],
  });
  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page name ?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/Pages/{{pascalCase name}}/{{pascalCase name}}.module.scss",
      },
      {
        type: "add",
        path: "src/Pages/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/Component.jsx.hbs",
      },
    ],
  });
};
