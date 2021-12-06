import LogInPage from '../page-objects/pages/logIn/index';
import AllureStep from '../helpers/AllureStep';

describe('Checking the authorization page', () => {
    it('Should login with valid credentials', async function () {
        await AllureStep('Open logIn page', async () => {
            await browser.url('/login');
        });
        await AllureStep('Add name and password', async () => {
            await browser.waitUntil(
                async () => await LogInPage.nextButton('button--disabled').isExisting(),
                {
                    timeout: 5000,
                    timeoutMsg: 'The button is not active until the login is entered'
                }
            );
            await browser.helper.AddTextInField({
                element: await LogInPage.emailField,
                text: 'test@test.ru',
                type: 'value',
                needCheckTest: true
            });

            await browser.helper.ClickElement({
                element: await LogInPage.nextButton(''),
                errorText: 'Could not click on the button - Next'
            });

            await LogInPage.logInButton('button--disabled').waitForExist({
                timeout: 5000,
                timeoutMsg: 'The authorization button did not appear after entering the email'
            });

            await browser.helper.AddTextInField({
                element: await LogInPage.passwordField,
                text: '123456',
                type: 'value'
            });
            await browser.pause(5000)
        });
    });
});


