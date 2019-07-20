package br.ce.jhenck.steps;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import br.ce.jhenck.converters.DateConverter;
import cucumber.api.Transform;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class AprenderCucumberTransformSteps {

	Date entrega = new Date();

	// -----CALCULAR ENTREGA ADICIONANDO DIAS OU MESES USANDO TRANSFORM-----//

	@Dado("^que a entrega é (.*)$")
	public void queAEntregaÉ(@Transform(DateConverter.class) Date data) throws Throwable {
		entrega = data;
		System.out.println(entrega);
	}

	@Quando("^a entrega atrasar (\\d+) (dia|dias|mes|meses)$")
	public void aEntregaAtrasarDias(int addValue, String tempo) throws Throwable {
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

	@Então("^a entrega será efetuada (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void aEntregaSeráEfetuada(String dataEntrega) throws Throwable {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		String dataFormatada = format.format(entrega);
		Assert.assertEquals(dataEntrega, dataFormatada);
	}
	
	@Dado("^que o ticket( especial)? (A.\\d{3})$")
	public void queOTicketAF(String tipo, String arg1) throws Throwable {
	}

	@Dado("^que o valor da passagem R\\$ (\\d+,\\d{2})$")
	public void queOValorDaPassagemR$(Double numero) throws Throwable {
		System.out.println(numero);
	}

	@Dado("^que o nome do passageiro \"(.{5,20})\"$")
	public void queONomeDoPassageiro(String arg1) throws Throwable {
	}

	@Dado("^que o telefone do passageiro (9\\d{3}-\\d{4})$")
	public void queOTelefoneDoPassageiro(String telefone) throws Throwable {
	}

	@Quando("^criar o step$")
	public void criarOStep() throws Throwable {
	}

	@Então("^o teste funciona$")
	public void oTesteFunciona() throws Throwable {
	}
}