// Convert 12 hrs to 24 hrs.
// Given a time in 12 hrs format. Write a function which returns the same time in 24 hrs format.

function to24hrs(time12h) {
    const [time, meridian] = time12h.split(" ");
    if (meridian.toLowerCase() != "am" && meridian.toLowerCase() != "pm") {
        throw new Error("Invalid meridian. Accepts only 'am' or 'pm'");
    }

    let [hour, minute] = time.split(":");
    if (hour.length !== 2 || minute.length !== 2) {
        throw new Error("Invalid time format. Accepted format: 'dd:dd am||pm'");
    }

    if (hour === "12") hour = "00";

    if (meridian.toLowerCase() == "pm") {
        return `${+hour + 12}:${minute}`;
    } else {
        return `${hour}:${minute}`;
    }
}

console.log(to24hrs("04:02 PM"));
console.log(to24hrs("10:30 AM"));
console.log(to24hrs("12:25 AM"));
console.log(to24hrs("12:25 PM"));