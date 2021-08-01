function longestSubstringWithDistinctKs(string, k) {
  if(!string.length || !k) return 0
  
  let start = 0
  let seen = {}
  let distinct = 0
  let max = 0
  let res = ''
  
  // expanding window
  for(let end = 0; end < string.length; end++){
    if(!seen[string[end]]) {
      distinct++
      seen[string[end]] = 0
    }
    seen[string[end]]++
    
    // shrinking window
    while(distinct > k){
      seen[string[start]]--
      if(!seen[string[start]]) distinct--
      start++
    }
    
    let subLength = (end - start + 1)
    if(Math.max(max, end - start + 1) === subLength){
      max = subLength
      res = string.slice(start, end + 1)
    }
  }
  
  return res  
}
