import React from 'react';

// Global Styles
import { GlobalStyles } from '../../styles/global';

type State = {
  disableFocus: boolean;
};

export default class Globals extends React.Component<{}, State> {
  state = {
    disableFocus: false,
  };

  // Does not remove focus outlines for keyboard users for ADA compliance
  componentDidMount() {
    document.addEventListener('mousedown', this.mouseDown);
    document.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.mouseDown);
    document.removeEventListener('keydown', this.keyDown);
  }

  mouseDown = () => {
    this.setState({
      disableFocus: true,
    });
  }

  keyDown = () => {
    this.setState({
      disableFocus: false,
    });
  }

  render() {
    return <GlobalStyles disableFocus={this.state.disableFocus} />;
  }
}
