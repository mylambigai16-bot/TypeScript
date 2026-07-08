module.exports = {
    default: {
        requireModule: ["ts-node/register"],

        require: [
            'src/test/steps/**/*.ts',
            'src/test/hooks/hook.ts',
            'src/test/support/**/*.ts',
            'src/test/world/myWorld.ts'
        ],
        paths: [
            'src/test/feature/**/*.feature'
        ],

        format: [
            "json:reports/jsonReports/cucumber-report.json",
            "html:reports/htmlReports/cucumber-report.html",
            'rerun:@rerun.txt'
        ],

        "formatOptions": {
            "snippetInterface": "async-await",
        },

        publishQuiet: true,
        dryRun: false,

    },

//     rerun: {
//         requireModule: ["ts-node/register"],

//         require: [
//             'src/test/steps/**/*.ts',
//             'src/hooks/hooks.ts',
//             'src/test/support/**/*.ts',
//             'src/world/myWorld.ts'
//         ],

//          format: [
//             "json:reports/cucumber-report.json",
//             "html:reports/cucumber-report.html",
//             'rerun:@rerun.txt'
//         ],

//         "formatOptions": {
//             "snippetInterface": "async-await",
//         },

//         paths: [
//             './rerun.txt'
//         ],

//         publishQuiet: true,

       
//     }

 }