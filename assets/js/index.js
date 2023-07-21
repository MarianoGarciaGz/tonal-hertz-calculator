

/* const tuning = parseInt(prompt()); */


const tuning = 440



if (tuning < 220 || tuning > 880) {
    alert("Invalid Tuning Frequency");
} else {
    alert(`Tuning frequency is set at ${tuning}`);
}



let notesList = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
let pianoArray = [...Array(10)].map(() => Array(12).fill(0));

for (let x = 0; x < pianoArray.length; x++) {
    for (let y = 0; y < pianoArray[x].length; y++) {
        /* distance between notes = 12-tones equal temperament */
        let hz_distance = Math.pow(2, y / 12);
        // rounded to 2 decimals ✅
        // pianoArray[x][y] = Math.round((Math.pow(2, x) * (tuning / 8)) * (hz_distance) * 100) / 100;
        /*  */
        pianoArray[x][y] = (Math.pow(2, x) * (tuning / 8)) * (hz_distance);
        pianoArray[x][y] = pianoArray[x][y].toFixed(5)
        switch (y) {
            case 0:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            case 1:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            case 2:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            case 3:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            case 4:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            case 5:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            case 6:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            case 7:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            case 8:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            case 9:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            case 10:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            case 11:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            case 12:
                console.log(`${x}${notesList[y]}: ${pianoArray[x][y]} hz`);
                break;
            default:
                break;
        }
    }
}
