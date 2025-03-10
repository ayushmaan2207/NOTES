import java.util.PriorityQueue;
/*
node -> ith index
left child -> 2*i index
right child -> (2*i)+1 index
parent -> i/2 index
leaf nodes -> ((n/2)+1) to (n) index
*/

public class _11_HEAP {
    public static void main(String[] args) {
    // MAX HEAP
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a,b)-> b-a);

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
        System.out.println(minHeap.poll());
        System.out.println(minHeap.poll());
        System.out.println(minHeap.poll());
        System.out.println(minHeap.poll());
    }
}
