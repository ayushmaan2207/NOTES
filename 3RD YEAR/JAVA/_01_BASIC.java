public class _01_BASIC {
    public static void main(String[] var0) throws Exception {
       System.out.println("Hello Ji ( ``3)"); //type sout for print shortcut

        // Data Types

            // byte -1 [-128 to 127]
            byte age=30;
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
            
            System.out.println(name3.length());
            System.out.println(name.charAt(1));
            name3 = name.replace("Ayush", "Ayushmaan Thakur");
            System.out.println(name3);
            System.out.println(name);
            System.out.println(name3.substring(5, 12));
            
        

    }
 }