import React from 'react'
import Piece from '../Piece/Piece'
import testData from '../testData'

function DisplayPieces() {

    const pieceData = testData;

    function buildPieces(){
        return pieceData.map((data)=> {
            return(
                <div>
                    <Piece data={data} />
                </div>

            )
        });
    }

    return (
            <React.Fragment>
            {buildPieces()}
            </React.Fragment>
    )
}

export default DisplayPieces
