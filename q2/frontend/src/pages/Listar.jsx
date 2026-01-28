import { useParams } from 'react-router-dom';
 
const list = {
    
}

export function Listar() {
    const { id } = useParams();

    return (
        <div className='section-parent'>
            <div className='form-section'>
                <div className='new-child-div'>
                    <button className='form-button' onClick={() => navigate('/')}>←</button>
                </div>
                {list[id] || <p>Formulário não encontrado</p>}
                <div className='new-child-div' />
            </div>
        </div>
    );
}