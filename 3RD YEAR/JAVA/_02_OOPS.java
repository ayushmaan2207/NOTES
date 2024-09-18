class Pen{
    String color;
    String type;

    Pen(){
        // System.out.println("constructor bngya");
    }

    Pen(String color,String type){
        this.color=color;
        this.type=type;
    }

    Pen(Pen p){
        this.color=p.color; 
        this.type=p.type;
    }

    public void write(){
        System.out.println(this.color);
    }

// POLYMORPHISM
    public void printInfo(String colorORtype){
        System.out.println(colorORtype);
    }
    public void printInfo(String color,String type){
        System.out.println(color+" "+type);
    }
}

// INHERITANCE
class PilotPen extends Pen{

}
// INTERFACE
interface bycycle{
    int a=45;
    void applyBreak(int dec);
    void speedup(int inc);
}
// inheritance in Interface
interface HeroCycle extends bycycle{

}
class AvonCycle implements HeroCycle{
    public void applyBreak(int dec){
        System.out.println("Slowing down");
    }
    public void speedup(int inc){
        System.out.println("Speeding Up");
    }
}

public class _02_OOPS {
    public static void main(String[] args){
        Pen pen1= new Pen();
        pen1.color="red";
        pen1.type="gel";
        // pen1.write();
        
        Pen pen2= new Pen("black","ball");
        // pen2.write();

    // copy constructor 

        Pen pen3= new Pen(pen2);
        // pen3.write();

        // pen3.printInfo(pen3.color);
        // pen3.printInfo(pen3.color,pen3.type);

        // inheritance
        PilotPen v7= new PilotPen();
        v7.color="blue";


        AvonCycle c1 = new AvonCycle();
        c1.applyBreak(1);
        // c1.a=69; // cannot change value in interface it will be final
        System.out.println(c1.a);
    }
}
