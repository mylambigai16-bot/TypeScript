module.exports = {
    default: {
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
            'src/test/features/**/*.feature'
        ],

        publishQuiet: true,
        dryRun: false,

        format: [
            "progress-bar",
            "json:reports/cucumber-report.json"
        ]
        

    }
}