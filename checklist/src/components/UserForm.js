import React from 'react'

const UserForm = () => {
    // 6 - Controlled Inputs
    // 3 - Gerenciamento de dados;
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [descricao, setDescricao] = useState (user ? user.descricao : '');
    const [role, setRole] = useState (user ? user.role : ' ');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault(); //Não recarrega a página depois de enviar o formulário
        console.log("Enviando o formulário");
        console.log (name, email, descricao, role);

        //Validação
        //Envio

        //7 - Limpar formulários!
        setName('');
        setEmail('');
        setDescricao('');
        setRole(' ');}

  return (
    <div>
            <form onSubmit={}>
              
                <div>
                    <label>
                        <span>E-mail</span>
                        {/* Simplificação de manipulação de State */}
                        <input type="email" name="email" placeholder="Digite seu email aqui" value={email}></input>
                    </label>
                </div>
                <input type="submit" value="Enviar"/>
                <input type="submit" value="Limpar"/>
                <a href="./">Esqueceu a senha ?</a>
            </form>
        </div>
  )
}

export default UserForm