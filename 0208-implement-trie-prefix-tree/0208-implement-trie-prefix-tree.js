class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null); 
        this.endOfWord = false; 
    }
}

var Trie = function() {
    this.root = new TrieNode();
};

Trie.prototype.charCode = function(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
};

Trie.prototype.insert = function(word) {
    let node = this.root;
    for(let char of word){
        let index = this.charCode(char);
        if(node.children[index] === null){
            node.children[index] = new TrieNode();
        }
        node = node.children[index];
    }
    node.endOfWord = true;
};

Trie.prototype.search = function(word) {
    let node = this.root;
    for(let char of word){
        let index = this.charCode(char);
        if(node.children[index] === null){
            return false; 
        }
        node = node.children[index];
    }
    return node.endOfWord; 
};

Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for(let char of prefix){
        let index = this.charCode(char);
        if(node.children[index] === null){
            return false;
        }
        node = node.children[index];
    }
    return true; 
};