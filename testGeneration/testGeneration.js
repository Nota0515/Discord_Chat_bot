//This is just a file to test the api response (newbie)

const {generateChats} = require('../commands/utility/generation');

(async () => {
    try {
        const userInput = "I think am falling in love with you";
        const botResponse = await generateChats(userInput);
        console.log("Bot Response:", botResponse);
    } catch (error) {
        console.error("Test Error:", error.message);
    }
})();