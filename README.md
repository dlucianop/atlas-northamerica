# Atlas Northamerica 🌎

Dashboard web interactivo para la visualización y análisis en tiempo real de datos demográficos y geográficos de los países de Norteamérica.

## 📋 Descripción

**Atlas Northamerica** es una aplicación de una sola página (*Single Page Application*) que permite consultar información detallada de los países que conforman la subregión de Norteamérica. Al seleccionar un país desde el menú superior, la aplicación realiza una nueva petición a la API para garantizar que los datos mostrados estén siempre actualizados, y renderiza dinámicamente toda la información en pantalla.

## ✨ Características

- **Menú de navegación** con el nombre de cada país de la subregión, ubicado en la parte superior de la página.
- **Datos generales del país**:
  - Nombre y nombre oficial
  - Capital
  - Población total (formato abreviado y formato completo)
  - Superficie (formato abreviado y formato completo)
  - Densidad poblacional (calculada a partir de la relación habitantes/km²)
  - Moneda nacional
  - Sistema de medición
  - Escala de temperatura utilizada
- **Mapa interactivo** que muestra la ubicación (latitud y longitud) de la capital del país seleccionado.
- **Paleta de colores de la bandera**, representada en una gráfica de pastel.
- **Evolución del índice de Gini**, representada en una gráfica de líneas.
- **Descripción de la bandera** del país.
- Actualización de datos en tiempo real: cada cambio de país dispara una nueva petición a la API.

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| [REST Countries API](https://restcountries.com/) | Obtención de datos demográficos y geográficos de los países |
| [Bootstrap](https://getbootstrap.com/) | Estilos y diseño responsivo de la interfaz |
| [Leaflet](https://leafletjs.com/) | Renderizado del mapa interactivo con la ubicación de las capitales |
| [Chart.js](https://www.chartjs.org/) | Gráficas de pastel (paleta de bandera) y de líneas (evolución de Gini) |

## 🗺️ Alcance

El proyecto se centra en los países de la subregión de **Norteamérica**, con el objetivo de mantener el alcance de datos simple, rápido y conciso.

## 🚀 Uso

1. Clona este repositorio.
2. Crea una cuenta en [RestCountries](https://restcountries.com/) y genera tu propia API key.
3. Crea un archivo `config.js` en la raíz del proyecto y pega ahí tu API key. Puedes guiarte con el archivo `config.example.js` incluido en el repositorio para ver el formato que debe tener.
4. Abre el proyecto en tu navegador (con GoLive de preferencia).
5. Selecciona un país desde el menú superior.
6. Explora sus datos generales, su ubicación en el mapa, la paleta de colores de su bandera y la evolución de su índice de Gini.

## 📌 Notas

Cada vez que se selecciona un país distinto, la aplicación realiza una nueva petición a la API en lugar de reutilizar datos previamente cargados, con el fin de asegurar que la información mostrada esté siempre actualizada.