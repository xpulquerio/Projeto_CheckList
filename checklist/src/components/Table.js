import styles from './Table.module.css';
import { useState } from 'react';

const Table = ({ files }) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const chooseStyleStatus = (x) => {
        var status = styles.App_Table_td_3;
        if (x === "Assistido") {
            status = styles.App_Table_td_1;
        } else if (x === "Assistindo") {
            status = styles.App_Table_td_2;
        } else if (x === "Parado") {
            status = styles.App_Table_td_4;
        }
        return status;
    }
    const listItens = files.filter(file => (file.name.toLowerCase().indexOf(name) !== -1) && (file.type.toLowerCase().indexOf(type) !== -1)).map((file) =>
        <tr className={styles.App_Table_tr}>
            <td className={styles.App_Table_td}>{file.id}</td>
            <td className={styles.App_Table_td} style={{ textAlign: "justify", fontWeight: "bold" }}>{file.name}</td>
            <td className={(chooseStyleStatus(file.status))}>{file.status}</td>
            <td className={styles.App_Table_td}>{file.type}</td>
        </tr>
    )

    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleType = (e) => {
        e.preventDefault();
        setType(e.target.value);
    }

    return (
        <div>

            <table className={styles.App_Table_table}>
                <thead>
                    <tr>
                        <th className={styles.App_Table_th}>ID</th>
                        <th className={styles.App_Table_th}>
                            <form>
                                <div>
                                    <label>
                                        <span></span>
                                        <input className={styles.App_Form_Search} type="text" name="Título" placeholder="Título" onChange={handleName} value={name} />
                                    </label>
                                </div>
                            </form>
                        </th>
                        <th className={styles.App_Table_th}>STATUS</th>
                        <th className={styles.App_Table_th}>
                            <form>
                                <div>
                                    <label>
                                        <span></span>
                                        <input className={styles.App_Form_Search} type="text" name="Tipo" placeholder="Tipo" onChange={handleType} value={type} />
                                    </label>
                                </div>
                            </form>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listItens}
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>

    )
}

export default Table