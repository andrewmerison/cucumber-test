const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { isItFriday } = require("../../src/index");


/**
 *  The "Given" method is used to prepare the scenario for each value
 *  we are testing.
 */
Given('today is {string}', function (string) {
    this.today = string;
});

/**
 *  The "When" method is used to run the scenario with each value we 
 *  test, which we will compare to expected values later.
 */
When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

/**
 *  The "Then" method is used to test actual output against expected
 *  output.
 */
Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});
