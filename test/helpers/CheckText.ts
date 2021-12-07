import { expect } from 'chai';
interface ICheckText {
    element: WebdriverIO.Element,
    text: string,
    type: 'value' | 'text'
}

export default async function CheckText({ element, text, type }: ICheckText): Promise<void> {
    await element.waitForDisplayed({
        timeout: 10000,
        reverse: false,
        interval: 500
    });
    await element.scrollIntoView({ block: 'center', inline: 'center' });
    expect((type === 'value' ? await element.getValue() : await element.getText()).replace(/\n/g, '')).to.be.equal(text);
}