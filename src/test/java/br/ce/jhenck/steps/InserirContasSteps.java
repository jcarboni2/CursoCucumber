package br.ce.jhenck.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import support.Web;

public class InserirContasSteps extends Web {

	WebDriver navegador = Web.abrirNavegador();

	@Dado("^que estou acessando a aplicação$")
	public void queEstouAcessandoAAplicação() throws Throwable {
		navegador.get("https://seubarriga.wcaquino.me");
	}

	@Quando("^informo o usuário \"([^\"]*)\"$")
	public void informoOUsuário(String email) throws Throwable {
		navegador.findElement(By.id("email")).sendKeys(email);
	}

	@Quando("^a senha \"([^\"]*)\"$")
	public void aSenha(String senha) throws Throwable {
		navegador.findElement(By.id("senha")).sendKeys(senha);
	}

	@Quando("^seleciono entrar$")
	public void selecionoEntrar() throws Throwable {
		navegador.findElement(By.tagName("button")).click();
	}

	@Então("^visualizo a página inicial$")
	public void visualizoAPáginaInicial() throws Throwable {
		String texto = navegador.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		//Alterar o nome do usuário para o cadastrado no site https://seubarriga.wcaquino.me/contas
		Assert.assertEquals("Bem vindo, nomeUsuário!", texto);
	}

	@Quando("^seleciono Contas$")
	public void selecionoContas() throws Throwable {
		navegador.findElement(By.linkText("Contas")).click();
	}

	@Quando("^seleciono Adicionar$")
	public void selecionoAdicionar() throws Throwable {
		navegador.findElement(By.linkText("Adicionar")).click();
	}

	@Quando("^informo a conta \"([^\"]*)\"$")
	public void informoAConta(String conta) throws Throwable {
		navegador.findElement(By.id("nome")).sendKeys(conta);
	}

	@Quando("^seleciono Salvar$")
	public void selecionoSalvar() throws Throwable {
		navegador.findElement(By.tagName("button")).click();
	}

	@Então("^a conta é inserida com sucesso$")
	public void aContaÉInseridaComSucesso() throws Throwable {
		String texto = navegador.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Conta adicionada com sucesso!", texto);
	}

	@Então("^sou notificado que o nome da conta é obrigatório$")
	public void souNotificadoQueONomeDaContaÉObrigatório() throws Throwable {
		String texto = navegador.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Informe o nome da conta", texto);
	}

	@Então("^sou notificado que já existe uma conta com esse nome$")
	public void souNotificadoQueJáExisteUmaContaComEsseNome() throws Throwable {
		String texto = navegador.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Já existe uma conta com esse nome!", texto);
	}
	
	@Então("^recebo a mensagem \"([^\"]*)\"$")
	public void receboAMensagem(String msg) throws Throwable {
		String texto = navegador.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText();
		Assert.assertEquals(msg, texto);
	}
	
	@After(order=1, value= {"@funcionais"})
	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot)navegador).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshots/"+cenario.getId()+".jpeg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@After(order=0, value= {"@funcionais"})
	public void fecharNavegador() {
		navegador.quit();
	}
}