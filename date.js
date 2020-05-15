module.exports = getDate();

function getDate(){
    var d = new Date();
    var n = d.getDay();
    var day;
    if(n === 1)
    day = "Mon"
    if(n === 2)
    day = "Tues"
    if(n === 3)
    day = "Wednes"
    if(n === 4)
    day = "Thurs"
    if(n === 5)
    day = "Fri"
    if(n === 6)
    day = "Satur"
    if(n === 0)
    day = "Sun"
    day = day + "day";
    return day;
}
