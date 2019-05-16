function kthSmallestInBST(root, k) {
    let array = []
     dfs(root)
     return array[k - 1]
     
     function dfs(root){
         if(!root){
             return
         }
         dfs(root.left)
         array.push(root.value)
         dfs(root.right)
     }
 }
 