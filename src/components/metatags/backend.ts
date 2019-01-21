import { BaseBackend } from "../base/backend";

export interface Metatag {
    name: string;
    value: string;
}

export class Metatags extends BaseBackend {
    tags: Array<Metatag> = [];

    set(metatag: Metatag): void {
        this.tags.push(metatag);
    }

    async viewWillLoad() {
        console.log(this.tags);
    }
}

export default new Metatags();