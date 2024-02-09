import React, { useState } from "react";

const SummaryPage = ({ setStep }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <form>
        <input
          type="checkbox"
          id="confirm_checkbox"
          defaultChecked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />{" "}
        <label htmlFor="confirm_checkbox">주문 확인을 해주세요.</label>
        <br />
        <button disabled={!checked} onClick={() => setStep(2)}>
          주문확인
        </button>
        <button onClick={() => setStep(0)}>취소</button>
      </form>
    </div>
  );
};

export default SummaryPage;
