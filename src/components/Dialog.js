function Dialog({open, close}) {
  return (
    <section className="fixed inset-0 flex items-center justify-center">
        <div>
            <div>
                <img className="w-40" src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="logo"/>
            </div>
            <button className="fixed bottom-5 right-5 rounded-md bg-custom-blue px-5" onClick={close}>{open ? "Close Dialog" : "Open Dialog"}</button>
        </div>
    </section>
  )
}

export default Dialog;