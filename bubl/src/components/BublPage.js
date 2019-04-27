import React, {Component} from 'react';
import InputBubl from './InputBubl';
import BublMessage from './BublMessage';

class BublPage extends Component {

   componentDidMount() {
      this.props.getBubls();
   }

   render() {
      return (
         <div className="bubl-page">
            <h2>{this.props.bubl.bublname}</h2>
            <ul>
               {this.props.bubl.hashtags.map((hashtag, index) => (
                  <div key={index}>#{hashtag}</div>
               ))}
            </ul>


            {this.props.bubl.bublmessages.map((bubl, index) => (
               <BublMessage key={index}/>
            ))} 
            <InputBubl />
         </div>
      )
   }
}

export default BublPage;