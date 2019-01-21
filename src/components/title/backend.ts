import { BaseBackend } from "../base/backend";

export class TitleBackend extends BaseBackend {
    title: string;

    constructor(title: string) {
        super();
        this.title = title;
    }
}