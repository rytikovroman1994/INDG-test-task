describe('Checking the layout of the site at different screen sizes', () => {

    const testData = [
        { width: 375, height: 812, name: 'logInPageMobileSize' },
        { width: 800, height: 1366, name: 'logInPageTabletSize' },
        { width: 1440, height: 1366, name: 'logInPageDesktopSize' },
    ];

    testData.forEach(({ width, height, name }) => {
        it('firs', async function () {
            await browser.url('/login');
            await browser.setWindowSize(width, height);
            await browser.saveFullPageScreen(name, {
                fullPageScrollTimeout: 3000
            });
            expect(await browser.checkFullPageScreen(name, {})).toEqual(0);
        });
    });
});