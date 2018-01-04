function commonCharacterCount(s1, s2) {
    var charCountA = {};
    var charCountB = {};
    
    var commonCount = 0;
    
    for(var i = 0; i < s1.length; i++){
//         Check if the character is in the first object:
        if(s1[i] in charCountA){
            charCountA[s1[i]]++;
        } else{
            charCountA[s1[i]] = 1;
        }
    }
    
    for(var j = 0; j < s2.length; j++){
//         Do it again for the second
        if(s2[j] in charCountB){
            charCountB[s2[j]]++;
        } else{
            charCountB[s2[j]] = 1;
        }
    }
    for(var k in charCountA){
//         Check to see if the second char count has the character.
        if(charCountB[k]){
//             Add the lower of the two to the total count.
            if(charCountA[k] <= charCountB[k]){
                commonCount += charCountA[k];
            } else{
                commonCount += charCountB[k];
            }
        }
    }
    return commonCount;
}