
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class AprenderCucumber {

	private int contador = 0;
	Date entrega = new Date();

	@Dado("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {

	}

	@Quando("^executá-lo$")
	public void executáLo() throws Throwable {

	}

	@Então("^a especificação deve finalizar com sucesso$")
	public void aEspecificaçãoDeveFinalizarComSucesso() throws Throwable {

	}

	// ---------------IMPLEMENTAÇÕES DE LÓGICA DIRETAMENTE NO
	// CUCUMBER---------------//

	// -----CONTADOR-----//

	@Dado("^que o valor do contador é (\\d+)$")
	public void queOValorDoContadorÉ(int num1) throws Throwable {
		contador = num1;
	}

	@Quando("^eu incrementar em (\\d+)$")
	public void euIncrementarEm(int num2) throws Throwable {
		contador += num2;
	}

	@Então("^o valor do contador será (\\d+)$")
	public void oValorDoContadorSerá(int resultado) throws Throwable {
		Assert.assertEquals(resultado, contador);
	}

	// -----CALCULAR ENTREGA ADICIONANDO DIAS OU MESES-----//

	@Dado("^que o prazo é dia (\\d+)/(\\d+)/(\\d+)$")
	public void queOPrazoÉ(int dia, int mes, int ano) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.DAY_OF_MONTH, dia);
		cal.set(Calendar.MONTH, mes - 1);
		cal.set(Calendar.YEAR, ano);
		entrega = cal.getTime();
	}

	@Quando("^a entrega atrasar em (\\d+) (dia|dias|mes|meses)$")
	public void aEntregaAtrasarEmDias(int addValue, String tempo) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);
		if (tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, addValue);
		}
		if (tempo.equals("meses")) {
			cal.add(Calendar.MONTH, addValue);
		}
		entrega = cal.getTime();
	}

	@Então("^a entrega será efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void aEntregaSeráEfetuadaEm(String dataEntrega) throws Throwable {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		String dataFormatada = format.format(entrega);
		Assert.assertEquals(dataEntrega, dataFormatada);
	}
}
