import React from 'react';

export default class ScrollTo extends React.Component {
  componentDidMount() {
    window.scrollTo(this.props.x, this.props.y);
  }

  render() {
    return null;
  }
}
