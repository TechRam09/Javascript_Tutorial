/* syntax
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month= 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");//executed
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("enter valid month");
        break;
}

// if break is not used the statement after key is matched will also be executed 
//break is unconditional breaking it breaks trhe flow of execution
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        // break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("enter valid month");
        break;
}

const monthinString = "march"
switch (monthinString) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("febuary");
        break;
    case "march":
        console.log("March");
        break;

    default:
        break;
}