import React from "react";

import SingleBar from "../SingleBar/SingleBar";

const MultiBar = props => {
  //   console.log(props.values);
  return (
    <div>
      {props.values.map((graph, index) => (
        <SingleBar
          key={index}
          title={graph.title}
          right={graph.right}
          left={graph.left}
        />
      ))}
    </div>
  );
};

MultiBar.defaultProps = {
  values: []
};

export default MultiBar;
