var bubble_map = new Datamap({
    element: document.getElementById("map"),
    geographyConfig: {
        popupOnHover: false,
        highlightOnHover: false
    },
    fills: {
        defaultFill: '#ABDDA4',
        RES: 'red',
        RES2: 'yellow'
    }
});

bubble_map.bubbles([
    {
        name: 'Maison De Tet Decor',
        city: 'Hanoi',
        price: '$',
        radius: 20,
        fillKey: 'RES',
        latitude: 21,
        longitude: 105
    },{
        name: 'Vila Das Rosas',
        city: 'Sao Paulo',
        price: '$',
        radius: 6,
        fillKey: 'RES',
        latitude: -23,
        longitude: -46
    },{
        name: 'Shaya',
        city: 'New Orleans',
        price: '$$$',
        radius: 6,
        fillKey: 'RES',
        latitude: 30,
        longitude: -90
    },{
        name: 'Il Panino',
        city: 'Bologna',
        price: '$',
        radius: 6,
        fillKey: 'RES',
        latitude: 44,
        longitude: 11
    },{
        name: 'Arch Bistro',
        city: 'Istanbul',
        price: '$$',
        radius: 10,
        fillKey: 'RES',
        latitude: 41,
        longitude: 28
    },{
        name: 'Marrakech Henna Art Cafe',
        city: 'Marrakesh',
        price: '$',
        radius: 5,
        fillKey: 'RES',
        latitude: 31,
        longitude: -8
    },{
        name: 'Cafe Loren',
        city: 'London',
        price: '$',
        radius: 8,
        fillKey: 'RES',
        latitude: 51,
        longitude: 0
    },{
        name: 'Haveli',
        city: 'Berlin',
        price: '$$',
        radius: 6,
        fillKey: 'RES',
        latitude: 52,
        longitude: 13
    },{
        name: 'Zaozishu Vegetarian Restaurant',
        city: 'Chengdu',
        price: '$$',
        radius: 6,
        fillKey: 'RES',
        latitude: 30,
        longitude: 103
    },{
        name: 'Lemonade',
        city: 'Los Angeles',
        price: '$',
        radius: 6,
        fillKey: 'RES',
        latitude: 34,
        longitude: -118
    },{
        name: 'Chalk Point Kitchen',
        city: 'New York',
        price: '$$',
        radius: 6,
        fillKey: 'RES',
        latitude: 40,
        longitude: -74
    },{
        name: 'Ts TanTan Tokyostation',
        city: 'Tokyo',
        price: '$',
        radius: 14,
        fillKey: 'RES',
        latitude: 35,
        longitude: 139
    },{
        name: 'Kalaset',
        city: 'Copenhagen',
        price: '$$',
        radius: 6,
        fillKey: 'RES',
        latitude: 55,
        longitude: 12
    },{
        name: 'Copasetic Barcelona',
        city: 'Barcelona',
        price: '$$',
        radius: 18,
        fillKey: 'RES',
        latitude: 41,
        longitude: 2
    },{
        name: 'Merge',
        city: 'Buffalo',
        price: '$$',
        radius: 6,
        fillKey: 'RES',
        latitude: 42,
        longitude: -78
    },{
        name: 'Ananda Vegetarian Restaurant',
        city: 'Teheran',
        price: '$$',
        radius: 6,
        fillKey: 'RES',
        latitude: 35,
        longitude: 51
    },{
        name: 'Komala Villas Restaurant',
        city: 'Singapore',
        price: '$',
        radius: 12,
        fillKey: 'RES',
        latitude: 1,
        longitude: 103
    },{
        name: 'Saigon Pantheon',
        city: 'Paris',
        price: '$$',
        radius: 6,
        fillKey: 'RES',
        latitude: 48,
        longitude: 2
    },{
        name: 'Ajj 555',
        city: 'Lima',
        price: '$$',
        radius: 6,
        fillKey: 'RES',
        latitude: -12,
        longitude: -77
    },{
        name: 'May Kaidee Samsen',
        city: 'Bangkock',
        price: '$',
        radius: 6,
        fillKey: 'RES',
        latitude: 13,
        longitude: 100
    },{
        name: 'Cuenco',
        city: 'Mendoza',
        price: '$',
        radius: 6,
        fillKey: 'RES',
        latitude: -32,
        longitude: -68
    },{
        name: 'Ojo de Agua',
        city: 'Mexico City',
        price: '$$',
        radius: 6,
        fillKey: 'RES',
        latitude: 19,
        longitude: -99
    },{
        name: 'Teresa Carles',
        city: 'Lyon',
        price: '$$',
        radius: 6,
        fillKey: 'RES',
        latitude: 45,
        longitude: 4
    },{
        name: 'none',
        city: 'Mumbai',
        price: 'none',
        radius: 6,
        fillKey: 'RES2',
        latitude: 19,
        longitude: 72
    },{
        name: 'none',
        city: 'Pittsburgh',
        price: 'none',
        radius: 6,
        fillKey: 'RES2',
        latitude: 40,
        longitude: -80
    },{
        name: 'none',
        city: 'Fes',
        price: 'none',
        radius: 6,
        fillKey: 'RES2',
        latitude: 34,
        longitude: -5
    },{
        name: 'Malabar South Indian',
        city: 'Sydney',
        price: '$$',
        radius: 16,
        fillKey: 'RES',
        latitude: -33,
        longitude: 150
    }
], {
    popupTemplate: function(geo, data) {
        return '<div class="hoverinfo">Restaurant: ' + data.name + " --- City: " + data.city + " --- Price: " + data.price;
    }
});
