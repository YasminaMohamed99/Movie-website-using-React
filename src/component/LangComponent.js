import { useContext } from "react";
import { LanguageContext } from "./languageContext";

function ExampleFunctionalComponent() {
    const { contextLanguage, setContextLanguage } = useContext(LanguageContext);
    return (
        <>
          <h1>Hello Functional Component</h1>
    
          <h1>Context language : {contextLanguage}</h1>
          <button className="btn-danger" onClick={() => setContextLanguage("ar")}>
            Context lang
          </button>

          </>
  );
}
export default ExampleFunctionalComponent;
