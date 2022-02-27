import Component from "../core/Component.js";

export default class TodoInput extends Component{
    template(){
        const {toast} = this.$props;
        return `
            <div id='snackbar' class=${toast ? "show":""}>Success!!</div>
            <input class='input' type="text" placeholder="todo..."></input>
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