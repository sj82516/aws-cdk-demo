import axios from 'axios';

export async function handler(event: any, context: any, callback: Function){
    console.log(event, context, process.env);

    const startAt = new Date().getTime();
    await axios.get("https://www.president.gov.tw/");
    const endAt = new Date().getTime() - startAt;

    const region = process.env.REGION;

    await axios.post("你的slack webhook", {
        text: `api called from ${region}, take ${endAt} ms to get page response.`
    })

    callback();
}