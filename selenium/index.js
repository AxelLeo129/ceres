const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver')

async function test_case() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {    
        await driver.get('https://ceres-7e3af.firebaseapp.com/login');
        await driver.findElement(By.name('ion-input-0')).sendKeys('axel@email.com', Key.RETURN);
        await driver.findElement(By.name('ion-input-1')).sendKeys('Axel.129', Key.RETURN);
        await driver.findElement(By.id('login')).click();
    } finally {
        await driver.quit();
    }

}

test_case();