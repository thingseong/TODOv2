import Component from "./core/Component.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";




export default class App extends Component{

    template(){
        return `
            <header data-component="header"></header>
            <div data-component="routeview"></div>
            <footer data-component="footer"></footer>
        `;
    }
    mounted(){
        
        const $header = this.$target.querySelector('[data-component="header"]');
        const $footer = this.$target.querySelector('[data-component="footer"]');


        new Header($header, {});
        new Footer($footer, {});

    }







}
