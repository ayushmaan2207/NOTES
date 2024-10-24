import java.util.*;

public class _06_LINKED_LIST {
    public static void main (String [] args){
        LinkedList<String> list = new LinkedList<>();
        list.addFirst("is");
        list.addFirst("This");
        
        list.add("a");
        list.addLast("List");
        System.out.println(list);
        System.out.println(list.size());

        for (int i = 0; i < list.size(); i++) {
            System.out.print(list.get(i)+" -> ");
        }
        System.out.println("NULL");

        list.remove(2);
        list.removeFirst();
        list.removeLast();
        System.out.println(list);
    }
}
