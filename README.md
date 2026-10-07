# Gestor Público Amigo

Crie um Sistema de Gestão Patrimonial para órgãos públicos municipais (Prefeituras e Câmaras Municipais), seguindo as normas do PCASP, NBC TSP e orientações dos Tribunais de Contas.

O sistema deve possuir:

# MÓDULO DE PATRIMÔNIO

## Cadastro de Bens

Campos:

- ID automático

- Número de Tombamento automático

- Código de Barras

- QR Code

- Descrição do Bem

- Especificação Técnica

- Grupo Patrimonial

- Conta PCASP

- Data de Aquisição

- Valor de Aquisição

- Valor Atual

- Vida Útil

- Taxa de Depreciação

- Data de Incorporação

- Fornecedor

- Número da Nota Fiscal

- Número do Empenho

- Fonte de Recurso

- Localização

- Responsável

- Estado de Conservação

- Situação do Bem

  - Ativo

  - Ocioso

  - Em Manutenção

  - Inservível

  - Baixado

## Grupos Patrimoniais

Cadastrar os seguintes grupos:

1. Máquinas, Aparelhos, Equipamentos e Ferramentas

PCASP: 1.2.3.1.1.01

2. Bens de Informática

PCASP: 1.2.3.1.1.02

3. Móveis e Utensílios

PCASP: 1.2.3.1.1.03

4. Materiais Culturais e de Comunicação

PCASP: 1.2.3.1.1.04

5. Veículos

PCASP: 1.2.3.1.1.05

6. Demais Bens Móveis

PCASP: 1.2.3.1.1.99

7. Bens Imóveis de Uso Especial

PCASP: 1.2.3.2.1.01

8. Bens Dominicais

PCASP: 1.2.3.2.1.02

9. Bens de Uso Comum do Povo

PCASP: 1.2.3.2.1.03

# MÓDULO DE MOVIMENTAÇÃO

Permitir:

- Transferência entre setores

- Transferência entre responsáveis

- Alteração de localização

- Registro de manutenção

- Registro de empréstimo

- Registro de devolução

Gerar histórico completo de movimentações.

# MÓDULO DE INVENTÁRIO

Permitir:

- Inventário anual

- Inventário extraordinário

- Conferência por QR Code

- Conferência manual

- Registro de divergências

- Emissão de relatório de inconsistências

Status:

- Encontrado

- Não Encontrado

- Danificado

- Inservível

# MÓDULO DE DEPRECIAÇÃO

Calcular automaticamente:

- Valor depreciado

- Valor residual

- Valor contábil líquido

- Depreciação mensal

- Depreciação anual

Manter histórico dos cálculos.

# MÓDULO DE BAIXA

Tipos:

- Alienação

- Leilão

- Doação

- Extravio

- Furto

- Inservibilidade

- Sucateamento

Exigir:

- Processo Administrativo

- Ato de Autorização

- Data da Baixa

- Motivo da Baixa

# RELATÓRIOS

Gerar:

- Livro de Inventário

- Relação Geral de Bens

- Relação por Responsável

- Relação por Setor

- Relação por Conta PCASP

- Bens Baixados

- Bens por Estado de Conservação

- Termo de Responsabilidade

- Termo de Transferência

- Termo de Baixa

- Ficha Individual do Bem

- Relatório de Depreciação

# DASHBOARD

Exibir:

- Quantidade total de bens

- Valor total do patrimônio

- Bens por grupo

- Bens por setor

- Bens em manutenção

- Bens baixados

- Bens pendentes de inventário

# SEGURANÇA

Perfis:

- Administrador

- Patrimônio

- Controle Interno

- Contabilidade

- Consulta

Registrar log completo de auditoria.

# TECNOLOGIA

- Interface moderna

- Responsiva para celular e computador

- Banco de dados PostgreSQL

- Supabase Authentication

- Upload de fotos

- Geração de PDF

- Exportação Excel

- Impressão de etiquetas QR Code

- Backup automático

Utilizar linguagem em português brasileiro e layout institucional para órgãos públicos.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://acervo-municipal-fluido.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d020e110-0a0e-4b6e-8757-a0ff16ec2254).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
