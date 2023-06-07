function Dialog({child, close}) {
  return (
    <div className="fixed bottom-5 right-5 dialog">
        {child}
        <button className="text-white rounded-md bg-custom-blue px-5" onClick={close}>Open Dialog</button>
    </div>
  )
}

export default Dialog;