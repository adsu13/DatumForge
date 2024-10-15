# CPF Generator API

Esta API gera números de CPF válidos e nomes completos com base em listas de nomes masculinos e femininos. Ela pode ser utilizada para criar dados fictícios para testes em sistemas e aplicações, como formulários de cadastro, validação de dados e testes de software.

## Funcionalidades

- Gerar CPF válidos
- Gerar nomes completos (masculinos e femininos)
- Suporte para diferentes gêneros no gerador de nomes

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/cpf-generator.git

## Uso

1. Gerar CPF
- Endpoint: `/api/generateCpf`
- Método: `GET`
- Exemplo de uso:
{
  "cpf": "58079329001"
}

2. Gerar Nome
- Endpoint: `/api/generateName`
- Método: `GET`

- Parâmetros:
- `gender`: `M` para masculino ou `F` para feminino

- Exemplo de uso:
{
  "name": "Maria Oliveira Neta"
}