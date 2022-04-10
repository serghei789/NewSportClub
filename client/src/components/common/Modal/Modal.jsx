import './Modal.scss'


export default function Modal({children, modalOpen}) {
  return(
    <>
      {modalOpen && 
        <div className="modal">
          {children}
        </div>
      } 
    </>
  )
}
