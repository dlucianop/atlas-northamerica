import { getData } from './api.js';
import { renderCountryMenu, renderData } from './ui.js';

async function loadCountries() {
    const urlBase = 'https://api.restcountries.com/countries/v5?subregion=North+America&response_fields=names.common,names.official';
    const northamerica = await getData(urlBase);
    renderCountryMenu(northamerica, loadCountryData);
}

async function loadCountryData(country) {
    const englishName = country.names.official;
    const urlBase = `https://api.restcountries.com/countries/v5?names.official=${englishName}&subregion=North+America`;
    const countryData = await getData(urlBase);
    renderData(countryData);
}

loadCountries();