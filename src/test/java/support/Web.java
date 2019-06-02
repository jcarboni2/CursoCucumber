package support;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Web {
	
	public static WebDriver abrirNavegador(){
		//Caso não tenha as variáveis de ambiente configuradas para os webdrivers, defina o caminho do webdriver.exe abaixo:
		//System.setProperty("webdriver.chrome.driver", "C:\\drivers\\chromedriver.exe");
        WebDriver navegador = new ChromeDriver();
        navegador.manage().window().maximize();

        return navegador;
    }
}
