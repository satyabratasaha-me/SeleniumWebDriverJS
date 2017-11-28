const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const chrome = require('selenium-webdriver/chrome');
jasmine.DEFAULT_TIMEOUT_INTERVAL=13000;
process.env.path = './drivers'
var chromeOptions=new chrome.Options();
chromeOptions.addArguments('headless');
chromeOptions.addArguments('disable-gpu');
describe('test suite',function(){
   
    var p;
    var mypromise;
    var driver;
    //jasmine.DEFAULT_TIMEOUT_INTERVAL=13000;
    beforeEach(function(done){
            driver = new webdriver
            .Builder()
            .withCapabilities(chromeOptions.toCapabilities())
            .build().then( d => {
                driver = d;
                done();
            })
        });
  

    afterEach(function(done){
       return driver.quit().then(_ =>{
           done();
       })
    });

    it('test-a',function(done){
       return driver.get('http://newtours.demoaut.com/')
       .then(_ => driver.findElement(By.name('userName')))
       .then(userName => userName.sendKeys('satya'))
       .then(_ => driver.findElement(By.name('password')))
       .then(password => password.sendKeys('satya'))
       .then(_ => driver.findElement(By.name('login')))
       .then(login => login.click())
       .then(_ => driver.wait(until.titleIs('Find a Flight: Mercury Tours:'),5000))
       .then(_ => driver.getTitle())
       .then(title => console.log(title))
       .then(_ => done());
    });

    // it('test-a',function(done){
    //     return driver.get('http://newtours.demoaut.com/')
    //     .then(_ => {
    //         setTimeout(() => {
    //          done();
    //         }, 4000);
            
    //     })
    //  });
});