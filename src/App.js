import Component from "./core/Component.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Todo from "./components/Todo/todo.js";


export default class App extends Component{

    template(){
        return `
            <header data-component="header"></header>
            <div data-component="todo"></div>
            <footer data-component="footer"></footer>
        `;
    }
    mounted(){
        
        const $header = this.$target.querySelector('[data-component="header"]');
        const $todo = this.$target.querySelector('[data-component="todo"]');
        const $footer = this.$target.querySelector('[data-component="footer"]');


        new Header($header, {});
        new Todo($todo,{});
        new Footer($footer, {});

    }







}
