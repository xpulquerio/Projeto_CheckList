import "./UserForm.css"
import { useState } from 'react'

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [descricao, setDescricao] = useState('');
    const [role, setRole] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault(); //Não recarrega a página depois de enviar o formulário

        //Validação
        //Envio

        //7 - Limpar formulários!
        setName('');
        setEmail('');
        setDescricao('');
        setRole(' ');
    }

    return (
        <div className="App_form">
            <form onSubmit>
                <div>
                    <label>
                        <span>User </span>
                        
                        <input type="text" name="user" placeholder=""></input>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password </span>
                        <input type="password" name="password" placeholder=""></input>
                    </label>
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                    <input type="submit" value="Limpar" /></div>
                <div>
                    <a href="./">Forgot your password ?</a>
                </div>
            </form>
        </div>
    )
}

export default UserForm