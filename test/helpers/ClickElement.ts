interface IOption {
    button?: "left" | "middle" | "right",
    x?: number,
    y?: number
};

interface IClickElement {
    element: WebdriverIO.Element,
    option?: IOption,
    errorText?: string,
    log?: boolean
}

export default async function ClickElement({ element, option, errorText, log }: IClickElement): Promise<void> {
    if (log) console.log(element)
    await browser.waitUntil(
        () => element.isClickable(), {
        timeout: 10000,
        interval: 500,
        timeoutMsg: errorText
    });
    await element.scrollIntoView({ block: 'center', inline: 'center' });
    if (option) {
        await element.click({ button: option.button, x: option.x, y: option.y });
        return
    }
    await element.click();
}