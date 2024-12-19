const axios = require("axios");
const { ModelToken } = require('../../config.json');

const modelName = "facebook/blenderbot-400M-distill";

async function generateChats(userMessage){
    try{
        const response = await axios.post(
            `https://api-inference.huggingface.co/models/${modelName}`,
            {inputs : userMessage},
            {
                headers:{
                    Authorization:`Bearer ${ModelToken}`, //your api key guys💀
                    'Content-Type': 'application/json',
                }
            }
        )

        if (response.status !== 200){
            throw new Error(`API error ${response.statusText}`);
        }

        const data = response.data;
        return data[0]?.generated_text || 'I think , I misunderstood.';
    } catch (e){
        console.error("some error occur" , e.message);
        return "Some error occur, try after sometime";
    }
}

module.exports = {generateChats};