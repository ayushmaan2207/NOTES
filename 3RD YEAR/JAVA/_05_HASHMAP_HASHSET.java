import java.util.*;
// HashMap internally implements as Array of Linked-List

public class _05_HASHMAP_HASHSET{
    public static void main(String[] args) {

// HASHSET

    // creating
        HashSet<Integer> set =new HashSet<>();

    // insert
        set.add(2);
        set.add(5);
        set.add(4);
        set.add(2);

    // search
        // System.out.println(set.contains(2));

    // delete
        set.remove(2);
        // System.out.println(set.contains(2));

        // System.out.println(set.size());
        // System.out.println(set);

    // iterator
        Iterator it = set.iterator();

        // while(it.hasNext()){
        //     System.out.print(it.next()+" ");
        // }

// HASHMAP
        
    // creating
        HashMap<String,Integer> map = new HashMap<>();

    // insert
        map.put("A",3);
        map.put("M",1);
        map.put("M",map.getOrDefault("M",0)+1);
        map.put("T",map.getOrDefault("T",0)+1);
        // System.out.println(map);

    // search
        // System.out.println(map.containsKey("H"));
        // System.out.println(map.get("H"));
        // System.out.println(map.get("A"));

    // iteration
        for( Map.Entry<String,Integer> ele : map.entrySet() ){
            // System.out.print(ele.getKey());
            // System.out.println(ele.getValue());
        }

        Set<String> keys=map.keySet();
        for(String key:keys){
            // System.out.println(key+" "+map.get(key));
        }
    
    // delete
        map.remove("M");
        System.out.println(map);
    }
}