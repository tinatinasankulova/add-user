import s from './ErrorModal.module.css'
import Button from './Button'
import Card from './Card'

const Modal = (props) => {
  return (
    <div>
      <div className={s.backdrop} onClick={props.onConfirm}  />
      <Card className={s.modal} >
      <header className={s.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={s.content}>
          <p>{props.message}</p>
        </div>
        <footer className={s.actions}>
          <Button id={props.id} onClick={props.onOkey}>Okey</Button>
          <Button  id={props.id} onClick={props.onConfirm}>Cansel</Button>
        </footer>
      </Card>
    </div>
  )
}

export default Modal;