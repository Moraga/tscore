import { BaseBackend } from '../base/backend';
import Metatags from '../metatags/backend';

export class PageBackend extends BaseBackend {
    content: string = '';
    metatags: string = '';

    async init(component: BaseBackend) {
        // @TODO helper
        this.content = await component.render();
        this.metatags = await Metatags.render();
    }
}