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
    };

    for (const [id, valor] of Object.entries(campos)) {
        const el = document.getElementById(id);
        if (el) el.textContent = valor;
    }
}

export { renderizarMenuPaises, renderizarData };