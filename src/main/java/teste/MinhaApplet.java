package teste;

import java.awt.*;
import java.applet.*;

public class MinhaApplet extends Applet {

	public void init() { // inicializacao
		setBackground(Color.white);
		/*
		 * outras cores predefinidas:black,blue,cyan,
		 * gray,darkGrey,ligthGrey,green,magenta,orange, pink,red,white,yellow
		 */
	}

	public void paint(Graphics g) {// conteudo
		g.setColor(Color.red);
		g.drawString("Eu sou uma applet", 25, 45);
		g.setColor(Color.green);
		g.drawString("que desenha um retangulo", 45, 75);
		g.setColor(Color.orange);
		g.drawRect(200, 50, 30, 40);
	}
}