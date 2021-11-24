let letters = ["h", "a", "d"]
let signs = ["-", "+", "*"]
let numbers = ["1", "2", "3"]

function generate() {
    let random = Math.random() * 1;
    let randomround = Math.random() * 2
    let randomround1 = Math.random() * 2
    let randomround2 = Math.random() * 2
    let round1 = Math.round(randomround)
    let round2 = Math.round(randomround1)
    let round3 = Math.round(randomround2)

    if (random <=0.5) {
        console.log(letters[round1] + signs[round2])
    } else {
        console.log(numbers[round1] + signs[round2] + letters[round1])
    }
}