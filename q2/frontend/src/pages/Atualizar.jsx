import { useNavigate, useParams } from 'react-router-dom';
import { AtualizarAluno } from '../components/update/AtualizarAluno';
import { EditarTreinoseExercicios } from '../components/update/EditarTreinoseExercicios';

const forms = {
  aluno: <AtualizarAluno />,
  treino: <EditarTreinoseExercicios />
};

export default function Atualizar() {
    const navigate = useNavigate();
    const { id } = useParams(); 

    return (
        <div className='section-parent'>
            <div className='form-section'>
                <div className='new-child-div'>
                    <button className='form-button' onClick={() => navigate('/')}>←</button>
                </div>
                {forms[id] || <p>Formulário não encontrado</p>}
                <div className='new-child-div' />
            </div>
        </div>
    );
}