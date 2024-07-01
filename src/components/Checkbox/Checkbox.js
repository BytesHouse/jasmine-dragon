"use client";

import { useState } from "react";

const Checkbox = () => {
  const [checkedValues, setCheckedValues] = useState({
    option1: false,
    option2: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedValues({
      ...checkedValues,
      [name]: checked,
    });
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label className="flex gap-[5px]">
        <input
          type="checkbox"
          name="option1"
          checked={checkedValues.option1}
          onChange={handleChange}
        />
        Получать актуальные новости нашей чайной
      </label>
      <label className="flex gap-[5px]">
        <input
          type="checkbox"
          name="option2"
          checked={checkedValues.option2}
          onChange={handleChange}
        />
        Я согласен с условиями использования сайта
      </label>
    </div>
  );
};

export default Checkbox;
