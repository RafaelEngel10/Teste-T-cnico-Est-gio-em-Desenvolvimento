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