const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    let splitArrays = expr.match(/.{1,10}/g);
    let removedStars = [];
    
    
    for(let i = 0; i < splitArrays.length; i++ ){
        removedStars.push((splitArrays[i] === '**********') ? splitArrays[i].replace('**********', ' ') : splitArrays[i].match(/.{1,2}/g));
    } 


    let result = [];

    for ( let value of removedStars){

        let d = [];
        result.push(d);

        for ( let a of value){
         
            if (a === '00'){

                d.push(a.replace('00', ''));
        
            }if (a === '10'){
            
                d.push(a.replace('10', '.'));
        
            }if (a === '11'){
        
                d.push(a.replace('11', '-'));
        
            }
        }
    } 

    let resultArr = result.map(internalArray => internalArray.join(''));

    let resultRow = '';
    for( key of resultArr){
       if(key.length == 0 ){
        resultRow += ' ';
       }else{
        resultRow += MORSE_TABLE[key];
       }
    }

  return   resultRow;

}

module.exports = {
    decode
}
