
import java.util.Scanner;
import java.util.StringTokenizer;

public class _03_STRING {
    public static void main(String[] args) {
    // printing types
        Scanner sc = new Scanner(System.in);
        // String name= sc.nextLine();
        String name="Ayush";
        // System.out.println("My name");
        // System.out.print("is:");
        // System.out.println(name);
        
        int a=3;
        float b=88.69F;
        // System.out.printf("The val of a is %d & b is %f",a,b);
        // System.out.format("The val of a is %d & b is %f",a,b);

    // Split Method
        String ref= "My name is Ayushmaan, I am Reflection Head!";
        String arr[] = ref.split("[ !,]");
        for(int i=0;i<arr.length;i++){
            // System.out.println(arr[i]);
        }

    // String Methods
        // System.out.print("\nEnter your name: ");
        // String naam= sc.next();
        // System.out.println(naam.length());
        // System.out.println(naam.toLowerCase());

        String nts =" aiyo hello     ";
        // System.out.println(nts.startsWith(" "));
        // System.out.println(nts.trim());
        // System.out.println(nts.replace(" ","/"));
        // System.out.println(nts.substring(1,2));

        // System.out.println(nts.charAt(3));
        // System.out.println(nts.indexOf("o",5));
        // System.out.println(nts.lastIndexOf("o",5));
        
        String ay= "ayush";
        // System.out.println(ay.equals("AyuSh"));
        // System.out.println(ay.equalsIgnoreCase("AyuSh"));
        
        // escape sequence   
        // System.out.println("\\ \n \' \t \" ");

    // String Builder
        StringBuilder sb = new StringBuilder("Pyush");
        // System.out.println(sb);

        // System.out.println(sb.charAt(3));
        sb.setCharAt(0,'A');
        // System.out.println(sb);
        
        sb.insert(3,'@');
        // System.out.println(sb);
        
        // sb.delete(3, 6);
        sb.deleteCharAt(3);
        // System.out.println(sb);
        
        sb.append("maan");
        // System.out.println(sb);
    
    // String Tokenizer
        StringTokenizer st = new StringTokenizer("This is a dog") ;
        StringTokenizer st1 = new StringTokenizer("This is a,cat."," ,.") ;

        while(st1.hasMoreTokens()){
            System.out.println(st1.nextToken());
        }


    }
}
