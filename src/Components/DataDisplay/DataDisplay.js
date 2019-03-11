import React from "react";
import styled from "styled-components";

const DataSection = styled.section`
  background-color: #cae5fe;
  padding: 8px;

  p {
    padding-left: 10px;
  }
`;

const DataDisplay = props => {
  console.log(props);
  const { value, total, percent, title } = props.data;
  return (
    <div>
      <hr />
      <DataSection>
        <header>
          <h3>{title}</h3>
          <p>Value: {value}</p>
          <p>
            {percent}% of total {total}
          </p>
        </header>
      </DataSection>
    </div>
  );
};

export default DataDisplay;
