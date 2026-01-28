# CRUD Técnico – Aplicação para Personal Trainer
Este projeto foi desenvolvido como parte de um teste técnico para vaga de estágio em desenvolvimento, com o objetivo de demonstrar conhecimentos em modelagem de banco de dados e operações CRUD. O sistema simula um aplicativo simples onde personais trainers gerenciam alunos, treinos e exercícios.

---

### Objetivo do Sistema
<pre>
O sistema permite que:

- Um Personal Trainer cadastre seus alunos
- Cada Aluno possua um ou mais treinos
- Cada Treino contenha vários exercícios
</pre>

---

### Tecnologias Usadas
<pre>
- React + Vite -
- Nodejs       -
- Express      -
- Nodemon      -
- PostgreSQL   -
</pre>

---

### Pergunta 1 - Modelagem de Banco de Dados

<pre>
<h3> Entidades e Tabelas<br/> ------------------ </h3>
<b>Personal:</b>

| Campo         | Tipo    | Descrição                       |
| ------------- | ------- | ------------------------------- |
| id_personal   | PK      | Identificador único do personal |
| nome          | VARCHAR | Nome completo                   |
| email         | VARCHAR | Email do personal               |
| telefone      | VARCHAR | Telefone para contato           |
| registro_prof | VARCHAR | Registro profissional           |

<b>Aluno:</b>

| Campo           | Tipo    | Descrição                          |
| --------------- | ------- | ---------------------------------- |
| id_aluno        | PK      | Identificador único do aluno       |
| nome            | VARCHAR | Nome do aluno                      |
| data_nascimento | DATE    | Data de aniversário                |
| peso            | FLOAT   | Peso atual                         |
| altura          | FLOAT   | Altura                             |
| objetivo        | TEXT    | Objetivo de treinar                |
| id_personal     | FK      | Referência ao personal responsável |

<b>Treino:</b>

| Campo       | Tipo    | Descrição                     |
| ---------   | ------- | ----------------------------- |
| id_treino   | PK      | Identificador do treino       |
| nome_treino | VARCHAR | Nome do treino (ex: Treino A) |
| data_criacao| DATE    | Data de criação do treino     |
| observacoes | TEXT    | Observações do treino         |
| id_aluno    | FK      | Aluno que pertence o treino   |

<b>Exercicio:</b>

| Campo      | Tipo    | Descrição                  |
| ---------- | ------- | -------------------------- |
| id         | PK      | Identificador do exercício |
| nome       | VARCHAR | Nome do exercício          |
| series     | INT     | Quantidade de séries       |
| repeticoes | INT     | Repetições por série       |
| carga      | FLOAT   | Peso utilizado             |
| descanso   | INT     | Tempo de descanso          |
| ordem      | INT     | Ordem de exercícios        | 
| id_treino  | FK      | Treino ao qual pertence    |

<h3> Relacionamentos<br/> -------------- </h3>
1 Personal →  N Alunos
1 Aluno    →  N Treinos
1 Treino   →  N Exercícios

<h3> Diagramas de Entidades<br/> --------------------- </h3>
[PERSONAL]
 id_personal (PK)
 nome
 email
 telefone
 registro_prof
        │ 1
        │
        │ N
[ALUNO]
 id_aluno (PK)
 id_personal (FK)
 nome
 data_nascimento
 peso
 altura
 objetivo
        │ 1
        │
        │ N
[TREINO]
 id_treino (PK)
 id_aluno (FK)
 nome_treino
 data_criacao
 observacoes
        │ 1
        │
        │ N
[EXERCICIO]
 id_exercicio (PK)
 id_treino (FK)
 nome
 series
 repeticoes
 carga
 descanso
 ordem

<h3>Organograma do Sistema<br/> --------------------</h3>
Personal João
   ├── Aluno Carlos
   │      ├── Treino Cintura-Acima
   │      │      ├── Supino
   │      │      ├── Crucifixo
   │      │      └── Tríceps corda
   │      └── Treino Cintura-Abaixo
   │             ├── Agachamento
   │             └── Leg Press
   │
   └── Aluna Marina
          └── Treino Emagrecimento
                 ├── Esteira
                 ├── Bike
                 └── Abdominal
</pre>

---
### Pergunta 2 – CRUD do Sistema 

<pre>
<b>CREATE (Criar)</b>
1. Cadastro de Personal: 
- Endpoint:
    POST /personais

- Body em JSON:
    {
        "nome": "João Pedro Martins",
        "email": "joaopedromartins03@fit.com.br",
        "telefone": "359999911111",
        "registro_prof": "123456-G/MG"
    }

