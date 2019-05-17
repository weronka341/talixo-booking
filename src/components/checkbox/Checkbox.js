import React from "react";
import './Checkbox.css';
import Option from "../option/Option";


class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }

  render() {
    return(
      <div>
        <label className='container'>Per hour booking
          <input type='checkbox' onClick={() => this.setState({checked: !this.state.checked})}/>
          <span className='checkmark'/>
        </label>
        {this.state.checked &&
        <Option selectId='6' counter='1' max='24' labelName='For:' onChange={(e) => this.props.onChange(e)}/>
        }

      </div>
    );
  }
}

export default Checkbox;
