import java.util.ArrayList;
import java.util.Collections;
public class _08_ARRAYLIST {
    public static void main(String[] args) {
        ArrayList<Integer> al= new ArrayList<>();

    // adding, inserting in b/w & getting ele
        al.add(1);
        al.add(5);
        al.add(3);
        al.add(1,2);
        System.out.println(al);

        al.set(1,9);
        System.out.println(al.get(1));

    // delete
        al.remove(1);
        System.out.println(al.size());
        
    // iteration
        for (int i = 0; i < al.size(); i++) {
            System.out.print(al.get(i) +" ");
        }
        System.out.println();

    // Sorting
        Collections.sort(al);
        System.out.println(al);
    }
}
