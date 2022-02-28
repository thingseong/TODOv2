import Component from "../../core/Component.js";

export default class TodoList extends Component{
    setup(){};
    template(){
        const {todos} = this.$props;

        return `
            <ul>

            ${todos.map(({id, content, active})=> `
            <li data-id="${id}" style=${active ? "text-decoration:line-through;color:gray" : ""}>
                <input type='checkbox' class='checkbox' ${active ? "checked" : ""}></input>
                ${content}

                <button class='delbtn'>DEL</button>
                <button class='downbtn'>DOWN</button>
                <button class='upbtn'>UP</button>

            
            </li>


            `).join('')}

            </ul>
        `;
    }
    setEvent(){
        const {upTodo, downTodo, delTodo, checkTodo} = this.$props;
        this.addEvent('click', '.delbtn', ({target}) => {
            delTodo(target.closest('[data-id]').dataset.id);
        });
        
        this.addEvent('click', '.upbtn', ({target}) => {
            upTodo(target.closest('[data-id]').dataset.id);
        });

        this.addEvent('click', '.downbtn', ({target}) => {
            downTodo(target.closest('[data-id]').dataset.id);
        });

        this.addEvent('click', '.checkbox', ({target}) => {
            checkTodo(target.closest('[data-id]').dataset.id);
        });
    }

}