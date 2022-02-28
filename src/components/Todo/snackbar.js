import Component from "../../core/Component.js";


export default class Snackbar extends Component{
    template(){
        const {toast} = this.$props;
        return `
            <div id="snackbar" class=${toast ? "show" : ""}>
                Success!!
            </div>
        `;
    }
}