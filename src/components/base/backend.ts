import handlebars from 'handlebars';
import fs from 'fs';

export abstract class BaseBackend {
    async viewWillLoad() {}
    
    async viewDidLoad() {}

    async render() {
        await this.viewWillLoad();

        const child: string = this.constructor.toString().match(/\w+/g)![1];

        let comp = child.replace('Backend', '').toLowerCase();

        // @TODO
        comp = `${__dirname}/../${comp}/view.hbs`;
        let file = fs.readFileSync(comp, {encoding: 'utf8'});
        const template = handlebars.compile(file, { noEscape: true });
        

        let resp = template(this);


        let parts = resp.split(/#([^#]+)#/g);
        let all = '';

        for (const [i, part] of parts.entries()) {
            let part = parts[i];
            if (i % 2 === 0) {
                all += part;
            }
            else {
                if (part in this) {
                    const d: BaseBackend = (<any>this)[part]
                    all += await d.render();
                }
            }
        }

        resp = all;


        await this.viewDidLoad();

        return resp;
    }
}