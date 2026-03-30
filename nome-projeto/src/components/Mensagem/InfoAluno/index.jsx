import './style.css'

function InfoAluno () {
    const nome ="joão Silva"
    const idade = 23
    const curso = "Desenvolviimento de sistemas"

    return(
        <div className='info-aluno'>
            <h2>Informações do Aluno: </h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Curso: {curso}</p>
        </div>
    )
}
export default InfoAluno