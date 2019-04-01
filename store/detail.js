import axios from 'axios'

const SET_WEATHER = 'setWeather'

export const state = () => ({
    weather: {
        city: '',
        wendu: 0
    }
});

export const mutations = {
    [SET_WEATHER](state, {
        weatherCity,
        weatherWendu
    }) {
        state.weather = {
            city: weatherCity,
            wendu: weatherWendu
        }
    }
};

export const actions = {
    async setWeather({
        commit
    }, params) {
        try {
            let url = `https://www.apiopen.top/weatherApi?city=${params.city}`
            let result = await axios(url)

            let condition = result.data.data

            commit(SET_WEATHER, {
                weatherCity: condition.city,
                weatherWendu: condition.wendu
            })
        } catch (e) {
            // TODO with error
            console.log('error in setWeather');
            console.log(e);
        }
    }
};
