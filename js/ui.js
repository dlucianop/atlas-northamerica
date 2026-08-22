function renderizarMenuPaises(paises) {
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

        li.appendChild(btn);
        listaUl.appendChild(li);
    });
}

export { renderizarMenuPaises };