import axios from 'axios';

async function getData() {

    const data = {
        origin: {
            x: 127.11015314141542,
            y: 37.39472714688412
        },
        //MAX 30
        destinations: [
            {
                key: '판교역',
                x: 127.111202,
                y: 37.394912
            }
        ],
        radius: '10000',
        priority: 'TIME',
        car_fuel: 'GASOLINE', //default
        car_hipass: false, //default
        alternatives: false, //default
        road_details: false //default
    };

    const config = {
        headers: {
            Authorization: "KakaoAK a4f33682f0407305681d899ed7da146d"
        }
    }

    try {
        const response = await axios.post('https://apis-navi.kakaomobility.com/v1/destinations/directions', data, config);
        console.log(JSON.stringify(response.data.routes, null, 2));
    } catch (error) {
        console.error(error);
    }
}

await getData();