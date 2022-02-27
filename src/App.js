import Component from "./core/Component.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import TodoInput from "./components/todoinput.js";
import TodoList from "./components/todolist.js";


export default class App extends Component{
    setup(){
        this.$state ={
            toast:false,
            todos:[
            ]
        }
    };
    template(){
        return `
            <header data-component="header"></header>
            <div data-component="todoinput"></div>
            <div data-component="todolist"></div>
            <footer data-component="footer"></footer>
        `;
    }
    mounted(){

        const {todos, toast, addTodo, delTodo, upTodo, downTodo} = this;
        
        const $header = this.$target.querySelector('[data-component="header"]');
        const $todoinput = this.$target.querySelector('[data-component="todoinput"]');
        const $todolist = this.$target.querySelector('[data-component="todolist"]');
        const $footer = this.$target.querySelector('[data-component="footer"]');


        new Header($header, {});
        new TodoInput($todoinput, {
            toast,
            addTodo: addTodo.bind(this)
        });
        new TodoList($todolist, {
            todos,
            delTodo: delTodo.bind(this),
            upTodo: upTodo.bind(this),
            downTodo: downTodo.bind(this),
        });
        new Footer($footer, {});

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
        const todo = {id:id, content:content, active: true};
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
        const todo = this.$state.todos[index];
        
    }




}
