let Chess = {
    trCount: 8,
    tdCount: 8,
    CellElements: [],


    InitField() {


        this.CellElements = [];

        let WhiteChess = document.createElement('White');

        WhiteChess.classList.add('.white')

        let BlackChess = document.createElement('Black');

        WhiteChess.classList.add('.black')
    }

}
