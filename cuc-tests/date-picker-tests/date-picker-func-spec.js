/**
 * Created by autoTest on 12/11/2015.
 */
'use strict';


var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

// import corresponding page object javascript file(s)
var CreateDatePicker = require('../date-picker-tests/date-picker-pageobject.js');
// import corresponding test data json file(s)
var TestData = require('../date-picker-tests/date-picker-testdata.json');

var fs = require ('fs');

describe('date-picker functional test suite ->', function(){


    describe('popup panel ->', function() {

        beforeEach(function () {
            browser.get('#sidenav-date-picker');
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
        });

        afterEach(function () {
            browser.ignoreSynchronization = false;
            browser.driver.sleep(3000);
        });

        it.only('Date-Time-> Calendar popup panel should show when date picker image button is clicked', function () {

            var datePicker = new CreateDatePicker();

            browser.wait(datePicker.imageButton1.isPresent());
            datePicker.imageButton1.click();

            expect(datePicker.calendarpopup1.isDisplayed()).to.eventually.equal(true);

            // temp
            browser.takeScreenshot().then(function (png){
                var stream = fs.createWriteStream ('C:/CUC Testresults/screenshot.png');
                stream.write (new Buffer (png, 'base64'));
                stream.end();
            });
        });

        it('Date-> Calendar popup panel should show when date picker image button is clicked', function () {

            var datePicker = new CreateDatePicker();

            browser.wait(datePicker.imageButton2.isPresent());
            datePicker.imageButton2.click();

            expect(datePicker.calendarpopup2.isDisplayed()).to.eventually.equal(true);
        });

        it('Time-> Time popup panel should show when time picker image button is clicked', function () {

            var datePicker = new CreateDatePicker();

            browser.wait(datePicker.imageButton3.isPresent());
            datePicker.imageButton3.click();

            expect(datePicker.timepopup.isDisplayed()).to.eventually.equal(true);
        });
    });


    describe('input text field ->', function() {

        beforeEach(function () {
            browser.get('#sidenav-date-picker');
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
        });

        afterEach(function () {
            browser.ignoreSynchronization = false;
            browser.driver.sleep(3000);
        });

        it('Date-Time field-> should be able to enter date', function () {

            var datePicker = new CreateDatePicker();

            datePicker.dateEntryfield1.click();
            datePicker.dateEntryfield1.sendKeys(TestData.Date);
            datePicker.dateEntryfield1.sendKeys(protractor.Key.TAB);

            expect(datePicker.dateEntryfield1.getAttribute("value")).to.eventually.equal(TestData.Date);

        });

        it('Date-Time field-> should be able to enter time', function () {
            var datePicker = new CreateDatePicker();

            datePicker.timeEntryfield1.click();
            datePicker.timeEntryfield1.sendKeys(TestData.Time);
            datePicker.timeEntryfield1.sendKeys(protractor.Key.TAB);

            expect(datePicker.timeEntryfield1.getAttribute("value")).to.eventually.equal(TestData.Time);
        });

        it('Date field-> should be able to enter date', function () {
            var datePicker = new CreateDatePicker();

            datePicker.dateEntryfield2.click();
            datePicker.dateEntryfield2.sendKeys(TestData.Date);
            datePicker.dateEntryfield2.sendKeys(protractor.Key.TAB);

            expect(datePicker.dateEntryfield2.getAttribute("value")).to.eventually.equal(TestData.Date);
        });

        it('Time field-> should be able to enter time', function () {
            var datePicker = new CreateDatePicker();

            datePicker.timeEntryfield2.click();
            datePicker.timeEntryfield2.sendKeys(TestData.Time);
            datePicker.timeEntryfield2.sendKeys(protractor.Key.TAB);

            expect(datePicker.timeEntryfield2.getAttribute("value")).to.eventually.equal(TestData.Time);
        });
    });
});