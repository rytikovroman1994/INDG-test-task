import { expect } from 'chai';

interface IAddTextInField {
    element: WebdriverIO.Element,
    text: string,
    type: 'value' | 'text',
    needCheckTest?: boolean
}

export default async function AddTextInField({ element, text, type, needCheckTest }: IAddTextInField): Promise<void> {
    await element.waitForDisplayed({
        timeout: 10000,
        reverse: false,
        interval: 500
    });
    await element.scrollIntoView({ block: 'center', inline: 'center' });
    await element.clearValue();
    await element.addValue(text);

    if (needCheckTest) expect(type === 'value' ? await element.getValue() : await element.getText()).to.be.equal(text, `The entered text is displayed incorrectly`);
}