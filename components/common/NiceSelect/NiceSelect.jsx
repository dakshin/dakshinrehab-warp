import React, { useEffect, useRef } from "react";
import { bindNiceSelect } from "./NiceSelectUtil";

export default function NiceSelect({
  id,
  name,
  children,
  value,
  onChange,
  placeholder,
  searchable,
  ...otherProps
}) {
  const selectRef = useRef(null);
  const niceSelectInstanceRef = useRef(null);

  // Define change handler before useEffect
  const handleNativeSelectChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  useEffect(() => {
    if (selectRef.current) {
      niceSelectInstanceRef.current = bindNiceSelect(selectRef.current, {
        placeholder: placeholder,
        searchable: searchable || false,
      });

      selectRef.current.addEventListener("change", handleNativeSelectChange);
    }

    return () => {
      if (niceSelectInstanceRef.current?.destroy) {
        niceSelectInstanceRef.current.destroy();
      }

      if (selectRef.current) {
        selectRef.current.removeEventListener("change", handleNativeSelectChange);
      }
    };
  }, []);

  useEffect(() => {
    if (selectRef.current && value !== undefined) {
      selectRef.current.value = value;
      if (niceSelectInstanceRef.current?.update) {
        niceSelectInstanceRef.current.update();
      }
    }
  }, [value]);

  return (
    <select id={id} name={name} ref={selectRef} {...otherProps}>
      {children}
    </select>
  );
}
