import React, { useState } from "react";

const SummaryPage = () => {
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
        <button type="submit" disabled={!checked}>
          주문확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
