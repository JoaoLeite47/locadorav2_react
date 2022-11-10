import "./Home.css";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("");

  if (filter) {
    const exp = eval(`/${filter.replace(/[^\d\w]+/, ".*")}/i`);
    // list = list.filter((item) => exp.test(item.cpf));
  }

  const handleFilter = (e) => {
    setFilter(e.target.value); // function to filter the list by name
  };
  
  return (
    <div>
      <input placeholder="CPF Example: 56558215225" onChange={handleFilter} />
      {/* <table className="table_cliente">
        <thead className="thead_cliente">
          <tr className="tr_cliente">
            <th>RG</th>
            <th>Data de nascimento</th>
            <th>CNH</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ rg, dt_nascimento, cnh, nome, endereco, cpf }) => {
            return (
              <tr key={cpf}>
                <td>{rg}</td>
                <td>{dt_nascimento}</td>
                <td>{cnh}</td>
                <td>{nome}</td>
                <td>{endereco}</td>
                <td id="cpf">{cpf}</td>
                <td>
                  <button
                    className="delete buttonAction"
                    onClick={() => handleModalDelete(cpf)}
                  >
                    Deletar
                  </button>
                  {clienteDeleteModalVisible ? (
                    <ModalClienteDelete
                      onClose={() => setClienteDeleteModalVisible(false)}
                      cpfBase={cpfBase}
                    />
                  ) : null}
                </td>
                <td>
                  <button
                    className="update buttonAction"
                    onClick={() => handleModalUpdate(cpf)}
                  >
                    Atualizar
                  </button>
                  {clienteUpdateModalVisible ? (
                    <ModalClienteUpdate
                      onClose={() => setClienteUpdateModalVisible(false)}
                      cpfBase={cpfBase}
                    />
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}
