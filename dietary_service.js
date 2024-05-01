let userType = "Subscriber";
let userMessage;

// if (userType === "Employee") {
//     userMessage = "Dear Employee, You are authorized to access Dietary Services";
// } else if (userType = "Enrolled Member") {
//     userMessage = "Dear Member, You are authorized to access Dietary Services and one-on-one interaction.";
// } else if (userType = "Subscriber") {
//     userMessage = "Dear Subscriber, You are authorized to partial Dietary Services";
// } else {
//     userMessage = "Dear User, You are not authorized to access Dietary Services";
// }

// console.log("User Message:", userMessage);

switch (userType) {
    case "Employee":
        userMessage = "Dear Employee, You are authorized to access Dietary Services";
        break;
    case "Enrolled Member":
        userMessage = "Dear Member, You are authorized to access Dietary Services and one-on-one interaction.";
            break;
    case "Subscriber":
        userMessage = "Dear Subscriber, You are authorized to partial Dietary Services";
        break;

    default:
        userMessage = "Dear User, You are not authorized to access Dietary Services";
}

console.log("User Message:", userMessage);
