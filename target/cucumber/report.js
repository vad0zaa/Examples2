$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkAndroidPhoneBrowser.feature");
formatter.feature({
  "id": "",
  "description": "Kak web developer\r\nJa hochu ubeditsja\r\nchto website otobrazaetsja pravilno\r\nv brauzere Android telefona",
  "name": "",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 16297735741,
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
  "duration": 2459857165,
  "status": "passed"
});
formatter.match({
  "location": "checkAndroidPhoneBrowserSteps.checkElement()"
});
formatter.result({
  "duration": 71523679,
  "status": "passed"
});
formatter.match({
  "location": "checkAndroidPhoneBrowserSteps.checkTitleIsCorrect()"
});
formatter.result({
  "duration": 2965860,
  "status": "passed"
});
formatter.after({
  "duration": 1143317255,
  "status": "passed"
});
});