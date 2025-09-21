import "./style.css";
import Trash from "../../assets/trash.svg";
import React, { useEffect, useRef , useState } from "react";
import api from "../../../services/api";

const MatrixBg: React.FC = () => {
  const matrixRef = useRef<HTMLDivElement | null>(null);

  const CriarEfeitoMatrix = () => {
    const matrixBg = matrixRef.current;
    if (!matrixBg) return;

    matrixBg.innerHTML = '';

    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-col';
      column.style.left = `${i * 20}px`;
      column.style.animationDuration = `${Math.random() * 8 + 6}s`;
      column.style.animationDelay = `${Math.random() * 10}s`;

      const chars = '01';
      let text = '';
      
      for (let j = 0; j < 50; j++) {
        text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
      }
      column.innerHTML = text;

      try {
        matrixBg?.appendChild(column);
      } catch (error) {
        console.error('Erro ao criar efeito de matrix:', error);
      }
    }
  };

  useEffect(() => {
    CriarEfeitoMatrix();
  }, []);

  return <div className="matrix-bg" ref={matrixRef}></div>;
};


function Home() {
  const  [users, setUsers] = useState<{ id: string; name: string; age: number; email: string }[]>([]);

  const inputName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);

async function getUsers() {
  const usersAPI = await api.get('/usuarios')
  setUsers(usersAPI.data);
}

async function CreateUsers() {
  await api.post('/usuarios', {
    name: inputName.current?.value,
    email: inputEmail.current?.value,
    age: inputAge.current?.value
  });

  await getUsers();

  if (inputName.current) inputName.current.value = '';
  if (inputAge.current) inputAge.current.value = '';
  if (inputEmail.current) inputEmail.current.value = '';
}

async function deleteUsers(id: string) {
  await api.delete(`/usuarios/${id}`);
  await getUsers();
}

  useEffect(() => {
  getUsers()
}, []);

  return (
    <>
 <MatrixBg />
      <div className="terminal-container">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-icons">
              <div className="terminal-icon red"></div>
              <div className="terminal-icon yellow"></div>
              <div className="terminal-icon green"></div>
            </div>
            <div className="terminal-title">user@linux: ~</div>
          </div>

          <div className="terminal-content">
            <h1 className="terminal-command">$ sudo useradd --create-home</h1>
            <form className="terminal-form">
              <div className="border-form">
                <div className="form-group">
                  <label className="form-label">name:</label>
                  <input
                    className="form-input"
                    name="nome"
                    type="text"
                    placeholder="[username]"
                    ref = {inputName}
                  ></input>
                </div>

                <div className="form-group">
                  <label className="form-label">age: </label>
                  <input
                    className="form-input"
                    name="idade"
                    type="text"
                    placeholder="[25]"
                    ref={inputAge}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">email: </label>
                  <input
                    className="form-input"
                    name="email"
                    type="text"
                    placeholder="[user@domain.com]"
                    ref={inputEmail}
                  />
                </div>
                <button type="button" className="form-submit" onClick={CreateUsers}>
                  {" "}
                  [EXECUTE]{" "}
                </button>
              </div>
            </form>

            <div className="terminal-command">
              $ cat /etc/passwd | grep users
            </div>
            <div className="border-form">
              {users.map((user) => (
                <div key={user.id}>
                  <div className="terminal-list">
                    <div className="user-card">
                      <div className="user-card__inner">
                        <div className="user-header">
                          <div className="user-info">
                            <div className="user-field">
                              <span className="user-label">
                                name:{" "}
                                <span className="user-value">{user.name}</span>
                              </span>
                            </div>

                            <div className="user-field">
                              <span className="user-label">
                                age:{" "}
                                <span className="user-value">{user.age}</span>
                              </span>
                            </div>

                            <div className="user-field">
                              <span className="user-label">
                                email:{" "}
                                <span className="user-value">{user.email}</span>
                              </span>
                            </div>
                          </div>

                          <div className="user-actions">
                            <button className="delete-btn" onClick={() => deleteUsers(user.id)}>
                              <img src={Trash} alt="" />
                            </button>
                          </div>
                        </div>

                        <div className="user-meta">
                          uid={user.id} gid=1000 home=/home/{user.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="terminal-prompt">
              <span className="prompt-dollar">$</span>
              <span className="prompt-cursor"></span>
            </div>
          </div>
        </div>
      </div>
    </>
)};

export default Home;