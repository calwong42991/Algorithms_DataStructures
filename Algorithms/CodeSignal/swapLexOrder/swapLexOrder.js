function swapLexOrder(str, pairs) {
    var graph = new Array(str.length).fill(0).map(e=>[]);
    for(var pair of pairs) {
        graph[pair[0]-1].push(pair[1]-1);
        graph[pair[1]-1].push(pair[0]-1);
    }
    
    //Build all the ccs with dfs: O(n+m)
    var ccs = [], ccnum = 0;
    for(var c in str) {
        if(ccs[c])
            continue;
        ccs[c] = ++ccnum;
        var dfs = [...graph[c]];
        while(dfs.length) {
            var d = dfs.shift();
            if(ccs[d])
                continue;
            ccs[d] = ccnum;
            dfs.push(...graph[d]);
        }
    }
    
    //Group words by ccs: O(n)
    var ccWords = new Array(ccnum).fill(0).map(e=>[]);
    for(var c in str) {
        ccWords[ccs[c]-1].push(str[c]);
    }
    
    //Sort all words: O(n log n)
    ccWords.map(e=>e.sort());
    
    //Build the new string: O(n)
    var output = "";
    for(var c in str) {
        output += ccWords[ccs[c]-1].pop();
    }
    return output;
}
