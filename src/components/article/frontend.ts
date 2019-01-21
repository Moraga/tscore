import './style.scss';
import { BaseFrontend } from '../base/frontend';

export class ArticleFrontend extends BaseFrontend {
    viewWillLoad() {
        alert('here');
    }
}