import axios from 'axios';

const apiKey = process.env.API_KEY;
const baseApi = "https://api.brewerydb.com/v2/search";

export function handler(event, context, callback) {
    axios.get(baseApi, {params: {key: apiKey, ...event.queryStringParameters}})
        .then(res => {
            callback(null, {
                statusCode: 200,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(res.data)
            });
        })
        .catch((error) => {
            callback(error)
        });
}