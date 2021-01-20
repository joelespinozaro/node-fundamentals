const puppeteer = require('puppeteer');

(async () => {
    console.log('Launch Browser');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless: false});
    
    const page = await browser.newPage();
    await page.goto('https://wikipedia.org/wiki/Node.js');


    var titulo1 = await page.evaluate(()=> {
        const h1 = document.querySelector("h1");
        // console.log(h1.innerHTML);
        return h1.innerHTML;
    })

    console.log(titulo1);
    console.log('Quit browser');
    browser.close();
    console.log('browser closed');

})();