# Atlas Northamerica 🌎

Interactive web dashboard for real-time visualization and analysis of demographic and geographic data of North American countries.

## 📋 Description

**Atlas Northamerica** is a Single Page Application that lets you look up detailed information about the countries that make up the North America subregion. When a country is selected from the top menu, the application makes a new API request to guarantee that the data shown is always up to date, and dynamically renders all the information on screen.

## ✨ Features

- **Navigation menu** with the name of each country in the subregion, located at the top of the page.
- **General country data**:
  - Name and official name
  - Capital
  - Total population (compact and full format)
  - Area (compact and full format)
  - Population density (calculated from the inhabitants/km² ratio)
  - National currency
  - Measurement system
  - Temperature scale used
- **Interactive map** showing the location (latitude and longitude) of the selected country's capital.
- **Flag color palette**, represented in a pie chart.
- **Gini index evolution**, represented in a line chart.
- **Flag description** of the country.
- Real-time data updates: every country change triggers a new API request.

## 🛠️ Technologies used

| Technology | Purpose |
|---|---|
| [REST Countries API](https://restcountries.com/) | Fetching demographic and geographic data for the countries |
| [Bootstrap](https://getbootstrap.com/) | Styling and responsive layout of the interface |
| [Leaflet](https://leafletjs.com/) | Rendering the interactive map with capital locations |
| [Chart.js](https://www.chartjs.org/) | Pie chart (flag palette) and line chart (Gini evolution) |

## 🗺️ Scope

The project focuses on the countries of the **North America** subregion, aiming to keep the data scope simple, fast, and concise.

## 🚀 Usage

1. Clone this repository.
2. Create an account on [RestCountries](https://restcountries.com/) and generate your own API key.
3. Create a `config.js` file in the root of the project and paste your API key there. You can use the included `config.example.js` file as a guide for the expected format.
4. Open the project in your browser (preferably with GoLive).
5. Select a country from the top menu.
6. Explore its general data, its location on the map, its flag color palette, and its Gini index evolution.

## 📌 Notes

Every time a different country is selected, the application makes a new API request instead of reusing previously loaded data, in order to ensure the information shown is always up to date.