class Aluno {
    //https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes
    constructor(id, nome, nota) {
        this._id = id;
        this._nome = nome;
        this._nota = nota;
    }

    //http://es6-features.org/#GetterSetter
    get nota() {
        return this._nota;
    }

    passouDeAno(){
        return this._nota >= 5;
    }

    toString() {
        return 'Aluno ' + this._id + ' - nome: ' + this._nome + ' - nota: ' + this._nota + '</br>';
    }
}
