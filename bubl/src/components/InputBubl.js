import React, {Component} from 'react';
import { connect } from 'react-redux';
import { postBubl, getComments } from '../actions';
import {Button, Input} from '../StyledComponents';

class InputBubl extends Component {
   state = {
      comments: "",

      school_id: '',
      student_id: '',
      thread_id: '',
      bubl_id: '',

      // bublName: "pokemon",
      // comments: "awesome comment",
      // id: 1,
      // title: "I cant wait for detective pikachu",
      // username: "winterIsComing",
   }

   componentWillReceiveProps(nextProps) {
    this.setState({
      school_id: nextProps.school_id,
      student_id: nextProps.student_id,
      thread_id: nextProps.thread_id,
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
      if (this.state.comments !== '') {
         this.props.postBubl(this.state, this.props.id);
         this.props.getComments(this.props.id)
      }
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
      thread_id: state.thread_id,

   }
}

export default connect(mapStateToProps, {postBubl, getComments})(InputBubl);