import request from './generic';

export enum MonteCarloPlatform {
    Web = 'web',
    Mobile = 'mobile'
}

export enum MonteCarloRepository {
    Mix1 = 'mix1',
    Mix2 = 'mix2',
    Tagpage = 'tagpage'
}

export enum MonteCarloFormat {
    Json = 'json'
}

export interface MonteCarloParams {
    'conteudo-adulto'?: Boolean;
    charset?: string;
    fields?: string;
    repository?: MonteCarloRepository;
    size?: number;
    sort?: string;
    operator?: string;
    format?: MonteCarloFormat;
    platform?: MonteCarloPlatform;
    headline?: string;
    next?: string;
    prev?: string;
}

interface MonteCarloResponse {
    docs: Array<any>;
    prev?: string;
    next?: string;
}

export class MonteCarlo {
    params: MonteCarloParams;
    next?: string;
    prev?: string;

    constructor(params?: MonteCarloParams) {
        this.params = {};
        this.setDefaultparams();
        if (params) {
            this.setParams(params);
        }
    }

    setParams(params: MonteCarloParams) {
        this.params = {...this.params, ...params};
    }

    setDefaultparams() {
        this.setParams(<MonteCarloParams> {
            'conteudo-adulto': false,
            charset: 'utf-8',
            fields: 'titulo',
            repository: MonteCarloRepository.Mix2,
            size: 10,
            sort: 'created:desc',
            operator: 'OR',
            format: MonteCarloFormat.Json
        });
    }

    async fetch() {
        let qs = this.params;

        const response = <MonteCarloResponse> await request({
            uri: 'http://tagpage.uol.com.br/',
            qs,
            json: true
        });

        this.next = response.next;
        this.prev = response.prev;

        return response.docs;
    }

    async fetchNext() {
        this.params.next = this.next;
        return this.fetch();
    }
}