import { API_TOKEN } from './config.js';

async function getData(url) {
    try {
        const response = await fetch(url, {
            headers: { 'Authorization': API_TOKEN }
        });
        const data = await response.json();
        return data.data.objects;
    } catch (error) {
        console.error('Error querying the API:', error);
    }
}

export { getData };