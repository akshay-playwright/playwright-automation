export class DropdownUtils {

    static async selectByLabel(locator, label)
     {
        await locator.waitFor({ state: 'visible' });
        await locator.selectOption({ label });
    }

}