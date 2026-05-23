import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#9ef0c9'
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const colors = ['#9ef0c9', '#f0c9c9', '#c9d4f0', '#f0e6c9'];
    const next = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: next });
  }

  render() {
    const headerStyle = {
      background: this.props.dark ? '#333' : '#f8c8dc',
      color: this.props.dark ? '#fff' : '#000'
    };

    const itemStyle = {
      background: this.state.color
    };

    return (
      <header className="header" style={headerStyle}>
        <div className="logo">A</div>
        <div className="title">Header</div>
        <div className="buttons">
          <button onClick={this.changeColor}>Цвет</button>
          <button onClick={this.props.onToggle}>Тема</button>
        </div>
        <div className="items">
          <button style={itemStyle}>Item 1</button>
          <button style={itemStyle}>Item 1</button>
          <button style={itemStyle}>Item 1</button>
          <button style={itemStyle}>Item 1</button>
          <button style={itemStyle}>Item 1</button>
        </div>
      </header>
    );
  }
}

export default Header;
