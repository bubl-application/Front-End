import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getBubl } from '../actions';
import InputBubl from './InputBubl';
import BublMessage from './BublMessage';

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
      let bubls = [
        {
          id: 1,
          bublname: "pokemon",  
          message: [
            {
              username: "student01",
              text:
                "My favorite pokemon is ..."
            },
            {
              username: "student02",
              text: "Mine too!"
            },
            {
              username: "student03",
              text: "Can't wait to play the new game!"
            }
          ]
        },
        {
         id: 2,
         bublname: "sports",  
         message: [
           {
             username: "student01",
             text:
               "My favorite pokemon is ..."
           },
           {
             username: "student02",
             text: "Mine too!"
           },
           {
             username: "student03",
             text: "Can't wait to play the new game!"
           }
         ]
       },
      ]

      this.setState(() => ({ bubls }));
   }

   render() {
      console.log(this.state.bubls);
      return (
         <div className="bubl-page">
         <h2>Bubls</h2>            
            {/* <h2>{this.props.bubl.bublname}</h2>
            <ul>
               {this.props.bubl.hashtags.map((hashtag, index) => (
                  <div key={index}>#{hashtag}</div>
               ))}
            </ul> */}

            {this.state.bubls.map((bubl, index) => (
              <h4>{bubl.bublname}</h4>
            ))} 
               {/* <BublMessage key={index}/> */}
            <InputBubl />
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