import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() { 
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '#000'
    }
    const [categorias, setCategorias] = useState([ 'Teste' ]);
    
    
    const [values, setValues] = useState(valoresIniciais); 

    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      })
    } 

    function handleChange(infosDoEnvento){
     
      setValue(
       infosDoEnvento.target.getAttribute('nome'), 
       infosDoEnvento.target.value
      );
      
    }

    return (
      
        <PageDefault>
          <h1>Cadastro de Categoriras: {values.nome}</h1>

          <form onSubmit={ function handleSumit(infosDoEnvento){
                        
            infosDoEnvento.preventDefault();
            setCategorias ([
              ...categorias,
              values
            ]);

            setValues(valoresIniciais)

          }}>
             
             <FormField 
              label="Nome da categoria: "
              type="text"
              name="nome"
              value={ values.nome }
              onChange={handleChange}
             
             /> 
            <FormField 
              label="Descrição: "
              type="textarea"
              name="descricao"
              value={ values.descricao }
              onChange={handleChange}
             
             /> 
              {/*<div>
                <label>
                  Descrição:
                  <input
                    type="text"
                    value={values.descricao}
                    nome='descricao'
                    onChange={handleChange}
                  />
                </label>
              </div>*/} 
              <FormField 
              label="Cor: "
              type="color"
              name="cor"
              value={ values.cor }
              onChange={handleChange}
             
             /> 

              {/*<div>
                <label>
                  Cor:
                  <input
                    type="color"
                    value={values.cor}
                    nome='cor'
                    onChange={handleChange}
                  />
                </label>
              </div>*/ }


                <button>
                  Cadastrar
                </button>

                <ul>

                    {categorias.map((categoria, indice) => {

                        return (
                          <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                          </li>
                        )

                    })}

                </ul>
                
          </form>
         
          <Link to="/">
            Ir para home! 
          </Link>
        </PageDefault>

    )
  
}

export default CadastroCategoria;
