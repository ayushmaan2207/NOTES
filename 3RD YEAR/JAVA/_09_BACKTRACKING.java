public class _09_BACKTRACKING {
    //  HEAD RECURRSION 
        /* when we calculate the ans while falling */

    // TAIL RECURRSION
        /*calculate ans while climbing */
    public static void help(String s,int [] f,String a) {
        if(a.length()== s.length()){
            System.out.println(a);
        }
        for(int i=0;i<s.length();i++){
            if(f[i]==0){
                a+= s.charAt(i);
                f[i]++;
                help(s, f, a);
                a= a.substring(0,a.length()-1);
                f[i]--;
            }
        }
        
    }
    public static void main(String[] args) {
        String s="AB";
        String a="";
        int [] f= new int[s.length()];
        help(s,f,a);
    }
}
