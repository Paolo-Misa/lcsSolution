console.log('hi there')


let lcs = function (string1,string2){
    //My first step is to make the strings case insensitive, then assign the shorter and longer string for table puposes.
        let long,short, longLength,shortLength
    if(string1.length >= string2.length){
        long = string1.toLowerCase()
        short= string2.toLowerCase()
    }else{
        long = string2.toLowerCase()
        short= string1.toLowerCase()
    }
    longLength = long.length
    shortLength = short.length

    //define the table, shorter string in the y-axis(col), and longer string in the x-axis(row), then fill it with " ".
    const table = Array.from({length:shortLength+1},()=> new Array(longLength+1).fill(''));
    
    console.log(table)

    //fill the table
    for (let row = 1; row< table.length; row++ ){
        for (let col = 1; col < table[row].length; col++){
            if(long[col-1]===short[row-1]){
                //if the character of row and col are the same where they intersect, add it with the previous diagonal value(which is the previous col of the x axis).
                table[row][col] = table[row-1][col-1]+long[col-1];
            }else{

                //if characters of row and col are not same where they intersect, we need to define the value of the character above and on the left of the intersection.
                let aboveChar = table[row][col-1];
                let leftChar = table[row-1][col];
                // once we define the above and left characters as aboveChar and leftChar, we get the longer length via boolean and set it as the value of the current intersection.
                table[row][col] = aboveChar.length > leftChar.length? aboveChar: leftChar;
            }
        }
        }
        //we return the last element of our table, if we want to return only the number of the longest common subsequence, we add .length
        return(table[table.length-1][table[0].length-1]) //.length
}



console.log(lcs("Abcd","ABED"))
console.log(lcs("AJBLQCPDZ","aefcnbtdi"))
console.log(lcs("aefcnbtdi","AJBLQCPDZ"))
console.log(lcs("abba","Abcaba"))
console.log(lcs("aAAA","aa"))
