import React from 'react';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({ dark: !this.state.dark });
  }

  render() {
    const pageStyle = {
      minHeight: '100vh',
      background: this.state.dark ? '#222' : '#fff',
      color: this.state.dark ? '#fff' : '#000'
    };

    return (
      <div style={pageStyle}>
        <Header dark={this.state.dark} onToggle={this.toggleTheme} />
        <p style={{ padding: '10px' }}>
          Текущая тема: {this.state.dark ? 'Тёмная' : 'Светлая'}
        </p>
      </div>
    );
  }
}

export default App;
