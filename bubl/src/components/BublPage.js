import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getBubl } from '../actions';
import InputBubl from './InputBubl';
import dummyData from '../dummy-data.js'

class BublPage extends Component {
  state = {
    bubls: []
  }

   componentDidMount() {
      // this.props.getBubls();
      const id = this.props.match.params.id;
      
      // later this will be a get request to get bubls for the specific school
      this.fetchBubbles(id);
   }

   fetchBubbles = id => {
      // all just mocked for now.
      this.setState({bubls: dummyData});
   }

   render() {
      console.log(this.state.bubls);
      return (
         <div className="bubl-page">
         <h2>List of Bubls</h2>            
            {this.state.bubls.map((bubl, index) => (
              <>
                 <div>{bubl.bublname} ( {bubl.hashtags.map(hashtag => (<>#{hashtag} </>))})</div>
                 {bubl.messages.map(message => (
                    <>
                       <div>{message.username}: {message.text}</div>
                    </>
                 ))}
                 <InputBubl />
              </>
            ))}
         </div>
      )
   }
}
const mapStateToProps = state => {
   return {
      bubls: state.bubls,
      fetchingBubls: state.fetchingBubls
   }
}

export default connect(mapStateToProps, {getBubl})(BublPage);