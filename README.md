# 🏘️ Scrollytelling: El Mapa de la Gentrificación en Barcelona

Un proyecto de visualización de datos interactivo que utiliza Mapbox GL JS y Scrollama para narrar el impacto de la gentrificación en los barrios de Barcelona, analizando casos clave como el Eixample, El Gòtic, La Vila de Gràcia y El Poblenou.

## 📁 Estructura del Proyecto

* `index.html`: La página principal del scrollytelling.
* `css/style.css`: Hojas de estilo para el diseño y la responsividad.
* `js/main.js`: Lógica de la aplicación, controlando el mapa (Mapbox) y la interacción de scroll (Scrollama).
* `data/barris.geojson`: **Datos geográficos** de los límites de los barrios de Barcelona, que incluyen una propiedad de Índice de Gentrificación (IG) para la visualización en el mapa.

## 🛠️ Tecnologías Utilizadas

* **Mapbox GL JS v3.4.0**: Motor principal para la renderización del mapa.
* **Scrollama**: Librería para el *scrollytelling* (activar eventos en el mapa al hacer scroll).
* **HTML, CSS (Media Queries) y JavaScript.**

## 🗺️ Visualización de Datos

El mapa utiliza una escala de colores para representar el **Índice de Gentrificación (IG)** de cada barrio.
* **Colores Claros:** Baja gentrificación.
* **Colores Rojos Intensos (#CD1818):** Alta gentrificación.

## 🚀 Cómo Poner en Marcha

1.  Asegúrate de tener todos los archivos en sus carpetas correctas.
2.  Abre `index.html` en un navegador web (Chrome, Firefox, etc.).
3.  **Importante:** La visualización requiere un **Token de Acceso de Mapbox** válido. Reemplaza el token en `js/main.js` con el tuyo propio si el mapa no carga.
