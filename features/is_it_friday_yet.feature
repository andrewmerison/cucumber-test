"""
This file is the initial scenario used to derive the tests found in
the `./step_definitions/stepdefs.js` file. With nothing other than 
this file, cucumber suggested what test methods to create in order 
to cover the scenario outlined below. 

Notice the table under the "Examples" section. Cucumber generated
suggestions and tests against each example dynamically. Pretty cool!
"""

Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario Outline: Today is or is not Friday
    Given today is "<day>"
    When I ask whether it's Friday yet
    Then I should be told "<answer>"

  Examples:
    | day            | answer |
    | Friday         | TGIF   |
    | Sunday         | Nope   |
    | Anything else! | Nope   |