import { BaseBackend } from '../base/backend';
import { TitleBackend } from "../title/backend";
import Metatags from "../metatags/backend";
import { MonteCarlo, MonteCarloPlatform, MonteCarloRepository } from "../../http/montecarlo";
import { slugify } from "../../utils/string";

import Feat from './feat';

export class ArticleBackend extends BaseBackend {
    title: string = '';
    test?: TitleBackend;

    async viewWillLoad() {
        let title = new TitleBackend('My Page Title');
        
        Metatags.set({name: 'Author', value: 'TEst'});

        let latestNews = new MonteCarlo({
            repository: MonteCarloRepository.Mix1
        });

        let data = await latestNews.fetch();
        console.log(data);

        this.title = await title.render();

        this.test = new TitleBackend('ABC');

        const f = new Feat();
    }
}