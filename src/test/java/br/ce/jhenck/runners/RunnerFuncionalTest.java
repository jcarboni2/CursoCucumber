package br.ce.jhenck.runners;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;
import support.Web;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/",
		glue = {"br.ce.jhenck.steps", "br.ce.jhenck.config"},
		tags = {"@inserir_conta"},
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
		//Entrar com o email e senha cadastrado no site https://barrigarest.wcaquino.me
		navegador.findElement(By.id("email")).sendKeys("user@user.com");
		navegador.findElement(By.id("senha")).sendKeys("senha");
		navegador.findElement(By.tagName("button")).click();
		navegador.findElement(By.linkText("reset")).click();
		navegador.quit();
	}
}