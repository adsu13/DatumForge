# Generator API

Esta API gera números de CPF e RG válidos, além de nomes completos com base em listas de nomes masculinos e femininos. Ela pode ser utilizada para criar dados fictícios para testes em sistemas e aplicações, como formulários de cadastro, validação de dados e testes de software.

## Funcionalidades

- Gerar CPF válidos (com ou sem pontuação)
- Gerar RG válidos (com ou sem pontuação, e com a opção de especificar o estado)
- Gerar nomes completos (masculinos e femininos)
- Suporte para diferentes gêneros no gerador de nomes

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/cpf-generator.git

## Uso

1. Gerar CPF
- Endpoint: `/api/generateCpf?pontuacao=`
- Método: `GET`
- Parâmetros:
- `pontuacao`: `true` para cpf com pontuacao ou `false` para cpf sem pontuacao
- Exemplo de uso:
{
  "cpf": "580.793.290-01"
}
{
  "cpf": "58079329001"
}

2. Gerar RG
- Endpoint: `/api/generateRg?estado=&pontuacao=`
- Método: `GET`

- Parâmetros:
- `estado`: para especificar o estado do RG `sigladoestado`
- `pontuacao`: `true` para RG com pontuacao ou `false` para RG sem pontuacao

- Exemplo de uso:
{
  "rg": "82.763.294-0"
}
{
  "rg": "827632940"
}
3. Gerar Nome
- Endpoint: `/api/generateName?gender=`
- Método: `GET`

- Parâmetros:
- `gender`: `M` para masculino ou `F` para feminino

- Exemplo de uso:
{
  "name": "Maria Oliveira Neta"
}