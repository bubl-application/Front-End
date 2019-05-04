import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputBubl from './InputBubl';
import { getBubls, getComments } from '../actions';

class Bubl extends Component {

  componentDidMount() {
   //  this.props.getBubls(); 

    const id = this.props.match.params.id;
    this.props.getComments(id);   
  }

   render() {
      // const id = this.props.match.params.id;
      // const specificbubl = this.props.bubls.find(bubl => `${bubl.id}` === id);

      // console.log(specificbubl);

      // console.log(this.props.match.params.id);      

      return (
         <div>
            { this.props.comments.length > 0 && <h2>{this.props.comments[0].title}</h2> }
            {/* {this.props.bubls.map(bubl => (
               <>
                  {bubl.messages.map(message => (
                     <>
                        <div>{message.username}: {message.text}</div>
                     </>
                  ))}
               </>
            ))} */}

            {/* {this.props.bubls.length > 0 && this.props.bubls[this.props.match.params.id - 1].messages.map(message => (
               <div>
                  {message.username}: {message.text}
               </div>
            ))} */}

            {this.props.comments.map(comment => (
               <div><strong>{comment.username}:</strong> {comment.comments}</div>
            ))}

            <InputBubl id={this.props.match.params.id} />
         </div>

         
      )
   }
}

const mapStateToProps = state => {
   return {
      comments: state.comments
   }
}

export default connect(mapStateToProps, {getBubls, getComments})(Bubl);