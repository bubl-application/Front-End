import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputBubl from './InputBubl';

class Bubl extends Component {

   render() {
      return (
         <div>
            <h2>Bubl</h2>
            {this.props.bubls.map(bubl => (
               <>
                  {bubl.messages.map(message => (
                     <>
                        <div>{message.username}: {message.text}</div>
                     </>
                  ))}
               </>
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

export default connect(mapStateToProps)(Bubl);