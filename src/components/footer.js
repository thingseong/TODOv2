import Component from "../core/Component.js";

export default class Footer extends Component{
    template(){
        return `
            <div>
                Made by thingseong
                <div id='snackbar' hidden></div>
            </div>
        `;
    }
}