import { 
    formatCompactNumber, 
    formatFullNumber, 
    densityCalculation,
    renderCountryMap, 
    renderFlagPieChart, 
    renderGiniLineChart
} from './functions.js';

function renderizarMenuPaises(paises, onPaisClick) {
    const listaUl = document.getElementById('lista-paises');
    if (!listaUl) return;

    listaUl.innerHTML = '';

    paises.forEach(function (pais) {
        const nombreComun = pais.names.translations.spa.common;

        const li = document.createElement('li');
        li.className = 'nav-item';

        const btn = document.createElement('button');
        btn.className = 'btn-country btn btn-light nav-link';
        btn.textContent = nombreComun;
        btn.addEventListener('click', () => onPaisClick(pais));

        li.appendChild(btn);
        listaUl.appendChild(li);
    });
}

function renderizarData(paisData) {
    const pais = paisData[0];
    if (!pais) return;

    const campos = {
        'nombre-pais': pais.names?.translations?.spa?.common || 'Sin nombre',
        'nombre-oficial': pais.names?.translations?.spa?.official || 'Sin nombre oficial',
        'capital': 'Capital: ' + (pais.capitals?.[0]?.name ?? 'Sin capital'),
        'poblacionH': formatCompactNumber(pais.population) ?? 0,
        'poblacionS': `(${formatFullNumber(pais.population)} hab.)` ?? 0, 
        'areaH': formatCompactNumber(pais.area?.kilometers) ?? 0,
        'areaS': `${formatFullNumber(pais.area?.kilometers)} km²` ?? 0, 
        'densityH': densityCalculation(pais.population, pais.area?.kilometers) ?? 0,
        'monedaH': `${pais.currencies[0]?.code} (${pais.currencies[0]?.name})` ?? 'N/A',
        'medicionH': pais.units?.measurement_system ?? 'N/A',
        'temperaturaH': pais.units?.temperature_scale ?? 'N/A',
        'coords-text': `Lat: ${pais.capitals[0]?.coordinates?.lat} | Lng: ${pais.capitals[0]?.coordinates?.lng}`?? `Lat: ** | Lng: **`,
        'des-flag': pais.flag?.description ?? 'N/A',
    };

    for (const [id, valor] of Object.entries(campos)) {
        const el = document.getElementById(id);
        if (el) el.textContent = valor;
    }

    renderCountryMap(pais.capitals[0]?.coordinates?.lat, pais.capitals[0]?.coordinates?.lng, pais.capitals?.[0]?.name, pais.links?.google_maps);
    renderFlagPieChart('flagPieChart', pais.flag.colors.palette);
    renderGiniLineChart('giniLineChart', pais.economy.gini_coefficient);
}

export { renderizarMenuPaises, renderizarData };