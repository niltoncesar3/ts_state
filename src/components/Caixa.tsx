
type Props = {
    nome: string,
    idade: number

}

const Caixa = ({nome, idade}: Props) => {
  return (
    <div>
        <p>{nome}</p>
        <p>{idade}</p>

    </div>
  )
}

export default Caixa