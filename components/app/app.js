import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';
/**
 * class App
 */
export class App {
    /**
     * @param  {object} el Элемент DOM
     */
    constructor({el}) {
        this.el=el;
        this.chat=new Chat({
            el: document.createElement('div'),
            data: {
                messages: [
                    {
                        sender: 'Andrew',
                        text: 'Hello, my name is Andrew',
                    },
                    {
                        sender: 'Kate',
                        text: 'Hello, my name is Kate',
                    },
                    {
                        sender: 'Austin',
                        text: 'Hello, my name is Austin',
                    },
                ],
            },
        });
        this.form=new Form({
            el: document.createElement('div'),
            onSubmit: this.onFormSubmit.bind(this),
        });
        this.el.append(this.chat.el, this.form.el);
        this.render();
    }
    /**
     * render() - тут нечего добавить
     */
    render() {
        this.chat.render();
        this.form.render();
    }
    /**
     * @param  {string} text текст сообщения, которое я отправил
     */
    onFormSubmit(text) {
        this.chat.messages=[
            ...this.chat.messages,
            {
                text,
                sender: 'me',
            },
        ];
        this.render();
    }
}
