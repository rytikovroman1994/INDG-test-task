export const config = {
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ["--window-size=1920,1080", "--disable-gpu", "--no-sandbox"],
            },
            "selenoid:options": { enableVNC: true, enableVideo: true }
        },
        {
            browserName: 'firefox',
            acceptInsecureCerts: true,
            "selenoid:options" : { enableVNC: true,  enableVideo: true }
        }
    ],
    hostname: '192.168.1.8',
    port: 4444,
    path: '/wd/hub',
}