import { useRef } from "react";
import { useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export default function Modal({ children, Close }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-orange-50"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{Close}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
