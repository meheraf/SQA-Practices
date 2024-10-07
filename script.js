const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
// const chrome = require("selenium-webdriver/chrome");
const productName="Nike react phantom run flyknit 2";
async function testRun(){

    let driver=await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
    await driver.findElement(By.xpath("//a[contains(@class,'search-icon')]")).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Nike");
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
    await driver.findElement(By.xpath(`//a[contains(@href,'182')]/span[contains(text(),'${productName}')]`)).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(),'S')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(),'Black')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@name='qty']")).clear();
    await driver.findElement(By.xpath("//input[@name='qty']")).sendKeys("3");
    await driver.findElement(By.xpath("//span[contains(text(),'ADD TO CART')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[contains(text(),'VIEW CART')]")).click();

    
    
    await driver.sleep(5000);
    await driver.quit();
}
testRun();


