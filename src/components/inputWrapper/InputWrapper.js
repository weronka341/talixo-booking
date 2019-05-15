import React from "react";
import './InputWrapper.css';


class InputWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHelper: false,
    }
  }

  showHelper = () => {
    this.setState(
      {showHelper: !this.state.showHelper}
    )
  };

  render() {
    return (
      <div className='booking-field'>
        <label className='help-text-wrapper'>
          <img alt='Help text' src={process.env.PUBLIC_URL + '/icon_help.png'} className='help-icon' height='23'
               width='23' onClick={() => {
            this.showHelper()
          }}/>
          {this.state.showHelper && <span className='help-text'>{this.props.text}</span>}
        </label>
      </div>
    );
  }
}

export default InputWrapper;
