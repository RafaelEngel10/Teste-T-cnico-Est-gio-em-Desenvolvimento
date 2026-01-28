import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function Cadastros() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    return (
        <>
            <div id='main-section'>
                <div className='child-div'>
                    <h2>Cadastros</h2>
                    <div style={{ gap: '10px' }}>
                        <button type='button' onClick={() => navigate('/cadastrar/personal')}>Adicionar novo personal</button>  
                        <button type='button' onClick={() => navigate('/cadastrar/aluno')}>Adicionar novo aluno</button>  
                        <button type='button' onClick={() => navigate('/cadastrar/treino')}>Adicionar novo treino e exercícios</button>  
                    </div>  
                </div>
            </div>
        </>
    )
}