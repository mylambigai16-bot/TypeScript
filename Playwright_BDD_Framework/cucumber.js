module.exports = {
    default: {
        requireModule: ["ts-node/register"],

        require: [
            'src/test/steps/**/*.ts',
            'src/test/hooks/hooks.ts',
            'src/test/support/**/*.ts',
            'src/test/world/customWorld.ts'
        ],
        paths: [
            'src/test/features/**/*.feature'
        ],

        "formatOptions": {
            "snippetInterface": "async-await",
            resultsDir: "reports/allure-results"
        },

        publishQuiet: true,
        dryRun: false,

        format: [
            "summary",
            "progress",
            // "progress-bar",
            "json:reports/jsonReports/cucumber-report.json",
            "html:reports/htmlReports/cucumber-report.html",
            "allure-cucumberjs/reporter",
            'rerun:@rerun.txt'
        ],
    },

    rerun: {
        requireModule: ["ts-node/register"],

        require: [
            'src/test/steps/**/*.ts',
            'src/hooks/hooks.ts',
            'src/test/support/**/*.ts',
            'src/world/customWorld.ts'
        ],

        "formatOptions": {
            "snippetInterface": "async-await",
        },

        paths: [
            './rerun.txt'
        ],

        publishQuiet: true,
        dryRun: false,

        format: [
            "progress-bar",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html",
            'rerun:@rerun.txt'
        ],
    }

}