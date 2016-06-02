var bubble_map = new Datamap({
    element: document.getElementById("map"),
    geographyConfig: {
        popupOnHover: false,
        highlightOnHover: false
    },
    fills: {
        defaultFill: '#ABDDA4',
        USA: 'yellow',
        ASIA: 'red',
        SAO: '#666633',
        AFRICA: '#ccff66',
        EUROPE: 'green'
    }
});
bubble_map.bubbles([
    {
        name: 'South America',
        radius: 25,
        centered: 'BRA',
        country: 'USA',
        yeild: 0,
        fillKey: 'SAO',
        date: '1954-03-01'

    },{
        name: 'Europe',
        radius: 50,
        yeild: 15000,
        country: 'USA',
        significance: 'First dry fusion fuel "staged" thermonuclear weapon; a serious nuclear fallout accident occurred',
        fillKey: 'EUROPE',
        date: '1954-03-01',
        latitude: 50,
        longitude: 10
    },{
        name: 'USA',
        radius: 70,
        yeild: 50000,
        country: 'USSR',
        fillKey: 'USA',
        significance: 'Largest thermonuclear weapon ever tested—scaled down from its initial 100 Mt design by 50%',
        date: '1961-10-31',
        latitude: 36,
        longitude: -97
    },{
        name: 'Africa',
        radius: 21,
        yeild: 5000,
        country: 'USSR',
        fillKey: 'AFRICA',
        significance: 'Largest thermonuclear weapon ever tested—scaled down from its initial 100 Mt design by 50%',
        date: '1961-10-31',
        latitude: 2,
        longitude: 13
    },{
        name: 'Asia',
        radius: 30,
        yeild: 50000,
        img: "asia.png",
        country: 'USSR',
        fillKey: 'ASIA',
        significance: 'Largest thermonuclear weapon ever tested—scaled down from its initial 100 Mt design by 50%',
        date: '1961-10-31',
        latitude: 30.2,
        longitude: 100
    },{
        name: 'Australia',
        radius: 20,
        yeild: 5000,
        country: 'USSR',
        fillKey: 'SAO',
        significance: 'Largest thermonuclear weapon ever tested—scaled down from its initial 100 Mt design by 50%',
        date: '1961-10-31',
        latitude: -21,
        longitude: 140.21
    }
], {
    popupTemplate: function(geo, data) {
        if (data.name == "Asia") {
            return '<img id=asia src=img/asia.png>';
        }
        else if (data.name == "Africa"){
            return '<img id=asia src=img/af.png>';
        }
        else if (data.name == "Australia"){
            return '<img id=asia src=img/aus.png>';
        }
        else if (data.name == "USA"){
            return '<img id=asia src=img/usa.png>';
        }
        else if (data.name == "Europe"){
            return '<img id=asia src=img/eu.png>';
        }
        else if (data.name == "South America"){
            return '<img id=asia src=img/south.png>';
        }
    }

});