import './Piece.css'

function Piece({openModal}) {

    return (
        <div className="card">
            <img src="" alt="art" />
            <div class="container">
                <h4><b>Name</b></h4>
                <button className="btn-openModal" onClick={openModal}>Open Modal</button>
            </div>
        </div>
    )
}

export default Piece