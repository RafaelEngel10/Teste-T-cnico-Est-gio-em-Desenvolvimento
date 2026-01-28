import { useState } from "react";

export function TreinosporAluno() {
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [treinos, setTreinos] = useState([]);

    const [form, setForm] = useState({
        id_aluno: ""
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setErro("");
        setMensagem("");
        setTreinos([]);
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:3003/alunos/${form.id_aluno}/treinos`);

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Erro ao buscar treinos");
            }

            setTreinos(data);
            setMensagem("Treinos carregados com sucesso!");
        } catch (err) {
            setErro(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h2>Listar Treinos por Aluno</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="id_aluno"
                    placeholder="ID do Aluno"
                    value={form.id_aluno}
                    onChange={handleChange}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Buscando..." : "Buscar"}
                </button>
            </form>

            {erro && <p style={{ color: "red" }}>{erro}</p>}
            {mensagem && <p style={{ color: "green" }}>{mensagem}</p>}

            {treinos.length > 0 && (
                <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>Nome do Treino</th>
                            <th>Data de Criação</th>
                            <th>Observações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {treinos.map((treino) => (
                            <tr key={treino.id_treino}>
                                <td>{treino.nome_treino}</td>
                                <td>{new Date(treino.data_criacao).toLocaleDateString()}</td>
                                <td>{treino.observacoes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}