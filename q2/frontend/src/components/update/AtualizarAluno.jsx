import { useState } from "react";

export function AtualizarAluno() {
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");
    const [mensagem, setMensagem] = useState("");

    const [form, setForm] = useState({
        id_aluno: "",
        id_personal: "",
        nome: "",
        data_nascimento: "",
        peso: "",
        altura: "",
        objetivo: ""
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setErro("");
        setMensagem("");
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:3003/alunos/${form.id_aluno}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Erro ao atualizar aluno");
            }

            console.log("Sucesso:", data);
        } catch (err) {
            console.error("Erro:", err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h2>Atualizar dados de Aluno</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="id_aluno"
                    placeholder="ID do Aluno"
                    value={form.id_aluno}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="id_personal"
                    placeholder="ID do Personal"
                    value={form.id_personal}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="nome"
                    placeholder="Nome do Aluno"
                    value={form.nome}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="data_nascimento"
                    placeholder="Data de Nascimento"
                    value={form.data_nascimento}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="peso"
                    placeholder="Peso em Kilos (Kgs)"
                    value={form.peso}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="altura"
                    placeholder="Altura em metros"
                    value={form.altura}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="objetivo"
                    placeholder="Objetivo"
                    value={form.objetivo}
                    onChange={handleChange}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Atualizando..." : "Atualizar"}
                </button>
            </form>

            {erro && <p style={{ color: "red" }}>{erro}</p>}
            {mensagem && <p style={{ color: "green" }}>{mensagem}</p>}
        </div>
    );
}