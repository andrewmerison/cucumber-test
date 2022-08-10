# Cucumber.io Tests

This project is the result of running through Cucumber.io's tutorial for their opensource framework.

The interesting thing to note here is the `features/is_it_friday_yet.feature` file. Using just the contents of this file, Cucumber generated example starter methods in the console to help me build out tests that covered each scenario described in the `.feature` file.

Another cool part of this was the "Examples:" section of that file. By using variables in the Scenario Outline (\<day\>, \<answer\>), it was able to derive as many tests as needed to cover each given input and answer in the Examples table.

Overall, this framework is definitely sometihng I could see being useful. It would probably take some creativity to get it working alongside our current tests, which is a bit disappointing. I also have not found much in the way of TypeScript support, which would be another issue here.

----------------------

You can find the tutorial I followed [here](https://cucumber.io/docs/guides/10-minute-tutorial/?lang=javascript).
