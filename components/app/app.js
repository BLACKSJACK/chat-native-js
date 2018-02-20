import {Chat} from './../chat/chat.js';
/**
 * class App
 */
export class App {
    /**
     * @param  {object} el Элемент DOM
     */
    constructor({el}) {
        this.el=el;
        this.chat=Chat;
    }
}
