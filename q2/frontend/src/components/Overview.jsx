import { useNavigate } from 'react-router-dom';

export function Overview() {
    const navigate = useNavigate();
    
    return (
        <>
            <div> 
                <h2>Opções de Visualização</h2>
                <div>
                    <button type="button" onClick={() => navigate('/listar/alunos')}>Listar alunos por personal</button>
                    <button type="button" onClick={() => navigate('/listar/treinos')}>Ver treinos por aluno</button>
                </div>
            </div>
        </>
    );
}