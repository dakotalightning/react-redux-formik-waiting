import React, { useEffect } from "react";
import usePortal from "react-useportal";

const CreateModal = ({ render, close }) => {
  const [openPortal, closePortal, isOpen, Portal] = usePortal();

  useEffect(() => {
    if (close) {
      closePortal();
    }
  }, [close, closePortal]);

  return (
    <>
      {!isOpen && (
        <button type="button" className="button-primary" onClick={openPortal}>
          Login
        </button>
      )}
      {isOpen && (
        <Portal>
          <div className="modal">
            <div className="modal-body">
              <h1>Login</h1>
              {render({ openPortal, closePortal, isOpen, Portal })}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default CreateModal;
