/**
 * Created by Administrator on 4.08.2016.
 */

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/features", format = {"pretty", "html:target/html/", "json:target/json/cucumber.json"})
public class  RunFeatures{
}

