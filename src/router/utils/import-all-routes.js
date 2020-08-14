let imports = [];

function importAll(filePaths) {
  filePaths.keys().forEach(filePath => {
    const path = filePath.replace(".", "");
    imports.push(require(`@/modules${path}`).default);
  });
  return imports;
}

export const importAllRoutes = () =>
  importAll(require.context("@/modules/", true, /routes.js/));
