class MyThread1 extends Thread{
    @Override
    public void run(){
        int i=0;
        while (i<20) { 
            System.out.println("Thread1 is running");   
            System.out.println("cooking");  
            i++; 
        }
    }
}
class MyThread2 extends Thread{
    @Override
    public void run(){
        int i=0;
        while (i<20) { 
            System.out.println("Thread2 is running");   
            System.out.println("painting");   
            i++; 
        }
    }
}

// Runnable
class MyThreadRunnable1 implements Runnable{
    public void run(){
        int i=0;
        while (i<5) { 
            System.out.println("MyThreadRunnable1 is running");   
            System.out.println("sleeping");  
            i++; 
            try {
                Thread.sleep(1000);
            } catch (Exception e) {
                System.out.println("not sleeping");
            }
        }
    }
}
class MyThreadRunnable2 implements Runnable{
    public void run(){
        int i=0;
        while (i<5) { 
            System.out.println("MyThreadRunnable2 is running");   
            System.out.println("painting");  
            i++; 
        }
    }
}

// constructor
class MyThreadConstructor extends Thread{
    public MyThreadConstructor(String name){
        super(name);
    }
    public void run(){
        int i=0;
        while (i<5) { 
            System.out.println("MyThreadConstructor is running");   
            System.out.println(getName() + getId());  
            i++; 
        }
    }
}

public class _04_THREADS {
    public static void main(String[] args) {
        // MyThread1 t1 = new MyThread1();
        // MyThread2 t2 = new MyThread2();
        // t1.start();
        // t2.start();


        MyThreadRunnable1 tR1 = new MyThreadRunnable1();
        Thread t1R = new Thread(tR1);
        MyThreadRunnable2 tR2 = new MyThreadRunnable2();
        Thread t2R = new Thread(tR2);
        t1R.start();
        // try {
        //     t1R.join(); // t2R wil start after t1R is completed
        // } catch (Exception e) {
        //     System.out.println(e);
        // }
        t2R.start();


        // MyThreadConstructor t= new MyThreadConstructor("ayush");
        // t.start();
        // t.setPriority(Thread.MAX_PRIORITY);
        // System.out.println(t.getId());
    }
}
