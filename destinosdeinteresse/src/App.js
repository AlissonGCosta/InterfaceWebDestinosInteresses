
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="formulario">

        <form>
          <div class="formularios">
            <div class="formulario-um formu">

              <h1>Dados Pessoais</h1>
              <div class="dados-pessoais">
                <div class="nome">
                  <h3>Nome:</h3>
                  <input type="Text" placeholder="Nome" required="required"></input>
                </div>

                <div class="Email">
                  <h3>Email:</h3>
                  <input type="email" placeholder="Email" required="required"></input>
                </div>

                <div class="telefone" required>
                  <h3>Telefone:</h3>
                  <input type="text" placeholder="Telefone" required="required"></input>
                </div>

                <div class="cpf">
                  <h3>CPF:</h3>
                  <input type="text" placeholder="cpf" required="required"></input>
                </div>
              </div>

            </div>

            <div class="formulario-dois formu">
              <div class="pais">
                <h3>Pais</h3>
                <select name="pais" multiple>
                  <option value="valor0">selecione um pais</option>
                  <option value="valor1">Brasil</option>
                  <option value="valor2">China</option>
                  <option value="valor3">Japão</option>
                </select>
              </div>

              <div class="cidade">
                <h3>Cidade:</h3>
                <select name="cidade" multiple>
                  <option value="valor0">Escolha uma cidade</option>
                  <option value="valor1">Rio de janeiro</option>
                  <option value="valor2">Xangai</option>
                  <option value="valor3">Tokyo</option>
                </select>
              </div>
            </div>
          </div>

          <div class="btnEnviar">
            <input type="submit" class="btnSubmit"></input>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
