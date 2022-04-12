import Todo from "../components/Todo/todo.js";
import Calendar from "../components/Calendar/calendar.js";

const routes = [ // 라우팅 테이블 <<< 이걸 객체로쓰면
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

    constructor(){
        window.onpopstate = () =>{
            const pathName = window.location.pathname;
            const route = routes.find(e =>{
                return e.path == pathName
            })
            this.render(route)
        }
        window.onload = () =>{ // 처음 불러 왔을때 reload load 새로고침 또는 처음 열었을때
            const pathName = window.location.pathname;
            const route = routes.find(e =>{
                return e.path == pathName
            })
            this.render(route)
        }
    }

    push(pathName){ // 주소 바뀜
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