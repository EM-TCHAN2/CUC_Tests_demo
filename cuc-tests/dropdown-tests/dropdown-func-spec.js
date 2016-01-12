
/**
 * Created by tonychan on 1/11/2015.
 */

'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;


// import corresponding page object javascript file(s)
var CreateDropdown = require('../dropdown-tests/dropdown-pageobject.js');
// import corresponding test data json file(s)
var TestData = require('../dropdown-tests/dropdown-testdata.json');

describe('dropdown functional test suite ->', function(){
    beforeEach(function () {
        browser.get('#/dropdown');
        browser.ignoreSynchronization = false;
        browser.waitForAngular();
    });

    afterEach(function () {
        browser.driver.sleep(2000);
    });

    describe('dropdown panel ->', function() {

        it('should show when dropdown selector is clicked', function () {

            var dropdown = new CreateDropdown();

            dropdown.dropdownselector.click();

            expect(dropdown.dropdownmenu.isDisplayed()).to.eventually.equal(true);

        });

        it('should show when dropdown caret is clicked', function () {

            var dropdown = new CreateDropdown();

            dropdown.dropdowncaret.click();

            expect(dropdown.dropdownmenu.isDisplayed()).to.eventually.equal(true);

        });

        it('default Placeholder text should be Select One', function () {

            var dropdown = new CreateDropdown();

            dropdown.dropdownselector.click();

            expect(dropdown.dropdownselector.getText()).to.eventually.equal(TestData.DefaultPlaceholderText);

        });

        it('should show the selected list-item', function () {

            var dropdown = new CreateDropdown();

            dropdown.dropdownselector.click();

            browser.wait(function(){
                return dropdown.selectedlistitem.isPresent();
            }, 3000);

            dropdown.selectedlistitem.click();

            expect(dropdown.dropdownselector.getText()).to.eventually.equal(TestData.Country);

        });

        it('should close without making any selection when the ESC key is pressed', function () {

            var dropdown = new CreateDropdown();

            dropdown.dropdownselector.click();
            browser.wait(function(){
                return dropdown.selectedlistitem.isPresent();
            }, 3000);

            browser.actions().sendKeys(protractor.Key.ESCAPE).perform();

            expect(dropdown.dropdownmenu.isDisplayed()).to.eventually.equal(false);
            expect(dropdown.dropdownselector.getText()).to.eventually.equal(TestData.DefaultPlaceholderText);
        });

        it('should NOT be able to type/enter any string in the selector field', function () {

            var dropdown = new CreateDropdown();

            dropdown.dropdownselector.click();
            browser.actions().sendKeys(TestData.AnyText).perform();

            expect(dropdown.dropdownselector.getText()).to.eventually.not.equal(TestData.AnyText);

        });

    });


    describe('error handling ->', function() {

    });
});

