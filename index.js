class personagens {

constructor (nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    toAttack(){

        let attack = "";

        switch (this.tipo) {
            case "mago":
                attack = "magia";
                break;
            case "guerreiro":
                attack = "espada";
                break;
            case "monge":
                attack = "artes marciais";
                break;
            case 'ninja':
                attack = "shuriken";
                break;
            default:
                attack = "atacou";
                break;
        }
    console.log(`O ${this.tipo} atacou usando ${attack}`)
    }
}

let personagemUm = new personagens ("Aragorn", 30, "guerreiro")
let personagemDois = new personagens ("Gandalf", 1000, "mago")
let personagemTres = new personagens ("Bruce Lee", 35, "monge")
let personagemQuatro = new personagens ("Hanzo", 28, "ninja")


personagemUm.toAttack()
personagemDois.toAttack()
personagemTres.toAttack()
personagemQuatro.toAttack()