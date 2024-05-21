function Modal({ onClose, title, information }) {
  return (
    <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button onClick={onClose} className="delete" aria-label="close"></button>
      </header>
      <section className="modal-card-body">
        { information }
      </section>
      {/* <footer className="modal-card-foot">
       
      </footer> */}
    </div>
  </div>
  );
}

export default Modal;
