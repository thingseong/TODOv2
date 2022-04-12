import Component from "../../core/Component.js";

export default class Header extends Component{
    template(){
        return `
                <h1>TODOLIST</h1>
                <button class="gocalendar">Calendar</button>
                <button class="gotodo">Todo</button>

        `;
    }
    setEvent(){
        this.addEvent('click', '.gocalendar', ({target}) =>{
            window.router.push('/calendar');
        })
        this.addEvent('click', '.gotodo', ({target}) =>{
            window.router.push('/');
        })
    }
}