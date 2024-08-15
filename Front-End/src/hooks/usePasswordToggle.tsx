import { Dispatch, SetStateAction, useState } from "react";

import { FaEyeSlash, FaEye } from "react-icons/fa";

export function usePasswordToggle(): [ any, string, Dispatch<SetStateAction<boolean>> , boolean ] {
  const [visible, setVisible] = useState(false)

  const icon = visible ? <FaEyeSlash /> : <FaEye />
  const inputType = visible ? "text" : "password"

  return [icon, inputType, setVisible, visible]
}
