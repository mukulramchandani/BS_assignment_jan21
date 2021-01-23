const {Builder,By,until,Key} = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');

const chromedriver = require('chromedriver');

(async function myFunction() {
    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

    let driver = await new Builder().forBrowser('chrome').build();
    //your code inside this block
    try{

    
    await driver.get('https://flipkart.com');

    //click on this button '_2KpZ6l _2doB4z' after page loads.
    let modalButton = await driver.wait(until.elementLocated(By.className("_2KpZ6l _2doB4z")),10000)
    
    await modalButton.click();

    await driver.findElement(By.name('q')).sendKeys('Samsung Galaxy S10', Key.ENTER);
    
    //click on the mobiles tab on left '_1jJQdf _2Mji8F'
    let mobileTab = await driver.wait(until.elementLocated(By.className('_1jJQdf _2Mji8F')),10000);
    
    await mobileTab.click();
    
    let samsungCheckBox = await driver.wait(until.elementLocated(By.className('_2hbLCH _24gLJx')),10000);

    await (await samsungCheckBox.findElement(By.className('_2iDkf8 shbqsL'))).click();

    let samsungCheckBox2 = await driver.wait(until.elementLocated(By.className('_2iDkf8 t0pPfW')),10000);

    let samsung = await driver.findElements(By.className('_2iDkf8 t0pPfW'));

    let elements = await driver.findElements(By.css('div[class="_2iDkf8 t0pPfW"]'));

    for(let e of elements){
        let divText = await e.getText();
        if(divText === "Samsung"){
           // console.log(divText,"Matched");
           await e.click();
        }
        console.log(divText)
    }






    await samsungCheckBox2.click();

    


}catch(e){
    console.log(e);
}

})();