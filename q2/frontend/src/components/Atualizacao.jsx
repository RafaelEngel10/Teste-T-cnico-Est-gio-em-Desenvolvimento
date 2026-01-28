import { useNavigate } from 'react-router-dom';

export function Atualizacao() {
    const navigate = useNavigate();

    return (
        <>
            <div id='main-section'>
                <div className='child-div'>
                    <h2>Atualizações</h2>
                    <div style={{ gap: '10px' }}>
                        <button type='button' onClick={() => navigate('/atualizar/aluno')}>Atualizar dados de Aluno</button>  
                        <button type='button' onClick={() => navigate('/atualizar/treino')}>Editar treinos ou exercícios</button>   
                    </div>  
                </div>
            </div>
        </>
    );
}