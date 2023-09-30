import React from "react";
import SortForm from "./SortForm/SortForm";
import DiscontForm from "./DiscontForm/DiscontForm";
import FilterForm from "./FilterForm/FilterForm";
import s from './FilterForms.module.css'
export default function FIlterForms() {
  return (
    <div className={s.filterForms} >
      <FilterForm />
      <DiscontForm />
      <SortForm />
    </div>
  );
}
