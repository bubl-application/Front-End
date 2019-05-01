import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputBubl from './InputBubl';
import { getBubls } from '../actions';

class Bubl extends Component {

  componentDidMount() {
    this.props.getBubls();    
  }

   render() {
      // const id = this.props.match.params.id;
      // const specificbubl = this.props.bubls.find(bubl => `${bubl.id}` === id);

      // console.log(specificbubl);

      return (
         <div>
            <h2>Bubl</h2>
            {/* {this.props.bubls.map(bubl => (
               <>
                  {bubl.messages.map(message => (
                     <>
                        <div>{message.username}: {message.text}</div>
                     </>
                  ))}
               </>
            ))} */}

            {this.props.bubls.length > 0 && this.props.bubls[this.props.match.params.id - 1].messages.map(message => (
               <div>
                  {message.username}: {message.text}
               </div>
            ))}
            <InputBubl />
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      bubls: state.bubls
   }
}

export default connect(mapStateToProps, {getBubls})(Bubl);