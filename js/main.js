import { pedirPaises } from './api.js';
import { renderizarMenuPaises, renderizarData } from './ui.js';

async function cargarPaises() {
    const urlBase = 'https://api.restcountries.com/countries/v5?subregion=North+America&response_fields=names.common,names.official,names.translations.spa.common';
    const northamerica = await pedirPaises(urlBase);
    renderizarMenuPaises(northamerica, cargarDataPais);
}

async function cargarDataPais(pais) {
    const nombreIngles = pais.names.official;
    const urlBase = `https://api.restcountries.com/countries/v5?names.official=${nombreIngles}&subregion=North+America`;
    const paisData = await pedirPaises(urlBase);
    renderizarData(paisData);
}

cargarPaises();