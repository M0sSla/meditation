window.map = null;

main();
async function main() {
    await ymaps3.ready;
    const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapMarker,
        YMapControls,
        YMapDefaultFeaturesLayer
    } = ymaps3;

    const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
    const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

    map = new YMap(document.getElementById('map'), {location: LOCATION});

    map.addChild(scheme = new YMapDefaultSchemeLayer());
    map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));
    map.addChild(new YMapDefaultFeaturesLayer({id: 'features'}));

    POINTS.forEach((point) => {
        if (point.element) {
            map.addChild(new YMapMarker(point, point.element(point)));
        } else {
            map.addChild(new YMapDefaultMarker(point));
        }
    });

    const marker = new YMapDefaultMarker(INC_POINT);
    map.addChild(marker);

    const marker2 = new YMapDefaultMarker(INC2_POINT);
    map.addChild(marker2);

    let inc = 0;
    const updateTitle = () => {
        inc++;
        marker.update({
            title: 'Marker inc #' + inc
        });
    };

    updateTitle();
    setInterval(updateTitle, 1000);

    setTimeout(() => {
        marker2.update({
            title: 'Marker 2',
            subtitle: 'Marker 2'
        });
    }, 1000);
}



const LOCATION = {center: [37.64, 55.76], zoom: 9};



const POINTS = [
    {coordinates: [36.944258, 55.976121]},

];

function diagram(props) {
    const div = document.createElement('div');

    const diagram = document.createElement('div');

    diagram.className = 'pie-marker';
    diagram.style.color = props.color;

    const gradient = [];
    let previous = 0;
    for (let i = 0; i < props.colors.length; i += 1) {
        const p = props.colors[i];
        const deg = (360 / 100) * p.percentage;
        gradient.push(`${p.color} ${previous}deg ${previous + deg}deg`);
        previous = previous + deg;
    }

    diagram.style.background = 'conic-gradient(' + gradient.join(', ') + ')';

    const title = document.createElement('div');
    title.innerHTML = props.title;
    title.className = 'pie-marker-title';

    div.appendChild(diagram);
    div.appendChild(title);

    return div;
}

function circle(props) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.color = props.color;
    props.radius && circle.style.setProperty('--radius', props.radius);
    props.icon && circle.style.setProperty('--icon', props.icon);
    circle.title = props.title;
    return circle;
}

function icon(props) {
    const circle = document.createElement('div');
    circle.classList.add('icon');
    circle.style.color = props.color;
    circle.style.backgroundImage = `url(${props.icon})`;
    circle.style.setProperty('--size', props.size);

    if (props.title) {
        const title = document.createElement('div');
        title.innerHTML = props.title;
        title.className = 'icon-title';
        circle.appendChild(title);
    }

    return circle;
}
