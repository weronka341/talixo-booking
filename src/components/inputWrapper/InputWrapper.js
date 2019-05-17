import React from "react";
import './InputWrapper.css';


class InputWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHelper: false,
    };
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
          {this.state.showHelper && <span className='help-text'>{this.props.tip}</span>}
        </label>
        <span className='location-selector'>
          <img alt='Arrow' src={process.env.PUBLIC_URL + '/arrow.svg'} width='47' height='27'/>
        </span>
        <label className='location-input-description'>{this.props.text}</label>
        <div className='input-wrapper'>
          <input id={this.props.inputId} className='input-style' onChange={(e) => this.props.onChange(e)}/>
        </div>
      </div>
    );
  }
}

export default InputWrapper;
