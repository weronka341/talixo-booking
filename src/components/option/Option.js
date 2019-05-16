import React from "react";
import './Option.css';


class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    };
  }

  createOptions() {
    let options = [];
    let start = this.props.counter;
    let stop = this.props.max;
    for (let i = start; i <= stop; i++) {
      options.push(<option key={i}>{i}</option>)
    }
    return options;
  }

  render() {
    return (
      <div className='select-wrapper'>
        <label className='input-description'>{this.props.labelName}</label>
        <select className='select' id={this.props.selectId} onChange={(e) => this.props.onChange(e)}>
          {this.createOptions()}
        </select>
        <span className='location-selector'>
          <img alt='Arrow' src={process.env.PUBLIC_URL + '/arrow.svg'} width='47' height='27'/>
        </span>
      </div>
    );
  }
}

export default Option;
