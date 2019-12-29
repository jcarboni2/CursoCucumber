package br.ce.jhenck.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/",
		glue = {"br.ce.jhenck.steps", "br.ce.jhenck.config"},
		tags = {"@unitarios"},
		plugin = {"pretty", "html:target/cucumber-html", "json:target/cucumber-json/cucumber.json"},
		monochrome = true, 
		snippets = SnippetType.CAMELCASE, 
		dryRun = false,
		strict = false
		)
public class RunnerTest{
}