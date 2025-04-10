import { cliente } from "./cliente";

class contaBancaria implements cliente {
    nome: String
    id: number
    endereco: String
    telefone: number
    renda: number
    tipo: String
    taxaJuros: number
    saldo: number

    constructor(nome: String, id: number, endereco: String, telefone: number, renda: number, tipo: String, taxaJuros: number, saldo: number) {
        this.nome = nome
        this.id = id
        this.endereco = endereco
        this.telefone = telefone
        this.renda = renda
        this.tipo = tipo
        this.taxaJuros = taxaJuros
        this.saldo = saldo
    }
    criarContaCorrente(): void {
        if (this.renda >= 500) {
            this.tipo = "Corrente"
            console.log(`Conta corrente criada`)
        }
        console.log(`A conta não pode ser criada pois não tem saldo maior que $500`)
    }
    criarContaPoupanca(): void {

        this.tipo = "Poupanca"
        console.log(`Conta poupança criada`)
    }
    calculartaxa(): void {
        this.taxaJuros = 0.02 * this.renda
        console.log(`Taxa Calculada`)

    }

    deposito(valor: number): void {
        this.saldo += valor
        console.log(`Valor Depositado`)

    }
    saque(valor: number): void {

        if (this.tipo == "corrente") {
            if (valor < (this.saldo + 100)) {
                this.saldo -= valor
                console.log(`Valor Sacado`)
            }
            else {
                console.log(`O valor retirado é superior ao saldo`)
            }


        } else {

            if (valor < this.saldo) {
                this.saldo -= valor
                console.log(`Valor Sacado`)
            }
            else {
                console.log(`O valor retirado é superior ao saldo`)
            }
        }
    }
    transferencia(valor: number): void {


        if (valor < (this.saldo)) {
            this.saldo -= valor
            console.log(`Valor transferido`)
        }
        else {
            console.log(`O valor trasferido é superior ao saldo`)
        }
    }
    verificarsaldo(): void {
        console.log(`saldo: ${this.saldo}`)

    }

}
const conta = new contaBancaria("Claiton", 1, "Rua Missler", 996917305, 1000, "sem conta", 0, 2000)
conta.criarContaCorrente()
conta.calculartaxa()
conta.deposito(200)
conta.saque(150)
conta.transferencia(50)
conta.verificarsaldo()












