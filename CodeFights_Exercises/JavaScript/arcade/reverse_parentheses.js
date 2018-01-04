// This one was a doozy.
// I tried my best to avoid using indexOf/LastIndexOf Still ended up using it at the end.

function reverseParentheses(s) {
    var parenCount = 0;
    var ind1;
    var ind2;

    for(var i = 0; i < s.length; i++){
        var tempArray = s.split("");
        let tempIndex;
        if(s[i] === "(") {
            if(parenCount === 0){
                ind1 = i;                
            }
            parenCount ++;
        }
        if(s[i] === ")") {
            parenCount --;
//             if the count is 0, we've found the match.
            if(parenCount === 0){
                ind2 = i;
//                 Start working the magic.
                let reversedSect = s.split("").slice(ind1 + 1, ind2).reverse();
                tempArray.splice(ind1, (ind2 - ind1 + 1), ...reversedSect);
//                 A second reverse may be necessary...
                if(tempArray.indexOf(")") < tempArray.lastIndexOf("(")){
                    let ind1A = tempArray.indexOf(")");
                    let ind2A = tempArray.lastIndexOf("(");
                    let reversedSect = tempArray.slice(ind1A + 1, ind2A).reverse();
                    tempArray.splice(ind1A, (ind2A - ind1A + 1), ...reversedSect)
                }
                s = tempArray.join("");
                console.log(s, ind1, ind2);
                i = -1;
            }
        }
    }
    return s;
}