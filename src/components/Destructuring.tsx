

type Props = {
  name:string,
  age: number,

}

const Destructuring = ({name, age}: Props) => {
  return (
    <div>
      <p>O seu nome é {name}</p>
      <p>A sua idade é {age}</p>
    </div>
  )
}

export default Destructuring