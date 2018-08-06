import About from '@/views/About.vue'

describe('About.vue', function () {
    it('should return false when today is not birthday', function () {
        expect(About.computed.isBirthday()).toEqual(false);
    });
});
