module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src/"],
          alias: {
            app: "./src/app",
            processes: "./src/processes",
            screens: "./src/screens",
            widgets: "./src/widgets",
            features: "./src/features",
            entities: "./src/entities",
            shared: "./src/shared",
          },
        },
      ],
    ],
  };
};
