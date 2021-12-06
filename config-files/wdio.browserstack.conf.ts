export const config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true
        },
        {
            maxInstances: 5,
            browserName: 'firefox',
        }
    ],
    services: [
        ['browserstack', {
            browserstackLocal: true
        }]
    ],
};