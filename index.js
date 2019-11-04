class IndexController {
    constructor() {
        this._alunos = [];
    }

    novoAluno() {
        let id = this._alunos.length + 1;
        let aluno = new Aluno(id, 'Rafa' + id, Math.floor(Math.random() * 10));
        aluno.devedor = true;
        this._alunos.push(aluno);

        console.log('Aluno adicionado ' + aluno);
    }

    mostrarAlunos() {
        document.getElementById('main').innerHTML = this._alunos;
    }

    mostrarAlunosAcimaDaMedia() {

        let alunosAcimaDaMedia = this._alunos.filter(a => a.nota >=5);
        document.getElementById('main').innerHTML = alunosAcimaDaMedia;
    }

    novoCurso(idAluno) {}
}
indexController = new IndexController();
