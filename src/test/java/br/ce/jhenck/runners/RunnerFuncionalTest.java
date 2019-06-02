package br.ce.jhenck.runners;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import support.Web;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/",
		glue = "br.ce.jhenck.steps",
		tags = {"@inserir_conta_declarativo"},
		plugin = {"pretty", "html:target/report-html", "json:target/report-json"},
		monochrome = true, 
		snippets = SnippetType.CAMELCASE, 
		dryRun = false,
		strict = false
		)
public class RunnerFuncionalTest{
	
	@BeforeClass
	public static void reset() {
		WebDriver navegador = Web.abrirNavegador();
		navegador.get("https://srbarriga.herokuapp.com");
		navegador.findElement(By.id("email")).sendKeys("jch@jch.com");
		navegador.findElement(By.id("senha")).sendKeys("1234");
		navegador.findElement(By.tagName("button")).click();
		navegador.findElement(By.linkText("reset")).click();
		navegador.quit();
	}
}