import java.util.Arrays;
import java.util.Scanner;

public class _01_BASIC {

    public static void print() {
        System.out.println("Hello ji ( ``3)");
    }

    public static int modulo(int a,int b) {
        return  a%b;
    }

    public static void main(String[] var0){
    //    System.out.println("Hello Ji ( ``3)"); //type sout for print shortcut

        // Data Types

            // byte -1 [-128 to 127]
            byte age1=30;
            // short -2
            // int -4
            int phone= 1234567890;
            // long -8
            long phone2= 12345678900L;
            // float -4
            float pi = 3.14F;
            // double -8
            // char - 2
            char letter ='@';
            // boolean -1 
            boolean isAdult= true;

        // String

            String name= "Ayush";
            String name2= "maan";
            String name3= name+name2+" Thakur";
            
            // System.out.println(name3.length());
            // System.out.println(name.charAt(1));
            // System.out.println(name2);
            name2= name.replace("Ayush", "Ayushmaan Thakur");
            // System.out.println(name2);
            // System.out.println(name);
            // System.out.println(name3.substring(5, 5+1));
        
        // Array

            int [] marks = new int[3];
            // marks[0]=97;
            marks[1]=98;
            marks[2]=95;
            boolean [] marks1 = new boolean[3];
            
            // System.out.println(marks[0]);
            // System.out.println(marks1[0]);
            // System.out.println(marks.length);

        //  // SORT (import java.util.Arrays;)
            // System.out.println(marks[2]);
            Arrays.sort(marks);
            // System.out.println(marks[2]);

        //  // 2D MATRIX
            int [][] finalMarks={{1,2},{3,4},{0,6},{5,7},{8,9},{5,9}};

        // sorting in 2d array

            // Arrays.sort(finalMarks,(a,b)->a[0]-b[0]);
            // Arrays.sort(finalMarks,(a,b)->b[0]-a[0]);
            
            // Arrays.sort(finalMarks,(a,b)->a[1]-b[1]);
            // Arrays.sort(finalMarks,(a,b)->b[1]-a[1]);
            

            for(int i=0;i<finalMarks.length;i++){
                for(int j=0;j<finalMarks[i].length;j++){
                    System.out.print(finalMarks[i][j]+" ");
                }
                System.out.print(",");
            }

        // Casting
        
            double p=100.00;
            double fp = p+18;
            // System.out.println(fp);

            int price=100;
            int fprice= price+ (int)18.99;
            // System.out.println(fprice);
//
            String m="234567";
            int n= Integer.parseInt(m);
            // System.out.println(n);
            String pass = "art356";
            boolean isDig= Character.isDigit(pass.charAt(4));
            // System.out.println(isDig);
            int x=13;
            // String y= "adf" + String.valueOf(x);
            // String y= "adf" + Integer.toString(x);

        // convert to binary;
            // String y= Integer.toString(x,2);
        // count no. of 1s in binary no.
            int y = Integer.bitCount(x);
            System.out.println(y);
//
        // Constrants

            final float PI =3.14F;
            // PI=1.1;

        // Operators

            int a=1;
            int b=2;
            // int ans = a/b;
            double ans = (double)a / (double)b;
            // System.out.println(ans);

        // Maths

            // System.out.println(Math.min(5,3));
            // System.out.println(Math.random()); //gives no. btw 0 to less than 1;

        // HOW TO TAKE INPUT? (import java.util.Scanner;)

            Scanner sc= new Scanner(System.in);
            // System.out.println("Enter Your Age: ");
            // int age= sc.nextInt();
            // System.out.println(age);

            // System.out.println("Enter Your Name: ");
            // String namee= sc.next();
            // System.out.println(namee);

            // System.out.println("Enter Your FullName: ");
            // String nam= sc.nextLine();
            // System.out.println(nam);

        // Conditional Statements

            int aga=30;
            if(aga>12 && aga <20){
                System.out.println("teen");
            }
            else if(aga<12){
                System.out.println("child");
            }
            else{
                // System.out.println("adult");
            }

        //  //switch statement
            int day=1;
            switch(day){
                case 1:
                    // System.out.println("monday");
                case 2:
                    // System.out.println("tuesday");
                    break;
                default:
                    System.out.println("wed -sun");
            }


        // LOOPS

        //  // for loop
            for(int i=5;i>0;i--){
                // System.out.println(i);
            }

        //  // while loop
            int i=1;
            while(i<6){
                if(i==3){
                    i++;
                    continue;
                }
                // System.out.println(i);
                i++;
            }

        //  // do-while loop
            int k=6;
            do{
                // System.out.println(k);
                k++;
            }while(k<6);

        // EXCEPTION HANDLING
        
            // Syntax Error
            // System.out.print(a);

            // Logical Error - bugs 
            // Runtime Error - api faliure

            int[] mark ={ 97,98,95};
            try {
                // System.out.println(marks[5]);
            } catch (Exception e) {
                System.out.println(e);
                System.out.println("Marks nhi hai");
            }
            // System.out.println("student name is Ayush");


            // System.out.println(1 + 2 * 3 + 7 * 2 % 5);

        // METHODS [function]
            // print();
            // System.out.println(modulo(10,7));
    }
 }