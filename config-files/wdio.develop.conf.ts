export const config = {
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true
        },
        // {
        //     maxInstances: 5,
        //     browserName: 'firefox',
        // }
    ],
    services: ['selenium-standalone'],
}