package teste;

import java.applet.Applet;
import java.awt.Graphics;

// Exibe um ditado de Confucio  
// do livro: Java Software Solutions:J. Lewis e W. Loftus 
public class Confucio extends Applet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void paint(Graphics pagina) {
		pagina.drawString("Esqueça desaforos, nunca esqueça gentilezas.", 30, 30);
		pagina.drawString("----Confúcio", 70, 70);
	}// ditado
	
}// classe Confucio