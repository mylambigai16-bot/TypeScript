module.exports = {
    default: {
        requireModule: ["ts-node/register"],

        require: [
            'src/test/steps/**/*.ts',
            'src/hooks/hooks.ts',
            'src/test/support/**/*.ts',
            'src/hooks/world/**/*.ts'
        ],
        paths:[
            'src/test/features/**/*.feature'
        ],

        "formatOptions":{
            "snippetInterface":"async-await",
        },

        publishQuiet: true,
        dryRun: false,

        format: [
            "progress-bar",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html",
            'rerun:@rerun.txt'
        ],
    },

        rerun:{
            requireModule: ["ts-node/register"],

        require: [
            'src/test/steps/**/*.ts',
            'src/hooks/hooks.ts',
            'src/test/support/**/*.ts',
            'src/hooks/world.ts'
        ],

        "formatOptions":{
            "snippetInterface":"async-await",
        },

        paths:[
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