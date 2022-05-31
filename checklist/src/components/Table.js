import styles from './Table.module.css';
import { useState } from 'react';

const Table = ({ files }) => {
    const [id, setId] = useState("");;
    const [title, setTitle] = useState("");
    const [situation, setSituation] = useState('');
    const [type, setType] = useState("");
    const status = [
        { id: 1, value: '', name: 'Todos' },
        { id: 2, value: 'Assistido', name: 'Assistido' },
        { id: 3, value: 'Assistindo', name: 'Assistindo' },
        { id: 4, value: 'Lendo', name: 'Lendo' },
        { id: 5, value: 'Lido', name: 'Lido' },
        { id: 6, value: 'Para assistir', name: 'Para assistir' },
        { id: 7, value: 'Para ler', name: 'Para ler' },
        { id: 8, value: 'Parado', name: 'Parado' }]

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
        (file.title.toLowerCase().indexOf(title.toLowerCase()) !== -1) &&
        (file.situation.toLowerCase().indexOf(situation.toLowerCase()) !== -1) &&
        (file.type.toLowerCase().indexOf(type.toLowerCase()) !== -1)

    ).map((file) =>
        <tr className={styles.App_Table_tr}>
            <td className={styles.App_Table_td}>{file.id}</td>
            <td className={styles.App_Table_td} style={{ textAlign: "justify", fontWeight: "bold" }}>{file.title}</td>
            <td className={(chooseStyleStatus(file.situation))}>{file.situation}</td>
            <td className={styles.App_Table_td}>{file.type}</td>
            <td className={styles.App_Table_td}>{file.ultima_atualizacao}</td>
        </tr>
    )

    const handleId = (e) => {
        //e.preventDefault();
        setId(e.target.value);
    }

    const handleTitle = (e) => {
        //e.preventDefault();
        setTitle(e.target.value);
    }

    const handleSituation = (e) => {
        // e.preventDefault();
        setSituation(e.target.value);
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
                                            <input type="text" name="Título" placeholder="Título" onChange={handleTitle} value={title} />
                                        </label>
                                    </div>
                                </form>
                            </th>
                            <th>
                                <form>
                                    <div>
                                        <label>
                                            <select name="situation" onChange={handleSituation} value={situation}>
                                                {status.map((option) => (
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
                            <th>ÚLTIMA ATUALIZAÇÃO</th>
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
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    )
}

export default Table