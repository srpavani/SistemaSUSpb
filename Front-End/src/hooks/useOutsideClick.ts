import { RefObject, useEffect } from "react";

function useOutsideClick(ref: RefObject<HTMLElement>, isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    const handleClickOutside = (ev: MouseEvent) => {
      if (isOpen && ref.current && !ref.current.contains(ev.target as Node)) {
        onClose()
      }
    };

    document.addEventListener("mousedown", handleClickOutside)
    
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onClose, ref])
}

export default useOutsideClick