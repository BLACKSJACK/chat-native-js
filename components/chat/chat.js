
/**
 * class Chat
 */
export class Chat {
    /**
     * @param  {object} {el
     * @param  {array} data}
     */
    constructor({el}) {
        this.el=el;
        this.messages=[];
    }
    /**
     * Функция установки данных
     * @param  {massive} messages
     */
    setData(messages) {
        this.messages=messages;
    }
    /**
     * method render()
     */
    render() {
        const chatWindow=document.createElement('div');
        chatWindow.classList.add(`chat`);
        const messagesHTML=this.messages.map(({sender, text, currentUser})=>{
            return `
                <div class="chat__message ${currentUser ? 'me' : ''}">
                    <h4 class="chat__message__sender">${sender}</h4>
                    <div class="chat__message__text">${text}</div>
                </div>
            `;
        }).join('');
        chatWindow.innerHTML=messagesHTML;
        this.el.innerHTML='';
        this.el.append(chatWindow);
    }
}
