import React,{Component} from 'react';

class BublMessage extends Component{

   render() {
      return (
         <div>
            <span>{this.props.bublmessage.text}</span>
            <span>{this.props.bublmessage.username}</span>
         </div>
      )
   }
}

export default BublMessage;