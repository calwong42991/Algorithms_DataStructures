function groupingDishes(dishes) {
    
    let hashTable = {};
    
    for(let i = 0; i < dishes.length; i++){
        for(let j = 1; j < dishes[i].length; j++){
            let key = dishes[i][j];
            let dish = dishes[i][0];
            if(!hashTable[key]){
                hashTable[key] = {};
                hashTable[key].dishes = [];
            }
            
            hashTable[key].dishes.push(dish);
        }
    }
    
    
    let final = [];
    for(let key in hashTable){
        let obj = hashTable[key];
        let dishes = hashTable[key].dishes;
        if(dishes.length > 1){
            dishes.sort();
            dishes.unshift(key);
            final.push(dishes);
        }
    }
    
    final.sort((a,b) => {
        if(a[0] < b[0]){
            return -1;
        }
        
        if(a[0] > b[0]){
            return 1;
        } else {
            return 0;
        }
    })
    
    return final;
}