- Consulta em SQL:
    INSERT INTO personal_app.Personal (nome, email, telefone, registro_prof)
    VALUES ('João Pedro Martins', 'joaopedromartins03@fit.com.br', '359999911111', '123456-G/MG');

---

2. Cadastro de Aluno:
- Endpoint:
    POST /alunos

- Body em JSON:
    {
        "id_personal": 1,
        "nome": "Carlos Souza",
        "data_nascimento": "1998-05-10",
        "peso": 82.5,
        "altura": 1.78,
        "objetivo": "Hipertrofia"
    }

- Consulta em SQL:
    INSERT INTO personal_app.aluno (id_personal, nome, data_nascimento, peso, altura, objetivo)
    VALUES (1, 'Carlos Souza', '1998-05-10', 82.5, 1.78, 'Hipertrofia');

---

3. Cadastro de Treino e Exercícios 
- Endpoint:
    POST /treinos

- Body em JSON:
    {
        "id_aluno": 3,
        "nome_treino": "Treino A - Peito",
        "data_criacao": "2026-01-27",
        "observacoes": "Foco em carga progressiva",
        "exercicios": [
            {
                "nome": "Supino Reto",
                "series": 4,
                "repeticoes": "8-10",
                "carga": "40kg",
                "descanso": "60s",
                "ordem": 1
            },
            {
                "nome": "Crucifixo",
                "series": 3,
                "repeticoes": "12-15",
                "carga": "35kg",
                "descanso": "60s",
                "ordem": 2
            }
        ]
    }

- Consulta em SQL:
    INSERT INTO personal_app.treino (id_aluno, nome_treino, observacoes)
    VALUES (3, 'Treino A - Peito', 'Foco em carga progressiva');

    INSERT INTO personal_app."Exercicio"
    (id_treino, nome, series, repeticoes, carga, descanso, ordem)
    VALUES ($1, $2, $3, $4, $5, $6, $7)

<hr />

<b>READ (Ler/Consultar) </b>
1. Listar alunos de um personal
- Endpoint:
    GET /personais/1/alunos

- Consulta em SQL:
    SELECT * FROM Aluno 
    WHERE id_personal = 1;

---

2. Visualizar treinos de um aluno:
- Endpoint:
    GET /alunos/3/treinos

- Consulta em SQL:
    SELECT * FROM Treino
    WHERE id_aluno = 3;

---

3. Ver exercícios de um treino: 
- Endpoint:
    GET treinos/10/exercicios

- Consulta em SQL:
    SELECT * FROM Exercicio
    WHERE id_treino = 10
    ORDER BY ordem;

<hr />

<b>UPDATE (Atualizar) </b>
1. Atualizar dados do aluno:
- Endpoint: 
    PUT /alunos/3

- Body em JSON:
    {
        "id_personal": 1,
        "nome": "Fulano",
        "data_nascimento": "1998-05-10",
        "peso": 80.0,
        "altura": 1.78,
        "objetivo": "Definição"  <!-- Novo objetivo -->
    }

- Consulta em SQL:
    UPDATE aluno 
        SET id_personal = $1,
            nome = $2,
            data_nascimento = $3,
            peso = $4,
            altura = $5,
            objetivo = $6
    WHERE id_aluno = $7;

---

2. Editar treinos 
- Endpoint:
    PUT /treinos/10

- Body em JSON:
    {
        "nome_treino": "Treino A - Peito",
        "data_criacao": "2026-01-27",
        "observacoes": "Aumentar carga progressivamente"
    }

- Consulta em SQL:
    UPDATE treino
        SET nome_treino = $1,
            data_criacao = $2,
            observacoes = $3
    WHERE id_treino = $4;

---

3. Editar exercícios
- Endpoint:
    PUT /exercicios/1

- Body em JSON:
    {
        "nome": "Supino Reto",
        "series": 4,
        "repeticoes": "8-10",
        "carga": "40kg",
        "descanso": "60s",
        "ordem": 1
    }

- Consulta em SQL:
    UPDATE exercicio
        SET nome = $1,
            series = $2,
            repeticoes = $3,
            carga = $4,
            descanso = $5,
            ordem = $6
    WHERE id_exercicio = $7

<hr />

<b>DELETE (Excluir) </b>
1. Excluir aluno
- Endpoint:
    DELETE /alunos/3

- Consulta em SQL:
    DELETE FROM aluno
    WHERE id_aluno = 3;

---

2. Excluir treino
- Endpoint:
    DELETE /treinos/10

- Consulta em SQL:
    DELETE FROM treino
    WHERE id_treino = 10;

---

3. Excluir exercício
- Endpoint:
    DELETE /exercicios/1

- Consulta em SQL:
    DELETE FROM exercicio
    WHERE id_exercicio = 1;
</pre>