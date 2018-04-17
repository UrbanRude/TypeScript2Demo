interface Date {
    addDaysToCurrentDay(days:number):Date;
    format():String;
}

Date.prototype.addDaysToCurrentDay = function(days:number):Date{
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate()+days);
    return dat;
}

Date.prototype.format = function():String{
    let dat = new Date(this.valueOf());
    //return dat.toDateString();
    return `${dat.getDate()}/${dat.getMonth()+1}/${dat.getFullYear()}`;
}

window.onload = function(){
    var currentDay = new Date();
    //console.log(currentDay.addDaysToCurrentDay(4));
    //console.log(currentDay.getDay().toString());
    console.log(currentDay.addDaysToCurrentDay(4)
                .format());
}