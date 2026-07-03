module.exports = {
    default: {
        requiredModule: ["ts-node/register"],

        require: [
            'src/test/steps/**/*.ts',
            'src/test/hooks/**/*.ts',
            'src/test/support/**/*.ts'
        ],

        "formatOptions":{
            "snippetInterface":"async-await",
        },

        paths:[
            'src/test/features/**/*.feature'
        ],

        publishQuiet: true,
        dryRun: true,

        format: [
            "progress",
            "json: reports/cucumber-report.json"
        ]

    }
}