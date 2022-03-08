import Todo from "../components/Todo/todo.js";
import Calendar from "../components/Calendar/calendar.js";

const routes = [
    {
        path:"/",
        name:"Todo",
        component: Todo
    },
    {
        path:"/calendar",
        name:"Calendar",
        component: Calendar
    },

];


class Router{
    $base_url
    $table
    constructor(){
        this.$table = routes;
        window.onpopstate = () =>{
            const pathName = window.location.pathname;
            console.log(pathName)
            const route = routes.find(e =>{
                return e.path == pathName
            })
            this.render(route)
        }

        window.onload = () =>{
            const pathName = window.location.pathname;
            console.log(pathName)
            const route = routes.find(e =>{
                return e.path == pathName
            })
            this.render(route)
        }
        


    }



    push(pathName){
        window.history.pushState({}, pathName, window.location.origin + pathName);

        const route = routes.find(e =>{
            return e.path == pathName
        })

        this.render(route)

    }
    render(route){
        const $routeview = document.querySelector('[data-component="routeview"]');
        new route.component($routeview,{})
        
    }



};


export default Router;