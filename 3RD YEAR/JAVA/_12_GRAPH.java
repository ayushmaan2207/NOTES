import java.util.*;
public class _12_GRAPH {
    static class Edge{
        int src;
        int des;

        public Edge(int s,int d){
            this.src=s;
            this.des=d;
        }
    }
    public static void createGraph(ArrayList<Edge> graph[]){
        for(int i=0;i<graph.length;i++){
            graph[i]= new ArrayList<Edge>();
        }

        graph[0].add(new Edge(0, 1));
        graph[0].add(new Edge(0, 2));

        graph[1].add(new Edge(1, 0));
        graph[1].add(new Edge(1, 3));

        graph[2].add(new Edge(2, 0));
        graph[2].add(new Edge(2, 4));

        graph[3].add(new Edge(3, 1));
        graph[3].add(new Edge(3, 4));
        graph[3].add(new Edge(3,5));

        graph[4].add(new Edge(4, 2));
        graph[4].add(new Edge(4, 3));
        graph[4].add(new Edge(4, 5));

        graph[5].add(new Edge(5, 3));
        graph[5].add(new Edge(5, 4));
        graph[5].add(new Edge(5, 6));

        graph[6].add(new Edge(6, 5));

        graph[7].add(new Edge(7, 8));
        graph[8].add(new Edge(8, 7));

    }

    public static void bfs(int k,ArrayList<Edge> graph[],boolean vis[]){
        Queue<Integer> q= new LinkedList<>();
        q.add(k);
        while(!q.isEmpty()){
            int curr= q.remove();
            System.out.print(curr+" ");
            vis[k]=true;

            for(int i=0;i<graph[curr].size();i++){
                Edge e= graph[curr].get(i);
                if(!vis[e.des]){
                    q.add(e.des);
                    vis[e.des]=true;
                }
            }
        }
    }

    public static void dfs(int curr ,ArrayList<Edge> []graph, boolean []used) {
        System.out.print(curr+" ");
        used[curr]=true;
        for(int i=0;i<graph[curr].size();i++){
            Edge e= graph[curr].get(i);
            if(!used[e.des]){
                dfs(e.des,graph,used);
            }
        }
    }

    public static boolean cycleundir(int curr,ArrayList<Edge> [] graph, boolean [] cvis,int parent){
        cvis[curr]=true;
        for(int i=0;i<graph[curr].size();i++){
            Edge e= graph[curr].get(i);
            if(!cvis[e.des]){
                return cycleundir(e.des, graph, cvis, curr);
            }
            else{
                if(e.des!= parent){
                    return true;
                }
            }
        }
        return false;
    }

    public static void dijkstra(ArrayList<Edge>graph [],int src,int des)
    public static void main(String[] args) {
        int v=9;
        /*
              1 --- 3
             /      | \
            0       |  5 --- 6   7 --- 8
             \      | /
              2 --- 4
         */
        ArrayList<Edge> graph[]=new ArrayList[v];
        createGraph(graph);

        boolean vis[]= new boolean[v];
        for(int i=0;i<v;i++){
            if(!vis[i]){
                bfs(i,graph,vis);
                System.out.println();
            }
        }

        boolean used[]= new boolean[v];
        for(int i=0;i<v;i++){
            if(!used[i]){
                dfs(i,graph,used);
                System.out.println();
            }
        }

        boolean cvis[]= new boolean[v];
        System.out.println(cycleundir(0,graph,cvis,-1));

    }
}
