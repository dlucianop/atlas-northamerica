function formatCompactNumber(number) {
    return new Intl.NumberFormat('es-MX', {
        notation: 'compact',
        maximumFractionDigits: 1
    }).format(number);
}

function formatFullNumber(number) {
    return new Intl.NumberFormat('es-MX').format(number);
}

function densityCalculation(population, area){
    if (area > 0) {
        const density = (population / area).toFixed(5);
        const densityFormatted = formatFullNumber(density);
        return densityFormatted;
    } else {
       return 'N/A';
    }
}

let mapInstance = null; 
function renderCountryMap(lat, lng, countryName, mapsUrl){
    if (!mapsUrl) return;

    document.getElementById('btn-google-maps').href = mapsUrl;
    if (mapInstance !== null) {
        mapInstance.remove();
    }

    if (!lat) return;
    if (!lng) return;
    if (!countryName) return;

    mapInstance = L.map('map').setView([lat, lng], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(mapInstance);

    L.marker([lat, lng])
        .addTo(mapInstance)
        .bindPopup(`<b>${countryName}</b>`)
        .openPopup();
}

export { formatCompactNumber, formatFullNumber, densityCalculation, renderCountryMap }