module.exports = getDate;

function getDate(){
    var date = new Date();
    var options = {
        weekday: "long",
        month: "short",
        day: "numeric"
    }
    var today = date.toLocaleDateString('en' , options);
    return today;
}

