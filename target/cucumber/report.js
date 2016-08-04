$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkAndroidPhoneBrowser.feature");
formatter.feature({
  "id": "",
  "description": "Kak web developer\r\nJa hochu ubeditsja\r\nchto website otobrazaetsja pravilno\r\nv brauzere Android telefona",
  "name": "",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 10078790336,
  "status": "passed"
});
formatter.scenario({
  "id": ";",
  "description": "",
  "name": "",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "user otkryvaet browser",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "on proverjaet sait",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "website title dolzen byt pravilnym",
  "keyword": "Then ",
  "line": 10
});
formatter.match({
  "location": "checkAndroidPhoneBrowserSteps.getWebPage()"
});
formatter.result({
  "duration": 1894869798,
  "status": "passed"
});
formatter.match({
  "location": "checkAndroidPhoneBrowserSteps.checkElement()"
});
formatter.result({
  "duration": 84262249,
  "status": "passed"
});
formatter.match({
  "location": "checkAndroidPhoneBrowserSteps.checkTitleIsCorrect()"
});
formatter.result({
  "duration": 3299487,
  "status": "passed"
});
formatter.after({
  "duration": 995749675,
  "status": "passed"
});
});