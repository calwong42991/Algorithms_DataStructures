function areFollowingPatterns(strings, patterns) {
    let hash = {};
    let reverse = {};
    
    for(let i = 0; i < strings.length; i++){
        let p = patterns[i];
        let s = strings[i];
        
        if(!hash[p]){
            hash[p] = s;
        }
        
        if(!reverse[s]) {
            reverse[s] = p;
        } 
        if(s !== hash[p] || reverse[s] !== p){
            return false;
        }
    }
    return true;
}
