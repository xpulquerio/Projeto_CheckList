import styles from './Table.module.css';
import { useState } from 'react';

const Table = ({ files }) => {
    const [id, setId] = useState("");;
    const [name, setName] = useState("");
    const [status, setStatus] = useState('');
    const [type, setType] = useState("");
    const situation = [
        { id: 1, value: '', name: 'Todos' },
        { id: 2, value: 'Assistido', name: 'Assistido' },
        { id: 3, value: 'Lendo', name: 'Lendo' },
        { id: 4, value: 'Lido', name: 'Lido' },
        { id: 5, value: 'Para assistir', name: 'Para assistir' },
        { id: 6, value: 'Para ler', name: 'Para ler' },
        { id: 7, value: 'Parado', name: 'Parado' }]

    const chooseStyleStatus = (x) => {
        var status = styles.App_Table_td_3;
        if (x === "Assistido" || x === "Lido") {
            status = styles.App_Table_td_1;
        } else if (x === "Assistindo" || x === "Lendo") {
            status = styles.App_Table_td_2;
        } else if (x === "Parado") {
            status = styles.App_Table_td_4;
        }
        return status;
    }
    const listItens = () => files.filter(file =>
        (file.id.toString().indexOf(id) !== -1) &&
        (file.name.toLowerCase().indexOf(name.toLowerCase()) !== -1) &&
        (file.status.toLowerCase().indexOf(status.toLowerCase()) !== -1) &&
        (file.type.toLowerCase().indexOf(type.toLowerCase()) !== -1)

    ).map((file) =>
        <tr className={styles.App_Table_tr}>
            <td className={styles.App_Table_td}>{file.id}</td>
            <td className={styles.App_Table_td} style={{ textAlign: "justify", fontWeight: "bold" }}>{file.name}</td>
            <td className={(chooseStyleStatus(file.status))}>{file.status}</td>
            <td className={styles.App_Table_td}>{file.type}</td>
        </tr>
    )

    const handleId = (e) => {
        //e.preventDefault();
        setId(e.target.value);
    }

    const handleName = (e) => {
        //e.preventDefault();
        setName(e.target.value);
    }

    const handleStatus = (e) => {
        // e.preventDefault();
        setStatus(e.target.value);
    }

    const handleType = (e) => {
        // e.preventDefault();
        setType(e.target.value);
    }

    return (
        <div>
            <div className={styles.searchContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <form>
                                    <div>
                                        <label>
                                            <span>ID: </span>
                                            <input type="text" name="ID" placeholder="ID" onChange={handleId} value={id} />
                                        </label>
                                    </div>
                                </form>
                            </th>
                            <th>
                                <form>
                                    <div>
                                        <label>
                                            <span>NOME: </span>
                                            <input type="text" name="Título" placeholder="Título" onChange={handleName} value={name} />
                                        </label>
                                    </div>
                                </form>
                            </th>
                            <th>
                                <form>
                                    <div>
                                        <label>
                                            <select name="Status" onChange={handleStatus} value={status}>
                                                {situation.map((option) => (
                                                    <option key={option.id} value={option.value}>{option.name}</option>
                                                ))
                                                }
                                            </select>
                                        </label>
                                    </div>
                                </form>
                            </th>
                            <th >
                                <form>
                                    <div>
                                        <label>
                                            <span>TIPO: </span>
                                            <input type="text" name="Tipo" placeholder="Tipo" onChange={handleType} value={type} />
                                        </label>
                                    </div>
                                </form>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div>
                <table>
                    <thead className={styles.App_Table_HeadAndFoot}>
                        <tr>
                            <th>ID</th>
                            <th>TÍTULO</th>
                            <th>STATUS</th>
                            <th>TIPO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItens()}
                    </tbody>
                    <tfoot className={styles.App_Table_HeadAndFoot}>
                        <tr>
                            <td>Resultados encontrados</td>
                            <td>{listItens().length}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    )
}

export default Table