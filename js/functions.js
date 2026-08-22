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

export { formatCompactNumber, formatFullNumber, densityCalculation }