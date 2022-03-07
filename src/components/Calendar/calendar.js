import Component from "../../core/Component.js";

export default class Calendar extends Component{
    setup(){
        this.$state={
            date : new Date()
        }
    }
    template(){
        return `
                <div>GOOD</div>
        `;
    }

}