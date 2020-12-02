const str = "Каждый охотник желает знать, где сидит фазан.";  
function firstChar(value, index, str) {  
    if (index === 0)  
        return true;  
    else  
        return str[index - 1] === " ";  
}  
const newArray = [].filter.call(str, firstChar);  
console.log(newArray);  