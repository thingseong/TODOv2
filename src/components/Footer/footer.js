import Component from "../../core/Component.js";
import Clock from "./clock.js";

export default class Footer extends Component{
    template(){
        return `
            <div>
                <div data-component="clock"></div>
                <a id='madeby'>Made by thingseong</a>
            </div>
        `;
    }
    mounted(){
        const $clock = this.$target.querySelector('[data-component="clock"]');
        new Clock($clock, {});
    }

}