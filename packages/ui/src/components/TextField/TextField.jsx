import { forwardRef } from "react";

const TextField = forwardRef(
  ({ value, otpIndex, setValue, handleKeyDown }, ref) => {
    function setField(value) {
      setValue(value, otpIndex);
    }

    return (
      <>
        <input
          ref={ref}
          className="otpTextBox"
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => setField(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, otpIndex)}
        />
      </>
    );
  },
);

export default TextField;
