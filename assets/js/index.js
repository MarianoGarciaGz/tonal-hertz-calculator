const $frecuencyTableDOM = document.getElementById("f-table");
const $tuningInput = document.getElementById("tuningInput");
const $calculateButton = document.getElementById("calculateButton");

const notesList = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function calculateFrequencies(tuning) {
    const pianoArray = [...Array(10)].map(() => Array(12).fill(0));

    for (let x = 0; x < pianoArray.length; x++) {
        for (let y = 0; y < pianoArray[x].length; y++) {
            const hz_distance = Math.pow(2, (y - 9) / 12);
            pianoArray[x][y] = (Math.pow(2, x) * (tuning / 16)) * hz_distance;
            pianoArray[x][y] = Math.trunc(pianoArray[x][y] * 100000) / 100000;
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
    $frecuencyTableDOM.innerHTML = ` <tr class="f-table__headers">
                        <th class="f-table__h">Note</th>
                        <th class="f-table__h">Frequency</th>
                    </tr>`;
    for (let x = pianoArray.length - 1; x >= 0; x--) {
        for (let y = 11; y >= 0; y--) {
            const note = `${x}${notesList[y]}`;
            const frequency = `${pianoArray[x][y]} hz`;

            const tr = document.createElement("tr");
            switch (y) {
                case 1:
                case 3:
                case 6:
                case 8:
                case 10:
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
