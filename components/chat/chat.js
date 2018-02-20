
/**
 * class Chat
 */
export class Chat {
    /**
     * @param  {object} {el
     * @param  {array} data}
     */
    constructor({el, data: {messages}}) {
        this.el=el;
        this.messages=messages;
    }
    /**
     * method render()
     */
    render() {
        const messagesHTML=this.messages.map(({sender, text})=>{
            return `
                <div class="chat__message">
                    <h4 class="chat__message__sender">${sender}</h4>
                    <div class="chat__message__text">${text}</div>
                </div>
            `;
        }).join('');
        this.el.innerHTML=messagesHTML;
    }
}
