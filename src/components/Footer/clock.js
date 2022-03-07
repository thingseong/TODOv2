import Component from "../../core/Component.js";


export default class Clock extends Component{
    setup(){
        this.$state ={
            time : new Date().toLocaleTimeString()
        }

    }

    template(){
        const {time} = this.$state;
        return`
            <a>
            ${time}
            </a>
        `
    }

    setEvent(){


        setInterval(()=>{
            
            let {time} = this.$state;
            time = new Date().toLocaleTimeString();
            this.setState({time});
        }, 1000);

    }









}