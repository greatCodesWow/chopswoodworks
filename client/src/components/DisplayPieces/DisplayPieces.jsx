import Piece from '../Piece/Piece';


function DisplayPieces({openModal}) {
    

    /* create a function that gets however many pieces there are total, and sets them up in a grid layout that outputs them into the piece component */
    return (
        <div className="container">
            <div>
                <Piece openModal={openModal} />
            </div>
        </div>
    )
}

export default DisplayPieces
