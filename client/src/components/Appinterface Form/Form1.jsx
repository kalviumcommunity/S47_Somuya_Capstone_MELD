import React from "react";
import RadioButton from "../RadioButton";

const Form1 = () => {
  return (
    <div className=" p-9">
      <h1 className=" text-4xl flex justify-center pb-6">Select ideas Objective</h1>
      <div className=" flex gap-4 flex-col">
        <h3 className=" text-2xl">Is this an existing or an upcoming business?</h3>
        <RadioButton
          id="existing-business"
          value=""
          name="business-type"
          checked={false}
          label="Existing business"
        />
        <RadioButton
          id="upcoming-business"
          value=""
          name="business-type"
          checked={false}
          label="Upcoming unlaunched business"
        />
      </div>
      <div className=" pt-14 flex gap-4 flex-col">
        <h3 className=" text-2xl">What will you use this Idea Validation for?</h3>
        <RadioButton
          id="investor-funding"
          value=""
          name="validation-purpose"
          checked={false}
          label="To be used to request fund from investors"
        />
        <RadioButton
          id="bank-funding"
          value=""
          name="validation-purpose"
          checked={false}
          label="To be used to request fund from banks"
        />
        <RadioButton
          id="self-learning"
          value=""
          name="validation-purpose"
          checked={false}
          label="For self-learning"
        />
        <RadioButton
          id="school-project"
          value=""
          name="validation-purpose"
          checked={false}
          label="To be used as reference for school/university project"
        />
        <RadioButton
          id="workplace-project"
          value=""
          name="validation-purpose"
          checked={false}
          label="To be used as reference for workplace projects"
        />
        <RadioButton
          id="non-financial-institution"
          value=""
          name="validation-purpose"
          checked={false}
          label="To be used to submit to a non-financial institution for approval (e.g. getting VISA approval, franchise approval, tenant approval)"
        />
      </div>
    </div>
  );
};

export default Form1;
