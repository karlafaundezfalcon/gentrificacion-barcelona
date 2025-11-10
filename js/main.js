mapboxgl.accessToken = 'pk.eyJ1Ijoia2FybGE4NyIsImEiOiJjbWhveWRkanMwMG8zMnNyNG1xNTQ2a2oxIn0.gjhYrxXfYOs8hI0apkt8vQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/karla87/cmhdcbgsy002x01r200s95y9w', 
    center: [2.1734, 41.3851],
    zoom: 11,
    projection: 'mercator',
    scrollZoom: false,
    dragPan: false
});

const chapters = {
    '1': { center: [2.1734, 41.3851], zoom: 11, bearing: 0, pitch: 0 },
    '2': { center: [2.1696, 41.3949], zoom: 13.5, bearing: 0, pitch: 20 },
    '3': { center: [2.1783, 41.3802], zoom: 14, bearing: -10, pitch: 30 },
    '4': { center: [2.1548, 41.3996], zoom: 14, bearing: 15, pitch: 25 },
    '5': { center: [2.2030, 41.4000], zoom: 13.5, bearing: 5, pitch: 15 },
    '6': { center: [2.1734, 41.3851], zoom: 11, bearing: 0, pitch: 0 }
};

let popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: true
});

map.on('load', () => {
    const LAYER_ID_INTERACT = 'ig-barcelona'; 

    map.on('click', LAYER_ID_INTERACT, (e) => {
        if (!e.features.length) return;

        const properties = e.features[0].properties;
        const coordinates = e.lngLat;
        const igValue = (properties.IG * 100).toFixed(2);

        const htmlContent = `
            <div>
                <p><strong>${properties.NOM} - Barcelona</strong></p>
                <hr style="margin: 5px 0;">
                <p>Índice de Gentrificación:</p>
                <p><strong>${igValue}%</strong></p>
            </div>
        `;

        popup.setLngLat(coordinates).setHTML(htmlContent).addTo(map);
    });

    map.on('mouseenter', LAYER_ID_INTERACT, () => map.getCanvas().style.cursor = 'pointer');
    map.on('mouseleave', LAYER_ID_INTERACT, () => map.getCanvas().style.cursor = '');

    const scroller = scrollama();

    function handleStepEnter(response) {
        const chapterID = response.element.dataset.chapter;
        const chapter = chapters[chapterID];

        map.flyTo({ ...chapter, duration: 1800, essential: true });

        document.querySelectorAll('.step').forEach(el => el.classList.remove('is-active'));
        response.element.classList.add('is-active');

        // Lógica del video/botón
        const videoContainer = document.getElementById('tiktok-embed-container');
        const videoButton = document.getElementById('show-video-btn');

        if (chapterID === '1') {
             if (videoContainer.style.display !== 'block') {
                videoContainer.style.display = 'none';
                videoButton.style.display = 'inline-block';
             }
        } else {
            videoContainer.style.display = 'none';
            videoButton.style.display = 'inline-block';
        }
    }

    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            scrollContainer: '#story-scroll-container'
        })
        .onStepEnter(handleStepEnter);

    map.flyTo(chapters['1']);
});

document.addEventListener('DOMContentLoaded', () => {
    const videoButton = document.getElementById('show-video-btn');
    const videoContainer = document.getElementById('tiktok-embed-container');
    if (videoButton && videoContainer) {
        videoButton.addEventListener('click', () => {
            videoContainer.style.display = 'block';
            videoButton.style.display = 'none';
        });
    }
});

let scroller;
map.on('load', () => {
    scroller = scrollama(); 
});

window.addEventListener('resize', () => {
    if (typeof scroller !== 'undefined') scroller.resize();
});