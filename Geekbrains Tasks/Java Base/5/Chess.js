<script>
    let chess = {

        gameContainer: document.getElementByClassName('game'),

    renderMap() {
        let rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    let cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

    for (let row = 0; row < rows.length; row++) {
        let tr = document.createElement('tr');
    this.gameContainer.appendchild(tr);
    for (let col = 0; col < cols.length; col++) {
        let td = document.createElement('td');
    tr.appendChild(td);
    if (rows[row] === 0 && cols[col] !== 0) {

        td.innerHTML = cols[col];
                    } else if (cols[col] === 0 && rows[row] !== 0) {

        td.innerHTML = rows[row].toString();
                    }

    if (this.isCellIsBlack(row, col)) {
        td.style.backgroundColor = 'black';
                    }

                }

            }

        },
    isCellIsBlack(rowNum, colNum) {

            if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
                return false;
            }


    return (rowNum % 2 === 1 && colNum % 2 === 0) || (rowNum % 2 === 0 && colNum % 2 === 1);

        },
    };

    console.log(chess.renderMap());












</script>