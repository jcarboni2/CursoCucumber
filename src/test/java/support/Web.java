package support;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Web {
	
	public static WebDriver abrirNavegador(){
		/*Se as variáveis de ambientes não estiverem configuradas para o caminho do webdriver, 
		descomente a linha abaixo e defina o caminho do seu(s) arquivo(s) de webdriver(s).*/
		//System.setProperty("webdriver.chrome.driver", "C:\\drivers\\chromedriver.exe");
        WebDriver navegador = new ChromeDriver();
        navegador.manage().window().maximize();

        return navegador;
    }
}