import java.util.Comparator;
import java.util.PriorityQueue;


public class _11_HEAP {
    public static void main(String[] args) {
    // MAX HEAP
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());

        System.out.println("MAX HEAP");
        maxHeap.add(4);
        maxHeap.add(2);
        maxHeap.add(1);
        maxHeap.add(3);
        
        System.out.println(maxHeap);
        System.out.println(maxHeap.peek());
        

        // iteration
        int size =maxHeap.size();
        for(int i=0;i<size;i++){
            System.out.print(maxHeap.poll()+" ");
        }
        System.out.println();
        
    // MIN HEAP
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        System.out.println("MIN HEAP");
        minHeap.add(4);
        minHeap.add(2);
        minHeap.add(1);
        minHeap.add(3);

        System.out.println(minHeap);
        System.out.println(minHeap.peek());
    }
}
