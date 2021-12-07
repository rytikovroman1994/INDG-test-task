interface IAddTextInField {
    element: WebdriverIO.Element,
    text: string,
    type: 'value' | 'text',
    needCheckTest?: boolean
}
interface IOption {
    button?: "left" | "middle" | "right",
    x?: number,
    y?: number
}

interface IClickElement {
    element: WebdriverIO.Element,
    option?: IOption,
    errorText?: string,
    log?: boolean
}
interface ICheckText {
    element: WebdriverIO.Element,
    text: string,
    type: 'value' | 'text',
}

declare namespace WebdriverIO {
	//   interface Config {
	//   }

	//   interface Element {
	//   }

	interface Browser {
        helper: {
            AddTextInField: ({ element, text, needCheckTest }: IAddTextInField) => Promise<void>;
            AllureStep: (name: string, callback: () => Promise<void>) => Promise<void>,
            ClickElement: ({ element, option, errorText, log }: IClickElement) => Promise<void>,
            CheckText: ({ element, text, type }: ICheckText) => Promise<void>
            GetKeyCode: (key: any) => string; 
        }
	}
}

declare module 'wdio-image-comparison-service';