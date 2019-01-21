import { ArticleFrontend } from "../article/frontend";

let e = document.querySelector('article');

if (e) {
    new ArticleFrontend(e);
}