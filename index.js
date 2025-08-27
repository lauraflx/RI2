function Telefone(ddd, numero) {
    this.ddd = ddd
    this.numero = numero

    this.getDescricao = function() {
        return "DDD: " + this.ddd + " - Número: " + this.numero
    }
}

function Endereco(cidade, rua, numero) {
    this.cidade = cidade
    this.rua = rua
    this.numero = numero

    this.getDescricao = function() {
        return "Rua: " + this.rua + ", " + this.numero + "-" + this.cidade
    }
}

function Cliente(nome, telefone, email, endereco) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.endereco = endereco

    this.getDescricao = function() {
        return "Cliente: " + this.nome + 
               "\nEmail: " + this.email.toLowerCase() +
               "\n" + this.telefone.getDescricao() + 
               "\n" + this.endereco.getDescricao()
    }
}

let tel1 = new Telefone("64", "1111-1111")
let end1 = new Endereco("Goiás", "Parque Morada do Sol", 1233)
let cli1 = new Cliente("Sara Heloísa", tel1, "heloisasara@gmail.com", end1)

let tel2 = new Telefone("64", "3333-3333")
let end2 = new Endereco("Goiás", "Corrego do Sapo", 102)
let cli2 = new Cliente("William Berry", tel2, "berrywill@gmail.com", end2)

let tel3 = new Telefone("64", "7777-7777")
let end3 = new Endereco("Goiás", "Rua Coreia", 1)
let cli3 = new Cliente("Isadora Chain", tel3, "inchainsisa@gmail.com", end3)

let clientes = [cli1, cli2, cli3]

function ordenarClientes(lista) {
    return lista.sort(function(c1, c2) {
        return c1.nome.toLowerCase().localeCompare(c2.nome.toLowerCase())
    })
}

console.log("--- Informações dos Clientes: ---")
let clientesOrdenados = ordenarClientes(clientes)
clientesOrdenados.forEach(c => {
    console.log(c.getDescricao())
    console.log("---------------------------------") 
})
