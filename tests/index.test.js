const puppeteer = require('puppeteer');
const packageJson = require('../package.json');

describe('First landing page', () => {
    let browser, page, body, itWorks;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            // --no-sandbox option required to run test on Travis-CI
            // If you don't need it, this can be removed
            args: ['--no-sandbox']
        });
        page = await browser.newPage();
        await page.goto('http://localhost:1234');
        itWorks = await page.evaluate(() => document.querySelector('.it-works').innerText);
    });
    
    it('should display package name and version', () => {
        expect(itWorks).toMatch(packageJson.name);
        expect(itWorks).toMatch(packageJson.version);
    });

    it('should display "works"', () => {
        expect(itWorks).toMatch('works');
    });

    afterAll(async () => {
        await browser.close();
    });
});
