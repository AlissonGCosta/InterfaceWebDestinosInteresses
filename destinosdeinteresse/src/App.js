import './App.css';
import axios from 'axios';
import React, { useEffect, } from 'react';
import Select from 'react-select';
import makeAnimeted from 'react-select/animated';
import { IMaskInput } from "react-imask";

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

    axios.get("https://amazon-api.sellead.com/city").then((response) => {
      const data = response.data

      for (let i = 0; i < data.length; i++) {
        const pais = {
          value: data[i].id,
          label: data[i].name
        }
        cidade.push(pais)

      }

    }).catch((error) => console.log(error))
 
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
                  <input type="name" placeholder="Nome" required="required"  ></input>
                </div>

                <div class="Email">
                  <h3>Email:</h3>
                  <input type="email" placeholder="Email" required="required"></input>
                </div>

                <div class="telefone" required>
                  <h3>Telefone:</h3>
                  <IMaskInput
                    mask="00 0 0000-0000"
                    placeholder="Digite seu Telefone:"
                    required
                  />
                </div>

                <div class="cpf">
                  <h3>CPF:</h3>
                  <IMaskInput
                    mask="000.000.000-00"
                    placeholder="Digite o seu CPF"
                    required
                  />
                </div>
              </div>

            </div>

            <div class="formulario-dois formu">
              <div class="pais">
                <h3>Pais</h3>
                <Select
                  className='selectPais'
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
                  className='selectCidade'
                  components={animatedCompontents}
                  isMulti
                  options={cidade}
                  isClearable={true}
                  isSearchable={true}
                  isDisabled={false}
                  isLoading={false}
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
