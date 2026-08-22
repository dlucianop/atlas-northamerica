import { 
    formatCompactNumber, 
    formatFullNumber, 
    densityCalculation,
    renderCountryMap, 
    renderFlagPieChart, 
    renderGiniLineChart
} from './functions.js';

function renderCountryMenu(countries, onCountryClick) {
    const listUl = document.getElementById('countries-list');
    if (!listUl) return;

    listUl.innerHTML = '';

    countries.forEach(function (country) {
        const commonName = country.names.common;

        const li = document.createElement('li');
        li.className = 'nav-item';

        const btn = document.createElement('button');
        btn.className = 'btn-country btn btn-light nav-link';
        btn.textContent = commonName;
        btn.addEventListener('click', () => onCountryClick(country));

        li.appendChild(btn);
        listUl.appendChild(li);
    });
}

function renderData(countryData) {
    const country = countryData[0];
    if (!country) return;

    const campos = {
        'country-name': country.names?.common || 'N/A',
        'official-name': country.names?.official || 'N/A',
        'capital': 'Capital: ' + (country.capitals?.[0]?.name || 'N/A'),
        'populationH': formatCompactNumber(country.population) || 0,
        'populationS': `(${formatFullNumber(country.population)} inhabitants)` || 0, 
        'areaH': formatCompactNumber(country.area?.kilometers) || 0,
        'areaS': `${formatFullNumber(country.area?.kilometers)} kilometers` || 0, 
        'density': densityCalculation(country.population, country.area?.kilometers) || 0,
        'currency': `${country.currencies[0]?.code} (${country.currencies[0]?.name})` || 'N/A',
        'measurement-system': country.units?.measurement_system || 'N/A',
        'temperature-scale': country.units?.temperature_scale || 'N/A',
        'coords-text': `Lat: ${country.capitals[0]?.coordinates?.lat} | Lng: ${country.capitals[0]?.coordinates?.lng}` || `Lat: ${0} | Lng: ${0}`,
        'des-flag': country.flag?.description || 'N/A',
        'btn-google-maps': `View ${country.names?.common} on Google Maps` || 'View on Google Maps',
    };

    for (const [id, value] of Object.entries(campos)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    renderCountryMap(country.capitals[0]?.coordinates?.lat, country.capitals[0]?.coordinates?.lng, country.capitals?.[0]?.name, country.links?.google_maps);
    renderFlagPieChart('flagPieChart', country.flag?.colors?.palette);
    renderGiniLineChart('giniLineChart', country.economy?.gini_coefficient);
}

export { renderCountryMenu, renderData };