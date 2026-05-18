const notifications = [
    {
        Type: "Placement",
        Message: "TCS Hiring Drive"
    },
    {
        Type: "Result",
        Message: "Mid Sem Result Declared"
    },
    {
        Type: "Event",
        Message: "Hackathon Tomorrow"
    },
    {
        Type: "Placement",
        Message: "Infosys Recruitment"
    },
    {
        Type: "Event",
        Message: "Farewell Event"
    }
];

const priorityMap = {
    Placement: 3,
    Result: 2,
    Event: 1
};

notifications.sort((a, b) => {
    return priorityMap[b.Type] - priorityMap[a.Type];
});

console.log("\nTop Priority Notifications:\n");

notifications.forEach((item, index) => {

    console.log(
        `${index + 1}. ${item.Type} -> ${item.Message}`
    );

});