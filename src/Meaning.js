import React from "react";
import "./Meaning.css";

export default function Meaning(props){
    console.log(props.meaning);
    return (
      <div className="Meaning">
      
         <h3>{props.meaning.partOfSpeech}</h3>     
        {props.meaning.definitions.map(function(definition, index){
          return (
            <div className="boxes">
                <div className="def">
              <strong>`Definition : </strong>{definition.definition}`
                </div>
    
              
                <div className="def">
                  <strong> Example : </strong> <em>{definition.example}</em>
                </div>
            

          
                <div className="def">
                  <strong>`Synonyms : </strong>{definition.synonyms}`
                </div>
            </div>
          ); 
        })}
</div>  

    );


}