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
        });
        this.form=new Form({
            el: document.createElement('div'),
            onSubmit: this.onFormSubmit.bind(this),
        });
        this.el.append(this.chat.el, this.form.el);
        this._getData().then(this._setData.bind(this), ()=>{
            console.log('Error');
        }).then(()=>{
            this.render();
        });
    }
    /**
     * Устанавливаем полученные данные в виджет чата
     * @param  {massive} data
     * @return {Promise}
     */
    _setData(data) {
        return new Promise((resolve, reject)=>{
            this.chat.setData(data);
            resolve();
        });
    }
    /**
     * Загружаем данные со стороннего источника
     * @return {Promise}
     */
    _getData() {
        return new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange', ()=>{
                if (xhr.readyState==4) {
                    resolve(JSON.parse(xhr.responseText));
                }
            });
            xhr.open('GET', 'data/chat.json', true);
            xhr.send();
        });
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
                currentUser: true,
            },
        ];
        this.render();
    }
}
