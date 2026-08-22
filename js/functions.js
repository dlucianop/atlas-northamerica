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

let pieChartInstance = null;
function renderFlagPieChart(canvasId, colorsPalette){
    const canvasElement = document.getElementById(canvasId);
    if (!canvasElement) {
        console.warn(`No se encontró el canvas con ID: ${canvasId}`);
        return;
    }

    const ctx = canvasElement.getContext('2d');
    if (pieChartInstance) {
        pieChartInstance.destroy();
    }
    const labels = colorsPalette.map(item => item.hex);
    const dataValues = colorsPalette.map(item => item.proportion);
    const backgroundColors = colorsPalette.map(item => item.hex);

    pieChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
        labels: labels,
        datasets: [{
            data: dataValues,
            backgroundColor: backgroundColors,
            borderWidth: 2,
            borderColor: '#ffffff'
        }]
        },
        options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
            position: 'bottom'
            },
            tooltip: {
            callbacks: {
                label: (context) => ` ${(context.raw * 100).toFixed(2)}%`
            }
            }
        }
        }
    });
}

let lineChartInstance = null;
function renderGiniLineChart(canvasId, giniData) {
    const canvasElement = document.getElementById(canvasId);

    if (!canvasElement) {
        console.warn(`No se encontró el canvas con ID: ${canvasId}`);
        return;
    }

    const ctx = canvasElement.getContext('2d');
    if (lineChartInstance) {
        lineChartInstance.destroy();
    }

    const years = Object.keys(giniData);
    const values = Object.values(giniData);

    lineChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
        labels: years,
        datasets: [{
            label: 'Índice de Gini',
            data: values,
            borderColor: '#0d6efd',
            backgroundColor: 'rgba(13, 110, 253, 0.12)',
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: '#0d6efd',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointHoverRadius: 8,
            tension: 0.3,
            fill: true
        }]
        },
        options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
            beginAtZero: false,
            title: {
                display: true,
                text: 'Nivel de Desigualdad'
            }
            },
            x: {
            title: {
                display: true,
                text: 'Año'
            }
            }
        },
        plugins: {
            legend: {
            display: false
            }
        }
        }
    });
}

export { formatCompactNumber, formatFullNumber, densityCalculation, renderCountryMap, renderFlagPieChart, renderGiniLineChart }