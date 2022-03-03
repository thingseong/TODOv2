import Component from "../core/Component.js";
// import Router from "../route/router.js";

export default class Header extends Component{
    template(){
        return `
                <h1>TODOLIST</h1>
                <button class="tmp">GO</button>
                <button class="tmp2">GO2</button>

        `;
    }
    setEvent(){
        // const R = new Router();
        this.addEvent('click', '.tmp', ({target}) =>{
                
                window.router.push('/tmp')

        })
        this.addEvent('click', '.tmp2', ({target}) =>{

            window.router.push('/tmp2')

        })
    }
}