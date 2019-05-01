import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputBubl from './InputBubl';

class Bubl extends Component {
   render() {
      // const id = this.props.match.params.id;
      // const specificbubl = this.props.bubls.find(bubl => `${bubl.id}` === id);

      // console.log(specificbubl);

      // console.log(this.props.match.params.id);

      return (
         <div>
            <h2>Bubl</h2>
            <h3>{this.props.match.params.id}</h3>
            {this.props.bubls[this.props.match.params.id - 1].messages.map(message => (
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

export default connect(mapStateToProps)(Bubl);