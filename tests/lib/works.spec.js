const works = require('../../src/lib/works');

describe('works', () => {
    it('should return an element', () => {
        expect(works()).toBeDefined();
    });
});