import LogInPage from '../../page-objects/pages/logIn/index';
import AllureStep from '../../helpers/AllureStep';

describe('Checking the authorization page', () => {

    beforeEach(
        async () => {
            await AllureStep('Open logIn page', async () => {
                await browser.url('/login');
            });
        }
    );

    const passwordRecovery = async () => {
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

        await browser.helper.ClickElement({
            element: await LogInPage.textForgetPassword,
            errorText: 'Could not click on the link - Forgot password'
        });

        await browser.waitUntil(
            async () => await LogInPage.headingText.getText() === 'Password recovery',
            {
                timeout: 5000,
                timeoutMsg: 'The password recovery page could not be opened'
            }
        );
    }

    it('Should login with invalid email', async function () {
        await AllureStep('Add invalid email', async () => {
            await browser.waitUntil(
                async () => await LogInPage.nextButton('button--disabled').isExisting(),
                {
                    timeout: 5000,
                    timeoutMsg: 'The button is not active until the login is entered'
                }
            );
            await browser.helper.AddTextInField({
                element: await LogInPage.emailField,
                text: 'testtest.ru',
                type: 'value',
                needCheckTest: true
            });

            await browser.helper.ClickElement({
                element: await LogInPage.headingText
            });

            await browser.helper.CheckText({
                element: await LogInPage.emailErrorTextMessage,
                type: 'text',
                text: 'Invalid email address'
            });
        });
    });

    it('Should login with invalid password', async function () {
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

            await browser.helper.ClickElement({
                element: await LogInPage.logInButton(''),
                errorText: 'Failed to click on the authorization button'
            });

            await browser.helper.CheckText({
                element: await LogInPage.passwordErrorTextMessage,
                type: 'text',
                text: 'Invalid email or password'
            });
        });
    });

    it('Should go to the password recovery page and back', async function () {
        await passwordRecovery();

        await browser.helper.ClickElement({
            element: await LogInPage.backToLogInButton,
            errorText: 'Could not click on the link - Back to login'
        });

        await browser.helper.CheckText({
            element: await LogInPage.headingText,
            type: 'text',
            text: 'Log in'
        });
    });

    it('A password recovery request should be sent', async function () {
        await passwordRecovery();

        await browser.helper.ClickElement({
            element: await LogInPage.sendLinkButton,
            errorText: 'Failed to click the Send Link button'
        });

        await LogInPage.recoveryPageSubmitMessage.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'The confirmation text did not appear after sending the link'
        });

        await browser.helper.CheckText({
            element: await LogInPage.recoveryPageSubmitMessage,
            type: 'text',
            text: "If we find a corresponding account to the email you have specified, we will send you a password reset email shortly.Please note that the password reset link expires within a few hours and do make sure your spam folder in case you don't receive the email shortly.Thank you."
        });

        await browser.helper.ClickElement({
            element: await LogInPage.backToLogInButton,
            errorText: 'Could not click on the link - Back to login'
        });

        await browser.helper.CheckText({
            element: await LogInPage.headingText,
            type: 'text',
            text: 'Log in'
        });
    });
});


