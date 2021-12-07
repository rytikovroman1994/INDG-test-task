interface IBasicStructure {
    type: "strong" | "flexible",
    testId: string,
    parentElement?: string
}

export const BasicStructure = ({ type, testId, parentElement }: IBasicStructure) => {
    if (type === "strong") {
        return `${parentElement ? parentElement : 'body'} [data-test-component="${testId}"]`
    } else {
        return `${parentElement ? parentElement : 'body'} [data-test-component^="${testId}"]`
    }
};