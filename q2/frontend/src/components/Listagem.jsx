

export function Listagem() {
    /*
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);


  useEffect(() => {
    if (!id_personal) return;

    async function fetchAlunos() {
      try {
        setLoading(true);
        const response = await fetch(`/personal/${id_personal}/alunos`);

        if (!response.ok) {
          throw new Error("Erro ao buscar alunos");
        }

        const data = await response.json();
        setAlunos(data);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAlunos();
  }, [id_personal]);

  if (loading) return <p>Carregando alunos...</p>;
  if (erro) return <p style={{ color: "red" }}>Erro: {erro}</p>;
  if (alunos.length === 0) return <p>Nenhum aluno cadastrado.</p>;
*/
    return (
    <div>
      <h2>Alunos do Personal</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>Objetivo</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id_aluno}>
              <td>{aluno.nome}</td>
              <td>{aluno.altura}</td>
              <td>{aluno.peso}</td>
              <td>
                <button>
                  Ver Treinos
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
}