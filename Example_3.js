function changeArray(arr) {
            if (arr.length % 2 == 0) {
            return arr.concat(removed = arr.splice(0, arr.length/2))
            }
            else {
                 removed = (arr.splice(0, (arr.length/2)+1))
                 return arr.concat(removed,removed.splice(0, arr.length))
                
        }
}
console.log(changeArray([ 1, 2, 3, 4, 5, 6, 7]))