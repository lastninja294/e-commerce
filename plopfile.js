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
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Component.jsx.hbs",
      },
      {
        type: "append",
        path: "src/components/index.js",
        templateFile: "plop-templates/index.cjs.hbs",
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
          path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        },
        {
          type: "add",
          path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx",
          templateFile: "plop-templates/Component.jsx.hbs",
        },
        {
          type: "append",
          path: "src/components/index.js",
          templateFile: "plop-templates/index.cjs.hbs",
        },
      ],
    });
};
