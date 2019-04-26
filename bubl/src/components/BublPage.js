import React, {Component} from 'react';
import InputBubl from './InputBubl';
import BublMessage from './BublMessage';

class BublPage extends Component {

  state = {
    bubls: []
  };

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
          bubl: "pokemon",  
          comments: [
            {
              username: "philzcoffee",
              text:
                "We've got more than just delicious coffees to offer at our shops!"
            },
            {
              username: "biancasaurus",
              text: "Looks delicious!"
            },
            {
              username: "martinseludo",
              text: "Can't wait to try it!"
            }
          ]
        },
      ]

      this.setState(() => ({ bubls }));

   }

   render() {
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
              <h4>{bubl.bubl}</h4>
            ))} 
               {/* <BublMessage key={index}/> */}
            {/* <InputBubl /> */}
         </div>
      )
   }
}

export default BublPage;