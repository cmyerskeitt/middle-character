function getMiddle(s){
    let middle = (s.length/2)-1
    if (s.length % 2 == 0){
      return s[middle] + s[middle + 1]
   } else {
     return s.split("")[Math.floor(s.length/2)]
   }
}
  