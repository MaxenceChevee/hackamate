import { useState } from "react";
import propTypes from "prop-types";

import "../../../styles/Scan.scss";

function ScanForm({ setHasValidateForm }) {
  const [formQuestions, setFormQuestions] = useState([
    { question: "J'ai une peau à tendance graisseuse", checked: false },
    { question: "J'ai une forte acné", checked: false },
    { question: "J'ai des allergies à certains produits", checked: false },
    { question: "Mes cils sont très courts", checked: false },
  ]);

  const checkQuestion = (questionIndex) => {
    const questionsCopy = [...formQuestions];
    questionsCopy[questionIndex].checked =
      !questionsCopy[questionIndex].checked;
    setFormQuestions(questionsCopy);
  };

  return (
    <div className="scanContainer">
      <h1 className="scanTitle">Scan terminé !</h1>
      <p className="scanText">
        Avant de découvrir les produits que nous vous suggérons pour votre type
        de peau, merci de renseigner ces quelques informations
      </p>
      <div className="questionsContainer">
        {formQuestions.map(({ question, checked }, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            key={question}
            className="scanQuestion"
            onClick={() => checkQuestion(index)}
          >
            <div className="checkIcon">
              {checked && <div className="itemCheked" />}
            </div>
            {question}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="scanButton"
        onClick={() => setHasValidateForm(true)}
      >
        Voir mes produits
      </button>
    </div>
  );
}

ScanForm.propTypes = {
  setHasValidateForm: propTypes.func.isRequired,
};

export default ScanForm;
