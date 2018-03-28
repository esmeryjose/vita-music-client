export const IsEmpty = obj => {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
};

export const TimeParser = val => {
    let min = val.getMinutes();
    let hour = val.getHours();
    const dayOrNight = val.toLocaleTimeString().split(" ")[1];
    if (hour > 12) {
        hour = hour - 12;
    }
    if (min === 0) {
        min = "00";
    }
    const startingTime = `${hour}:${min} ${dayOrNight}`;
    return startingTime;
};
