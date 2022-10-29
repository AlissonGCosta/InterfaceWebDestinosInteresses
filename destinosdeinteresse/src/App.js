
import './App.css';
import axios from 'axios';
import React, { useEffect, } from 'react';
import Select from 'react-select';
import makeAnimeted from 'react-select/animated';

const animatedCompontents = makeAnimeted()

const arrayPais = [];

const cidade = [];

function App() {


  useEffect(() => {
    axios.get("https://amazon-api.sellead.com/country").then((response) => {
      const data = response.data
      for (let i = 0; i < data.length; i++) {
        const pais = {
          value: data[i].name,
          label: data[i].name_ptbr
        }

        arrayPais.push(pais)
      }

    }).catch((error) => console.log(error))

    // axios.get("https://amazon-api.sellead.com/city").then((response) => {
    //    if(){}
    //   }
    // }).catch((error) => console.log(error))



  }, [])



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
                <Select
                  isMulti
                  components={animatedCompontents}
                  options={arrayPais}
                  isClearable={true}
                  isSearchable={true}
                  isDisabled={false}
                  isLoading={false}
                  isRtl={false}
                  closeMenuOnSelect={false}
                />
              </div>

              <div class="cidade">
                <h3>Cidade:</h3>

                <Select
                  components={animatedCompontents}
                  isMulti
                  options={cidade}
                  isClearable={true}
                  isSearchable={true}
                  isDisabled={false}
                  isLoading={true}
                  isRtl={false}
                  closeMenuOnSelect={false}
                />

              </div>
            </div>
          </div>

          <div class="btnEnviar">
            <input type="submit" class="btnSubmit"></input>
          </div>
        </form>
      </div>

    </div>

  )




}

export default App;
