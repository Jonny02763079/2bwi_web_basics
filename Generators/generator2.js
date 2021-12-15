let letters =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let signs = ['!', '"', '§', '$', '%', '&', '/', '(', ')', '=', '', '+', '-'];
let numbers = ["1", "2", "3"]

function generate() {

    let lengthOfPassword = document.getElementById("in").value;


        let random = Math.random() * 1;
        let round1 = Math.round(Math.random() * 25)
        let round2 = Math.round(Math.random() * 12)
        let round3 = Math.round(Math.random() * 2)
    

            if (random <=0.5) {
                console.log(letters[round1] + signs[round2])
            } else {
                console.log(numbers[round3] + signs[round2] + letters[round1]) 
            }
            
 
        let password = console.log("")
}

let password2 = password;
