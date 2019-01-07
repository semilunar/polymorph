import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

class App extends React.Component {
  render() {
    let text = this.props.text
    return (
    <div className="App">

    <div className="container_app">

      <p className="paragraph"><i>Ещё люблю тебя!</i> {text}</p>

      <div className="container_slider">
        <p>Плохой дизайн</p>
        <Slider />
        <p>&#8195;Хороший дизайн</p>
      </div>

      <footer className="footer">
        <button className="footer__action">полюбить</button>
        <button className="footer__action">узнать</button>
        <button className="footer__action">удалить</button>
        <button className="footer__action">выйти</button>
      </footer>

    </div>

    </div>
  )
  }
}

App.defaultProps = {
  text: "Как дефолтный текст любит покачивающиеся волны."
}

export default App;
