function containsCloseNums(nums, k) {
    if(nums.length === 0){
        return false;
    }
    
    let hash = {};
    
    for(let i = 0; i < nums.length; i++){        
        if(i - hash[nums[i]] <= k){
            return true;
        }
        
        hash[nums[i]] = i;
            
    }
    
    
    return false;
}
