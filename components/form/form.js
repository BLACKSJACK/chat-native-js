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
     * method render()
     */
    render() {
        this.el.innerHTML=`
            <form>
                <textarea></textarea>
                <input type="submit" value="Отправить">
            </form>
        `;
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
