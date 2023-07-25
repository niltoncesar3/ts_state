import { ChangeEvent, useState } from "react"

const State = () => {

    const [value, setValue] = useState< string | number>('');


    /* const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    } */

    const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }


  return (
    <div>
      <input type="text" name="" id="" placeholder="Digite aqui para mudar" onChange={handleInput} />
      <p>O valor vai sair aqui : {value}</p>

    </div>
  )
}

export default State