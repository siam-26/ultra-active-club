import './Addbreak.css';

const Addbreak = (props) => {
    const { cards } = props;

    return (
        <div className='break-area-div'>
            <h3>Add A Break</h3>

            <div className='btn-break-area-div'>
                {
                    cards.map(card => <button onClick={() => props.showBreaks_btn(card)} className='btn-break-area' key={card.id}>{card.timer}s</button>)
                }

            </div>


        </div>
    );
}

export default Addbreak;