import React, {Component} from 'react';
import InputBubl from './InputBubl';

class Bubl extends Component {

   render() {
      return (
         <div>
            <h2>Bubl</h2>
            {/* {bubl.messages.map(message => (
               <>
                  <div>{message.username}: {message.text}</div>
               </>
            ))} */}
            <InputBubl />
         </div>
      )
   }
}

export default Bubl;