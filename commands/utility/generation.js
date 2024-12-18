const axios = require("axios");
const { config } = require('../../config.json');

const modelName = "PygmalionAI/pygmalion-6b";

async function generateChats(userMessage){
    try{
        const respones = await axios.post(
            `https://api-inference.huggingface.co/models/${modelName}`,
            {inputs : userMessage},
            {
                headers:{
                    Authorization:`Bearer ${config.ModelToken}`, //your api key guys💀
                    'Content-Type': 'application/json',
                }
            }
        )

        if (respones!== 200){
            throw new Error(`API error ${respones.statusText}`);
        }

        const data = respones.data;
        return data[0]?.generated_text || 'I think , I misunderstood.';
    } catch (e){
        console.error("some error occur" , e.message);
        return "Some error occur, try after sometime";
    }
}

module.exports = {generateChats};