import Component from "../../core/Component.js";

export default class TodoInput extends Component{
    template(){
        return `
            <span id='title'>WHAT SHOULD I DO?</span>
            <br>
            <input id='todoin'size="100%" class='input' type="text" placeholder="Todo..."></input>
        `;
    }
    setEvent(){
        const {addTodo} = this.$props;
        this.addEvent('keyup', '.input', ({key, target}) =>{
            if(key !== 'Enter') return;
            addTodo(target.value);
        })
    }

}