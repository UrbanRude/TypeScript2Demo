Date.prototype.addDaysToCurrentDay = function (days) {
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};
Date.prototype.format = function () {
    let dat = new Date(this.valueOf());
    let fecha;
    fecha = `${dat.getDate()}/${dat.getMonth() + 1}/${dat.getFullYear()}`;
    return fecha;
};
window.onload = function () {
    var currentDay = new Date();
    console.log(currentDay.addDaysToCurrentDay(4).format());
};
