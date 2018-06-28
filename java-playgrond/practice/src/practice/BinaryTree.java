package practice;
import java.util.*;

public class BinaryTree {
	TreeNode root;
	
	public static int getHeight(TreeNode root) {
		if (root == null) return 0;
		return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
	}
	
	public static int getDiameter(TreeNode root) {
		if (root == null) return 0;
		int rootDiameter = getHeight(root.left) + getHeight(root.right) + 1;
		int leftDiameter = getDiameter(root.left);
		int rightDiameter = getDiameter(root.right);
		return Math.max(rootDiameter, Math.max(leftDiameter, rightDiameter));
	}
	
	public static int findMax(TreeNode root) {
		int max, rootData, leftData, rightData;
		max = rootData = leftData = rightData = Integer.MIN_VALUE;
		if (root != null) {
			rootData = root.data;
			leftData = findMax(root.left);
			rightData = findMax(root.right);
			if (leftData > rightData) {
				max = leftData;
			} else {
				max = rightData;
			}
			
			if (rootData > max) {
				max = rootData;
			}
		}
		return max;
	}
	
	public static int findMaxItr(TreeNode node) {
		int max = Integer.MIN_VALUE;
		if (node == null) return max;
		Queue<TreeNode> nodeList = new LinkedList<TreeNode>();
		nodeList.add(node);
		while (!nodeList.isEmpty()) {
			TreeNode currNode = nodeList.poll();
			if (max < currNode.data) max = currNode.data;
			if (currNode.left != null) nodeList.add(currNode.left);
			if (currNode.right != null) nodeList.add(currNode.right);
		}
		return max;
	}
	
	public static void main(String[] args) {
		BinaryTree tree = new BinaryTree();
		tree.root = new TreeNode(5);
		tree.root.left = new TreeNode(4);
		tree.root.right = new TreeNode(6);
		tree.root.left.left = new TreeNode(3);
		System.out.println("Max is " + findMaxItr(tree.root));
	}
}

class TreeNode {
	public TreeNode left;
	public TreeNode right;
	public int data;
	
	public TreeNode(int data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}