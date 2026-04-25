const repeatString = function (stringToRepeat, numberOfRepeats) {
    let endString = "";

    if (numberOfRepeats < 0) return "ERROR";

    for (let i = 0; i < numberOfRepeats; i++) {
        endString += stringToRepeat;
    }

    return endString;
};

// Do not edit below this line
module.exports = repeatString;
