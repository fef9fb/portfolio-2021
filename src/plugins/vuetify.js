import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                background: 'rgb(234, 218, 206)',
                primary: '#00bcd4',
                secondary: '#607d8b',
                accent: '#ffeb3b',
                error: '#f44336',
                warning: '#ff5722',
                info: '#009688',
                success: '#8bc34a',
            }
        }
    }
});
