import Component from "../../core/Component.js";
import TodoInput from "./todoinput.js";
import TodoList from "./todolist.js";
import Snackbar from "./snackbar.js";


export default class Todo extends Component{
    setup(){
        let saved_todos = JSON.parse(localStorage.getItem('todos'));
        if(saved_todos == null){
            saved_todos = new Array();
        }

        this.$state ={
            toast:false,
            todos:saved_todos
        }
    };
    template(){
        return `
            <span id='title'>WHAT SHOULD I DO?</span>
            <div data-component="todoinput"></div>
            <div data-component="todolist"></div>
            <div data-component="snackbar"></div>
        `;
    }
    mounted(){
        const {todos, toast, addTodo, delTodo, upTodo, downTodo, checkTodo} = this;
        localStorage.setItem('todos', JSON.stringify(todos));

        const $todoinput = this.$target.querySelector('[data-component="todoinput"]');
        const $todolist = this.$target.querySelector('[data-component="todolist"]');
        const $snackbar = this.$target.querySelector('[data-component="snackbar"]');


        new TodoInput($todoinput, {
            addTodo: addTodo.bind(this)
        });
        new TodoList($todolist, {
            todos,
            delTodo: delTodo.bind(this),
            upTodo: upTodo.bind(this),
            downTodo: downTodo.bind(this),
            checkTodo: this.checkTodo.bind(this),
        });
        new Snackbar($snackbar,{
            toast
        })
    }
    get todos(){
        const {todos} = this.$state;
        return todos;
    }
    get toast(){
        const {toast} = this.$state;
        return toast;
    }
    
    addTodo(content){
        const id = Math.random().toString(36).substr(2, 16);
        const todo = {id:id, content:content, active: false};
        const {todos} = this.$state;

        this.setState({
            toast:true,
            todos:[
                ...todos,
                todo
            ]
        });

        setTimeout(()=>{this.setState({toast:false})}, 3000);
    }
    delTodo(id){
        const todos = [ ...this.$state.todos];

        todos.splice(todos.findIndex(t => t.id === id), 1);
        this.setState({todos});
    }
    upTodo(id){
        const todos = [ ...this.$state.todos];
        let index = todos.findIndex(t => t.id === id);
        const todo = this.$state.todos[index];

        if(index == 0) return;

        todos.splice(index, 1);
        todos.splice(index-1, 0, todo);
        this.setState({todos});
    }
    downTodo(id){
        const todos = [ ...this.$state.todos];
        let index = todos.findIndex(t => t.id === id);
        const todo = this.$state.todos[index];

        todos.splice(index, 1);
        todos.splice(index+1, 0, todo);
        this.setState({todos});
    }
    checkTodo(id){
        const todos = [ ...this.$state.todos];
        let index = todos.findIndex(t => t.id === id);
    
        todos[index].active = !(todos[index].active)

        this.setState({todos});
        
    }

}