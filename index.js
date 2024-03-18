
// Your code here
// const { sayMessage } = require("./messages/say-message");
const { sayHelloTo } = require("./send-messages/say-hello-to");
const { giveMessageToMrsPotato } = require("./send-messages/give-message-to-mrs-potato");
const { helloMessage } = require("./messages/hello-message");

const msg1 = "Hi Buzz";
const msg2 = "You are looking very spudly today!";
const msg3 = "There's a good deal on mattresses tomorrow.";

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);