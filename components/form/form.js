/**
 * class Form
 */
export class Form {
    /**
     * @param  {object} el объект DOM
     * @param  {function} onSubmit метод для передачи текста родителю
     */
    constructor({el, onSubmit}) {
        this.el=el;
        this.onSubmit=onSubmit;
        this.el.addEventListener('submit', this._onSubmit.bind(this));
    }
    /**
     * method _onEnterSubmit()
     * @param  {event} event
     */
    _onEnterSubmit(event) {
        if (event.keyCode===13) {
            this.el.dispatchEvent(new Event('submit'));
        }
    }
     /**
     * method render()
     */
    render() {
        this.el.innerHTML=`
            <form class="form">
                <textarea class="form__textarea"></textarea>
                <input class="form__submit" type="submit" value="Отправить">
            </form>
        `;

        this.el.querySelector('textarea').addEventListener('submit', this._onSubmit.bind(this));
        this.el.querySelector('textarea').addEventListener('keypress', this._onEnterSubmit.bind(this));
    }
    /**
     * при сабмите формы
     * @param {object} event
     */
    _onSubmit(event) {
        event.preventDefault();
        this.onSubmit(event.target.querySelector('textarea').value);
    }
}
