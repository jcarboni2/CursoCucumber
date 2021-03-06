package br.ce.jhenck.steps;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import support.Web;

public class InserirContasStepsCenarioDeclarativo extends Web {

	WebDriver navegador = Web.abrirNavegador();
	
	@Dado("^que desejo adicionar uma conta$")
	public void queDesejoAdicionarUmaConta() throws Throwable {
		navegador.get("https://srbarriga.herokuapp.com");
		//Alterar o usuário e senha para o cadastrado no site https://seubarriga.wcaquino.me/contas
		navegador.findElement(By.id("email")).sendKeys("jch@jch.com");
		navegador.findElement(By.id("senha")).sendKeys("1234");
		navegador.findElement(By.tagName("button")).click();
		navegador.findElement(By.linkText("Contas")).click();
		navegador.findElement(By.linkText("Adicionar")).click();
	}

	@Dado("^adiciono a conta \"([^\"]*)\"$")
	public void adicionoAConta(String conta) throws Throwable {
		navegador.findElement(By.id("nome")).sendKeys(conta);
		navegador.findElement(By.tagName("button")).click();
	}

	@Então("^a conta inserida com sucesso$")
	public void aContaInseridaComSucesso() throws Throwable {
		String texto = navegador.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Conta adicionada com sucesso!", texto);
	}

	@Então("^sou notificado que nome da conta é obrigatório$")
	public void souNotificadoQueNomeDaContaÉObrigatório() throws Throwable {
		String texto = navegador.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Informe o nome da conta", texto);
	}

	@Então("^sou notificado que existe uma conta com esse nome$")
	public void souNotificadoQueExisteUmaContaComEsseNome() throws Throwable {
		String texto = navegador.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Já existe uma conta com esse nome!", texto);
	}
	
	@Então("^recebo mensagem \"([^\"]*)\"$")
	public void receboMensagem(String msg) throws Throwable {
		String texto = navegador.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText();
		Assert.assertEquals(msg, texto);
	}
	
	@After(order=1, value= "@funcionais")
	public void screenshot(Scenario cenario) {
		File image = ((TakesScreenshot)navegador).getScreenshotAs(OutputType.FILE);
		String timestamp = new SimpleDateFormat("yyyy-MM-dd__HH-mm-ss").format(new Date());		
		try {
			new File("/target/screenshots").mkdir();
			FileUtils.copyFile(image, new File("target/screenshots/"+cenario.getName()+"_"+timestamp+".png"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@After(order=0, value= "@funcionais")
	public void fecharNavegador() {
		navegador.quit();
	}
}