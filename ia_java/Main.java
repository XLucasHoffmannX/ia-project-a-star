public class Main {
    public static void main(String[] args) {
        Node head = new Node(3);
        head.g = 0;

        Node n1 = new Node(2);
        Node n2 = new Node(2);
        Node n3 = new Node(2);

        head.addBranch(1, n1);
        head.addBranch(5, n2);
        head.addBranch(2, n3);
        n3.addBranch(1, n2);

        Node n4 = new Node(1);
        Node n5 = new Node(1);
        Node target = new Node(0);

        n1.addBranch(7, n4);
        n2.addBranch(4, n5);
        n3.addBranch(6, n4);

        n4.addBranch(2, target);
        n5.addBranch(1, n4);
        n5.addBranch(3, target);

        Node res = aStar.aStarAlgoritimo(n2, target);
        aStar.printPath(res);
    }
}
