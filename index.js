// Define saturdayFun as a function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Define mondayWork as a function expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;  // Use backticks for template literals
};

// Define wrapAdjective as a function
function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`; // Capitalized "You" and use backticks
    };
}

// Export the functions for use in tests
module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective,
};
