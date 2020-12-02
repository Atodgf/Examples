function changeArray(arr) {
            if (arr.length % 2 == 0) {
                 removed = arr.splice(0, arr.length/2)
                 final = arr.concat(removed)
                console.log(final)}
            else {
                 removed = (arr.splice(0, (arr.length/2)+1))
                 final = arr.concat(removed,removed.splice(0, arr.length))
                console.log(final)
        }
}
changeArray([ 1, 2, 3, 4, 5, 6, 7])