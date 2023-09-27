import Button from "./Button"
import Input from "./Input"

const Form = () => {
  return (
    <div>
      <form>
        <p>
        <label htmlFor="nome">Nome</label>
        <Input />
        </p>
        <p>
        <label htmlFor="email">Email</label>
        <Input /> 
        <Button />
        </p>
      </form>
    </div>
  )
}

export default Form
