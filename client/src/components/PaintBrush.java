import java.applet.Applet;
import java.awt.*;
import java.awt.event.*;

public class PaintBrush extends Applet implements MouseMotionListener{
    private int lastX,lastY;

    public void init(){
        addMouseMotionListener(this);
        setBackground(Color.white);
    }

    public void mouseDraged(MouseEvent e){
        Graphics g = getGraphics();
        g.setColor(Color.black);
        g.drawLine(lastX,lastY,e.getX(),e.getY());
        lastX=e.getX();
        lastY=e.getY();

    }
    public void mouseMoved(MouseEvent e){
        lastX = e.getX();
        lastY = e.getY();

    }

}
