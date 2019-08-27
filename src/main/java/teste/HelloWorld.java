package teste;
/**
 * 
 */

/**
 * @author leonardo
 *
 */
import java.applet.Applet;
import java.awt.Graphics;

public class HelloWorld extends Applet {
	/**
	 * 
	 */
	private static final long serialVersionUID = -965262014458195774L;

	public void paint(Graphics g) {
		g.drawString("Hello world!", 50, 25);
	}
}
