package practice;

import java.util.*;

public class T9Prediction {
    private static Map<Integer, Set<Character>> getKeyMappings() {
        Map<Integer, Set<Character>> keyMappings = new HashMap<Integer, Set<Character>>();
        keyMappings.put(2, new HashSet<Character>(Arrays.asList('a', 'b', 'c')));
        keyMappings.put(3, new HashSet<Character>(Arrays.asList('d', 'e', 'f')));
        keyMappings.put(4, new HashSet<Character>(Arrays.asList('g', 'h', 'i')));
        keyMappings.put(5, new HashSet<Character>(Arrays.asList('j', 'k', 'l')));
        keyMappings.put(6, new HashSet<Character>(Arrays.asList('m', 'n', 'o')));
        keyMappings.put(7, new HashSet<Character>(Arrays.asList('p', 'q', 'r', 's')));
        keyMappings.put(8, new HashSet<Character>(Arrays.asList('t', 'u', 'v')));
        keyMappings.put(9, new HashSet<Character>(Arrays.asList('w', 'x', 'y', 'z')));
        return keyMappings;
    }
    public static Map<Integer, Set<Character>> keyMappings = getKeyMappings();

    public static Set<String> getMatches(Trie trie, int[] keyPresses) {
        return getMatches(trie.root, keyPresses, 0);
    }
    private static Set<String> getMatches(TrieNode node, int[] keyPresses, int index) {
        Set<String> matches = new HashSet<String>();
        if (index >= keyPresses.length) {
            if (node.isWord) matches.add("");
            return matches;
        }
        int keyPress = keyPresses[index];
        for (char firstChar : keyMappings.get(keyPress)) {
            TrieNode childNode = node.children.get(firstChar);
            if (childNode != null) {
                Set<String> suffixes = getMatches(childNode, keyPresses, index + 1);
                for (String suffix : suffixes)
                    matches.add("" + firstChar + suffix);
            }
        }
        return matches;
    }

    public static void main (String[] args) {
        Trie trie = Trie.buildDict();
        System.out.println(getMatches(trie, new int[] { 8, 4, 3 }));
    }
}

class TrieNode {
    public boolean isWord;
    public char character;
    public HashMap<Character, TrieNode> children = new HashMap<Character, TrieNode>();
    public TrieNode(boolean isWord) {
        this.isWord = isWord;
    }
    public TrieNode(char c) {
        this.character = c;
        this.isWord = false;
    }
}

class Trie {
    public TrieNode root = new TrieNode(false);
    public Trie(Collection<String> words) {
        for (String word : words) {
            add(word);
        }
    }
    public void add(String word) {
        add(root, word.toLowerCase());
    }
    private void add(TrieNode node, String word) {
        if (word.length() == 0) {
            node.isWord = true;
            return;
        } else {
            char firstChar = word.charAt(0);
            String restOfString = word.substring(1);
            if (!node.children.containsKey(firstChar)) {
                node.children.put(firstChar, new TrieNode(firstChar));
            }
            add(node.children.get(firstChar), restOfString);
        }
    }

    public static Trie buildDict() {
        List<String> words = new ArrayList<String>();
        words.add("hello");
        words.add("hi");
        words.add("vie");
        words.add("the");
        return new Trie(words);
    }
}