import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addComment, getComments } from '../actions';
import {Button, Input} from '../StyledComponents';

class InputBubl extends Component {
   // why does it need a school_id and bubl_id
   // to post a comment?
   state = {
      comments: '',
      school_id: '',
      student_id: '',
      thread_id: parseInt(this.props.id),
      bubl_id: '',
   }

   componentWillReceiveProps(nextProps) {
    this.setState({
      school_id: nextProps.school_id,
      student_id: nextProps.student_id,
      // thread_id: nextProps.thread_id,
      bubl_id: nextProps.bubl_id
    });
}

   handleChange = e => {
      this.setState({
         ...this.state,
         [e.target.name]: e.target.value
      })
   }

   addNewBublMessage = e => {
      e.preventDefault();


      this.props.addComment(this.state)
      .then(() => this.props.getComments(this.state.thread_id))         

      this.setState({
         comments: ""
      })
   }

   render() {  
     console.log(this.state.student_id);
       
      return (
         <form onSubmit={this.addNewBublMessage}>
            <Input
               name="comments" 
               value={this.state.comments} 
               required
               onChange={this.handleChange}
               placeholder="Enter message"/>
            <Button type="submit">Add New Message</Button>
         </form>
      )
   }
}

const mapStateToProps = state => {
   return {
      postingBubls: state.postingBubls,
      school_id: state.school_id,
      student_id: state.student_id,
      bubl_id: state.bubl_id,
      // thread_id: state.thread_id,

   }
}

export default connect(mapStateToProps, {addComment, getComments})(InputBubl);