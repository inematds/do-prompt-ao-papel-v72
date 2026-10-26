# Do prompt ao papel

Curso aberto e gratuito do INEMA.CLUB, em 8 aulas (formato INEMA Learning v7.2), em português, inglês e espanhol.

**https://inematds.github.io/do-prompt-ao-papel-v72/** · [English](https://inematds.github.io/do-prompt-ao-papel-v72/en/) · [Español](https://inematds.github.io/do-prompt-ao-papel-v72/es/)

Primeiro a gente escrevia o pedido palavra por palavra (engenharia de prompt). Depois aprendeu a dar contexto (engenharia de contexto). Agora a IA trabalha como alguém da equipe, e a habilidade que vale é gerenciar (engenharia de papel).

| # | aula | prática |
|---|---|---|
| 1 | Três eras: do prompt ao papel | diagnosticar 5 pedidos reais |
| 2 | A era do prompt: o que morreu e o que ficou | auditar um prompt por subtração |
| 3 | A era do contexto | arquivo de regras + lição de um erro real |
| 4 | A era do papel: a ficha de função | ficha conferida na página |
| 5 | Objetivo que dá para medir (SMART) | simulação com um agente novo + objetivo conferido |
| 6 | Treinar em ciclo | 5 rodadas, lista de correções, procedimento padrão |
| 7 | Custo | tabela de tarefas e uma semana anotada |
| 8 | A mesma tarefa nas três eras | comparação + plano com datas |

## O processo, do início ao fim

1. 🧠 Plano das aulas (`PLANO.md`).
2. 🧠 Conteúdo em `conteudo/pt/` (JSON); imagens em `assets/img/` (Codex image_gen, capa composta por `capa/compor-capa.cjs`).
3. ⚙️ `python3 gerar.py && python3 validar.py --links` e `node ~/.claude/skills/formato-curso-v72/scripts/conferir-tela.cjs .`
4. 🤖 Revisor independente (agente novo, persona do público).
5. ⚙️ `python3 ~/.claude/skills/formato-curso-v72/scripts/traduzir.py . en es` (tradutor central, assinatura) → `gerar.py --lang en|es` → validar.
6. 🧠 Commit + push (GitHub Pages da raiz da main). Vídeos na release `video-v1.0.0`.

Conteúdo: CC BY 4.0 · INEMA.CLUB, conteúdo aberto e gratuito.

## Mais no INEMA.CLUB

- [Ficha completa deste curso](https://www.inema.club/cursos/387-do-prompt-ao-papel-gerencie-a-ia-como-alguem-da-equipe/)
- [Guia: como aprender inteligência artificial](https://www.inema.club/aprender-inteligencia-artificial/)
- [Todos os cursos](https://www.inema.club/cursos/)
