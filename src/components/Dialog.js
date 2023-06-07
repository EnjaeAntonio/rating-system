function Dialog({child, close}) {
  return (
    <div className="dialog">
        {child}
        <button onClick={close}>Dialog</button>
    </div>
  )
}

export default Dialog;