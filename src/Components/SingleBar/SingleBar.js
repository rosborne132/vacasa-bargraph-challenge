import React, { Component } from "react";
import styled from "styled-components";

import DataDisplay from "../DataDisplay/DataDisplay";

const BarGraphHeaer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BarGraph = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
`;

const BarGraphProgress = styled.div`
  position: relative;
  width: ${props => props.percent}%;
  height: 100%;
  background-color: ${props => props.color};
  font-weight: 600;

  :hover{
      border: 1px solid #000;
  }

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    padding-left: 4px; 
    content: "${props => props.percent}%";
  }
`;

class SingleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isShowing: false
    };
  }
  render() {
    const { left, right, title } = this.props;
    const total = left.value + right.value;
    const calPercent = (value, total) => Math.round((value / total) * 100);

    const mouseOver = (value, percent, total, title) => {
      this.setState({
        isShowing: true,
        data: {
          value,
          percent,
          total,
          title
        }
      });
    };
    const onMouseLeave = () => this.setState({ isShowing: false });

    return (
      <div>
        <BarGraphHeaer>
          <p>{title}</p>
          <p>{`Total: ${total}`}</p>
        </BarGraphHeaer>

        <BarGraph>
          <BarGraphProgress
            onMouseOver={() =>
              mouseOver(left.value, calPercent(left.value, total), total, title)
            }
            onMouseLeave={() => onMouseLeave()}
            percent={calPercent(left.value, total)}
            color={left.color}
          />
          <BarGraphProgress
            onMouseOver={() =>
              mouseOver(
                right.value,
                calPercent(right.value, total),
                total,
                title
              )
            }
            onMouseLeave={() => onMouseLeave()}
            percent={calPercent(right.value, total)}
            color={right.color}
          />
        </BarGraph>
        {this.state.isShowing ? <DataDisplay data={this.state.data} /> : ""}
      </div>
    );
  }
}

SingleBar.defaultProps = {
  left: {},
  right: {},
  title: ""
};

export default SingleBar;
