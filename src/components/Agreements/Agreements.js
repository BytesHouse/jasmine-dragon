"use client";

import Checkbox from "@/ui-kit/Checkbox/Checkbox";
import { useState } from "react";

const Agreements = () => {
  const [checkedValues, setCheckedValues] = useState([false, false]);

  const handleAgree = (optionId) => {
    let newValues = [...checkedValues];
    newValues[optionId] = !newValues[optionId];
    setCheckedValues(newValues);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <Checkbox isCurr={checkedValues[0]} setIsCurr={() => handleAgree(0)}>
        Получать актуальные новости нашей чайной
      </Checkbox>
      <Checkbox isCurr={checkedValues[1]} setIsCurr={() => handleAgree(1)}>
        Я согласен с условиями использования сайта
      </Checkbox>
    </div>
  );
};

export default Agreements;
