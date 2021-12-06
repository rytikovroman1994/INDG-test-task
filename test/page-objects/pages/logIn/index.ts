// import { basicStructure } from '../../general/structure';

class LogInPage {
    // get emailField() { return $(basicStructure('logIn-page__email')) };
    get emailField() { return $('body [name="email"]') };
    // get emailField() { return $(basicStructure('logIn-page_password')) };
    get passwordField() { return $('body [name="password"]') };
    // get errorTextMessage() { return $(basicStructure('logIn-page-error-message'))}
    get errorTextMessage() { return $(' body [data-test-component^="errorMessage__text"]') };
    nextButton(status: "button--disabled" | "") { return $(`[data-test-component^="loginPage__nextButton button ${status}"]`) };
    logInButton(status: "button--disabled" | "") { return $(`[data-test-component^="loginPage__loginButton button ${status}"]`) };
}

export default new LogInPage();