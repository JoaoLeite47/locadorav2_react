import "./Home.css";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import ModalUsuarioUpdate from "../../components/Home/ModalUsuarioUpdate/ModalUsuarioUpdate";

export default function Home() {
  const [list, setList] = useState([]);
  const [clienteUpdateModalVisible, setClienteUpdateModalVisible] =
    useState(false);
  const [baseId, setBaseId] = useState("")

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get("/usuario");
      setList(response.data);
    }
    fetchUsers();
  }, [list]);

  async function handleDelete(id) {
    await api.delete(`/usuario/${id}`);
    alert("deletado");
  }

  const handleModalUpdate = (cpf) => {
    setClienteUpdateModalVisible(true);
    setBaseId(cpf);
  };

  return (
    <div>
      <table className="table_cliente">
        <thead className="thead_cliente">
          <tr className="tr_cliente">
            <th>id</th>
            <th>nickname</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ email, nickname, id }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{nickname}</td>
                <td>{email}</td>
                <td>
                  <button
                    className="delete buttonAction"
                    onClick={() => handleDelete(id)}
                  >
                    Deletar
                  </button>
                </td>
                <td>
                  <button
                    className="update buttonAction"
                    onClick={() => handleModalUpdate(id)}
                  >
                    Atualizar
                  </button>
                  {clienteUpdateModalVisible ? (
                    <ModalUsuarioUpdate
                      onClose={() => clienteUpdateModalVisible(false)}
                      baseId={baseId}
                    />
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
