import * as React from 'react';
import './styles.css';
import lada from './lada.jpg';


function AutomobileNews() {
    return (
        <section className='automobileContent'>
            <h1>Автоновости</h1>
            <p>Эта мачина гордость отечественного автопрома:</p>
            <img alt="automobile" src={lada}/>
        </section>
    )
}

export default AutomobileNews;