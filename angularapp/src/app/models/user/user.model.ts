import { Data } from "../interfaces/data/data";
import { Page } from "../interfaces/page/page";
import { Support } from "../interfaces/support/support";

export class User {
    page: Page;
    data: Data;
    support: Support;

    constructor(
        page: Page,
        data: Data,
        support: Support
    ) {
        this.page = page;
        this.data = data;
        this.support = support;
    }

}