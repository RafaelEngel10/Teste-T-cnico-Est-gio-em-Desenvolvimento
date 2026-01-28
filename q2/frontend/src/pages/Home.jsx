import { Cadastros } from '../components/Cadastro';
import { Overview } from '../components/Overview';

export default function Home() {
    return (
      <>
        <main>
          <section className='main-section'>
            <div className='section-parent' id='section-parent-1'>
              <div className='div-parent'>
                <Overview />
              </div>
            </div>

            <div className='section-parent' id='section-parent-2'>
              <div className='div-parent'>
                <Cadastros />
              </div>
            </div>

            <div className='section-parent' id='section-parent-3'>

            </div>

            <div className='section-parent' id='section-parent-4'>

            </div>
          </section>
        </main>
      </>
    )
}