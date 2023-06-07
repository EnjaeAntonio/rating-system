function Dialog({ open, onClose }) {
    return (
      <section className="fixed top-20 flex items-center justify-center">
        {open ? (
          <div>
            <img
              className="w-40"
              src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
              alt="logo"
            />
            <button className="text-white bg-red-500 rounded-md py-1 mt-2 flex w-40 flex items-center justify-center" onClick={onClose}>
                Close Image
            </button>
          </div>
        ) : null}
        <button className="text-white fixed bottom-5 right-5 w-40 rounded-md bg-custom-blue py-1"onClick={onClose}>
          {open ? "Close Dialog" : "Open Dialog"}
        </button>
      </section>
    );
  }

export default Dialog;