export abstract class BaseFrontend {
    element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
        this.viewWillLoad();
    }

    abstract viewWillLoad(): void;

    render(): void {

    }
}