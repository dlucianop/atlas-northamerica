import { API_TOKEN } from './config.js';

async function pedirPaises(url) {
    try {
        const response = await fetch(url, {
            headers: { 'Authorization': API_TOKEN }
        });
        const data = await response.json();
        return data.data.objects;
    } catch (error) {
        console.error('Error al consultar la API:', error);
    }
}

export { pedirPaises };