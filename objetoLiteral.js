const user = {
    nome : "Eliezer Miguel",
    email: "eliezermiguel@email.com",
    nascimento : "01/11/2000",
    role : "admin",
    ativo : true,
    exibirInfos : function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "mariana@email.com",
    role: "admin",
    criarCurso(){
        console.log("Curso criado!")
    }
}

/* O metodo ultilizado abaixo serve para unir dois objetos atras de heranca, o primeiro parametro a ser declarado é o objeto que vai herdar, e segundo é o objeto que vai doar.*/
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

//user.exibirInfos()

const exibir = function(){ 
    console.log(this.nome)
}
/*O metodo bind ele serve para atrelar um contexto as funcionalidades ao qual vc esta ultilizando, neste caso ele esta sendo ultilizado para ligar a funcao ao objeto*/
const exibirNome = exibir.bind(user)

//exibirNome()