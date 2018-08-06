import About from '@/views/About.vue'
import TodayProvider from "../../src/views/today_provider";

describe('About.vue', function () {
    it('should return false when today is not birthday', function () {
        TodayProvider.getToday = () => (new Date(2018, 4, 20))

        expect(About.computed.isBirthday()).toEqual(false);
    });

    it('should return true when today is birthday', function () {
        TodayProvider.getToday = () => (new Date(2018, 3, 9));

        expect(About.computed.isBirthday()).toEqual(true);
    });

});
