import React from "react";

const Utterances = (props) => {
  // console.log("UTTERANCE PROPS::::", props);
  // props.changeHeader("Utterances");

  // useEffect(() => {
  //   props.changeHeader(`Utterance ${props.intentName}`);
  // }, [props]);

  return (
    <div>
      <p> {props.location.state.intent_name} </p>
    </div>
  );
};

export default Utterances;
