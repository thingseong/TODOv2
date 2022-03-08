import Component from "../../core/Component.js";

export default class Calendar extends Component{
    setup(){
        this.$state={
            date : new Date()
        }
    }
    template(){
        let day = 0;

        return `
            <div id='calendar'>
                <div class="month">
                    <ul>
                        <li class="prev">&#10094;</li>
                        <li class="next">&#10095;</li>
                        <li>${this.$state.date.getFullYear()}
                        ${this.$state.date.getMonth()}</li>
                    </ul>
                </div>
                <ul class="weekdays">
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                </ul>
                <ul class="days"> 
                    ${this.blankDay()}${this.getDays()}
                </ul>
        `;
    }
    getFirstDay(){
        const toDate = this.$state.date.getDate();
        const toDay = this.$state.date.getDay();
        const firstDay = toDay - (toDate - 1) > 0 ? toDay - (toDate - 1) : toDay - (toDate - 1) + 7;
        return firstDay;
    }
    blankDay(){
        const firstDay = this.getFirstDay()
        let blank_li = "";
        let day;
        for(day = 0; day < firstDay; day++){
            blank_li = blank_li + `<li></li>\n`
        }

        return blank_li
    }
    getDays(){ // 윤년 해결 해줘야함
        const thirty = [4, 6, 8, 9, 11];
        const thirty_one = [1, 3, 5, 7, 8, 10, 12];
        const Feb = [2];
        const firstDay = this.getFirstDay();
        const month = this.$state.date.getMonth() + 1;
        const year = this.$state.date.getFullYear();
        const today = this.$state.date.getDate();
        console.log(month);
        let days = "";
        let i;
        let lastday;

        for (i = 0; i < 28; i++){
            if (i+1 == today){
                days = days + `<li><span class="active">${i+1}</span></li>\n`;
                continue;
            }
            days = days + `<li>${i+1}</li>\n`
        }

        if (thirty.find(e => e == month)){
            lastday = 30;
        }
        else if (thirty_one.find(e => e == month)){
            lastday = 31;
        }
        else if (month == 2){
            if (year % 100 != 0 && year % 4 == 0){
                lastday = 29;
            }
            if(year % 100 == 0 && year % 400 != 0){
                lastday = 28;
            }
            if(year % 400 == 0){
                lastday = 29;
            }
        }

        console.log(lastday);

        for (i = 28; i < lastday; i++){
            days = days + `<li>${i+1}</li>\n`
        }
        //<li><span class="active">10</span></li>
        return days;
    }


}