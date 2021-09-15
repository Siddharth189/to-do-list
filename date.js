module.exports.fulldate = fulldate;

function fulldate(){
    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    }
    let d = new Date();
   
    let day = "" + d.toLocaleDateString("en-US",options);
    
    return day;
}

module.exports.weekday = weekday;

function weekday(){
    let options = {
        weekday: "long"

    }
    let d = new Date();
   
    let day = "" + d.toLocaleDateString("en-US",options);
    
    return day;
}