// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]


const towerBuilder = (nFloors) => {
    let tower = []
    let numStars = 1

    for (let i = 1; i <= nFloors; i++) {
        tower.push(" ".repeat(nFloors-i) + '*'.repeat(numStars) + " ".repeat(nFloors-i))
        numStars += 2
    }
    return tower
}


console.log(towerBuilder(3))