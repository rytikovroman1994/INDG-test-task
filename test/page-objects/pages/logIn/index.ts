import { BasicStructure } from '../../general/structure';

class LogInPage {
    // get emailField() { return $(basicStructure('logIn-page__email')) };
    get emailField() { return $('body [name="email"]') };
    // get emailField() { return $(basicStructure('logIn-page_password')) };
    get passwordField() { return $('body [name="password"]') };
    // get errorTextMessage() { return $(basicStructure('logIn-page-error-message'))}
    get emailErrorTextMessage() { return $(BasicStructure({ type: 'flexible', testId: 'errorMessage__text', parentElement: BasicStructure({ type: 'strong', testId: 'loginPage__email field' }) })) };
    get passwordErrorTextMessage() { return $(BasicStructure({ type: 'flexible', testId: 'errorMessage__text', parentElement: BasicStructure({ type: 'strong', testId: 'loginPage__password field' }) })) };
    nextButton(status: "button--disabled" | "") { return $(BasicStructure({ type: 'flexible', testId: `loginPage__nextButton button ${status}` })) };
    logInButton(status: "button--disabled" | "") { return $(BasicStructure({ type: 'flexible', testId: `loginPage__loginButton button ${status}` })) };
    get sendLinkButton() { return $(BasicStructure({ type: 'flexible', testId: 'passwordRecoveryPage__sendButton button' })) };
    get headingText() { return $(BasicStructure({ type: 'strong', testId: 'text text--type-heading1' })) };
    get gridLogo() { return $(BasicStructure({ type: 'strong', testId: 'gripLog' })) };
    get textForgetPassword() { return $(BasicStructure({ type: 'flexible', testId: 'textLink__text' })) };
    get backToLogInButton() { return $(BasicStructure({ type: 'flexible', testId: 'passwordRecoveryPage__goBack' })) };
    get recoveryPageSubmitMessage() { return $(BasicStructure({ type: 'strong', testId: 'passwordRecoveryPage__submitMessage' })) };
}

export default new LogInPage();