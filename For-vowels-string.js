const string = "Abhishek garg";
const vowels ="aeiou";
for ( let i=0; i< string.length;i++){
   if(vowels.includes(string[i])){console.log(`${string[i]} are vowels`);}

   else{console.log(`${string[i]} are consonants` );}
}