import { useState } from "react";

export function AlunosporPersonal() {
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [alunos, setAlunos] = useState([]);

    const [form, setForm] = useState({
        id_personal: ""
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setErro("");
        setMensagem("");
        setAlunos([]);
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:3003/personal/${form.id_personal}/alunos`);

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Erro ao buscar alunos");
            }

            setAlunos(data);
            setMensagem("Alunos carregados com sucesso!");
        } catch (err) {
            setErro(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h2>Listar Alunos por Personal</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="id_personal"
                    placeholder="ID do Personal"
                    value={form.id_personal}
                    onChange={handleChange}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Buscando..." : "Buscar"}
                </button>
            </form>

            {erro && <p style={{ color: "red" }}>{erro}</p>}
            {mensagem && <p style={{ color: "green" }}>{mensagem}</p>}

            {alunos.length > 0 && (
                <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Data de Nascimento</th>
                            <th>Peso (kg)</th>
                            <th>Altura (m)</th>
                            <th>Objetivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((aluno) => (
                            <tr key={aluno.id}>
                                <td>{aluno.nome}</td>
                                <td>{new Date(aluno.data_nascimento).toLocaleDateString()}</td>
                                <td>{aluno.peso}</td>
                                <td>{aluno.altura}</td>
                                <td>{aluno.objetivo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
