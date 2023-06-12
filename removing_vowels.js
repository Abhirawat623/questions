const string ="there are many owls in the jungle,what we can do?"
const x ="there are you, i was looking for u"
function removeVowels(str){
    const vowels = ["a","e","i","o","u"];
    let output ="";
 
   for(let char of str){

    if ( vowels.includes(char.toLowerCase())){    //!vowels.include-->find consonants but vowels.include only finds vowels
        output +=char
    }
   }

return output;

}
const res =removeVowels(string)
console.log(res);

console.log(removeVowels(x))