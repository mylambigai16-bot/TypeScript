const report = require("multiple-cucumber-html-reporter");
console.log("Current directory:", process.cwd());
console.log("JSON exists:", require("fs").existsSync("reports/jsonReports/cucumber-report.json"));
report.generate({
  jsonDir: "reports/jsonReports",
  reportPath: "reports/htmlReports/multipleHtml",
  reportName: "Playwright BDD Report",
  pageTitle: "Feature report",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "149",
    },
device: "Mylambigai",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Book Cart Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },      ],    },  });

