import AllureReporter from '@wdio/allure-reporter';

export default async function AllureStep(name: string, callback: () => Promise<void>): Promise<void> {
    AllureReporter.startStep(name);
    await callback()
    AllureReporter.endStep('passed');
}