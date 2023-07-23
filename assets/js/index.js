const $frecuencyTableDOM = document.getElementById("f-table");
const $tuningInput = document.getElementById("tuningInput");
const $calculateButton = document.getElementById("calculateButton");

const notesList = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

function calculateFrequencies(tuning) {
    const pianoArray = [...Array(10)].map(() => Array(12).fill(0));

    for (let x = 0; x < pianoArray.length; x++) {
        for (let y = 0; y < pianoArray[x].length; y++) {
            const hz_distance = Math.pow(2, y / 12);
            pianoArray[x][y] = (Math.pow(2, x) * (tuning / 8)) * hz_distance;
            pianoArray[x][y] = pianoArray[x][y].toFixed(5);
        }
    }

    return pianoArray;
}

$calculateButton.addEventListener("click", () => {
    const tuning = parseFloat($tuningInput.value);

    if (isNaN(tuning) || tuning < 220 || tuning > 880) {
        alert("Invalid Tuning Frequency");
    } else {
        const pianoArray = calculateFrequencies(tuning);
        populateTable(pianoArray);
    }
});

function populateTable(pianoArray) {
    $frecuencyTableDOM.innerHTML = ""; // Clear existing content

    for (let x = 0; x < pianoArray.length; x++) {
        for (let y = 0; y < pianoArray[x].length; y++) {
            const note = `${x}${notesList[y]}`;
            const frequency = `${pianoArray[x][y]} hz`;

            const tr = document.createElement("tr");
            switch (y) {
                case 1:
                case 4:
                case 6:
                case 9:
                case 11:
                    tr.classList.add("f-table__row--black");
                    break;
                default:
                    tr.classList.add("f-table__row");
                    break;
            }

            const noteCell = document.createElement("td");
            noteCell.classList.add("f-table__note");
            noteCell.textContent = note;
            tr.appendChild(noteCell);

            const frequencyCell = document.createElement("td");
            frequencyCell.classList.add("f-table__frecuency");
            frequencyCell.textContent = frequency;
            tr.appendChild(frequencyCell);

            $frecuencyTableDOM.appendChild(tr);
        }
    }
}
