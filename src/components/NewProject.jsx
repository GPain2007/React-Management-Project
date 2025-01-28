import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const titleEntered = titleRef.current.value;
    const descriptionEntered = descriptionRef.current.value;
    const dueDateEntered = dueDateRef.current.value;

    if (
      titleEntered.trim() === "" ||
      descriptionEntered.trim() === "" ||
      dueDateEntered.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    console.log(titleEntered, descriptionEntered, dueDateEntered);

    onAdd({
      titleRef: titleEntered,
      descriptionRef: descriptionEntered,
      dueDateRef: dueDateEntered,
    });
  }

  return (
    <>
      <Modal ref={modalRef} Close="Close">
        <h2 className="text-xl font-bold text-stone-500">Invalid Input</h2>
        <p>Opps ... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" ref={titleRef} />
          <Input label="Description" textarea ref={descriptionRef} />
          <Input type="date" label="Due Date" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
}
