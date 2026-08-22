import { pedirPaises } from './api.js';
import { renderizarMenuPaises } from './ui.js';

async function cargarPaises() {
    const urlBase = 'https://api.restcountries.com/countries/v5?subregion=North+America&response_fields=names.common,names.official,names.translations.spa.common';
    const northamerica = await pedirPaises(urlBase);
    renderizarMenuPaises(northamerica);
}

cargarPaises();