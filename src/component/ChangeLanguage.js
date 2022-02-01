import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../store/actions";

export default function ChangeLanguage() {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const changeLanguageFunc = () => {
    dispatch(changeLanguage(lang === "ar" ? "en" : "ar"));
  };

  return (
    <div>
      <h1>Current language : {lang}</h1>
      <button className="btn btn-primary" onClick={() => changeLanguageFunc()}>
        Change Language
      </button>
    </div>
  );
}
