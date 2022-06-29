## Ideia inicial:
### Steps:
1. Ao abrir o app haverá um input onde colocará um nome para sua conta;
2. Depois que colocar o nome, receberá 10 pokebolas vinculados a essa "conta" (id + nome);
3. Haverá dois botões, chamado "encontrar pokemon" e "ver pokedex";
4. Ao clicar no botão "encontrar pokemon", mostrará um pokemon aleatório da api pokeApi e dois botões: "Jogar pokebola" e "correr";
5. Ao clicar em "jogar poke bola" gastará uma pokebola na sua conta e terá X% de chance para pegar o pokemon;
6. Se caso pokemon for pego, ele sera vinculado na pokedex da conta do usuário;
7. WIP....

### Estrutura Inicial da API PokeGoal:
```
[
    players: [
        id(any number): {
            name: string,
            items: {
                pokeballs: number,
                fruits: [ string ],
            }
            pokedex: {
                getted: [ string ],
                finded: [ string ]
            }
        }
    ],

    pokedex: { (getPokeApi) }
]
```
