import { useState } from 'react'
import { PersonalForm } from './components/PersonalForm'

export default function App() {
  const [count, setCount] = useState(0)

  function handleClick(id, newId) {
    const doc = document.getElementById(id);
    doc.style.display = `none`;

    const newDoc = document.getElementById(newId);
    newDoc.style.display = `flex`;
    return
  }

  return (
    <>
      <main>
        <section id='main-section'>
          <div>
            <div>
              <button type='button' onClick={() => handleClick('main-section', 'form-section')}>Adicionar novo personal</button>  
              <button type='button'>Adicionar novo aluno</button>  
              <button type='button'>Adicionar novo treino</button>  
              <button type='button'>Adicionar novo exercício</button>  
            </div>  
          </div>
          <div>

          </div>
          <div>

          </div>
        </section >
        <section id='form-section' style={{ display: 'none' }}>
          <PersonalForm />
        </section>
      </main>
    </>
  )
}