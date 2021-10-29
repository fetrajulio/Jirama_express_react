import * as React from 'react';


interface IIprops{
    tab:{
        Name:string;
    listes: {id:number; nom:string; num:string ; prix:number;}[]
    }
    
}
function idrandom(min:number,max:number){
    return Math. floor(Math. random()*(max-min+1)+min);
    }
const Lits = (props: IIprops) =>{
    const {Name,listes} =props.tab;
    return <div>
        <a href="#" className="list-group-item list-group-item-action active">
            <div className="row">
                <div className="col-2">id</div>
                <div className="col-4">Nom</div>
                <div className="col-3">Num Conteur</div>
                <div className="col-3">Prix</div>
            </div>
        </a>
        {listes.map((i)=>( 
            <div>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="row">
                        <div className="col-2">{i.id}</div>
                        <div className="col-4">{i.nom}</div>
                        <div className="col-3">CT-{i.num}</div>
                        <div className="col-3">{i.prix}00Ar  
                        
                        <span className="badge bg-primary">Non Payer</span></div>
                    </div>
                </a>
                
            </div>
            
            )
            
            )}
        
        <div>
           
        </div>
    </div>
}
export default class Liste extends React.Component{
    
    render() {
        const datab ={
            Name:"client555",
            listes:[
                {id:0, nom:"julio",num:"TANA5-1235",prix:idrandom(5,3040)},
                {id:1, nom:"berziky",num:"TANA5-1215",prix:idrandom(5,3940)},
                {id:2, nom:"bezara",num:"TANA3-1135",prix:idrandom(5,3030)},
                {id:3, nom:"armel",num:"TANA1-1145",prix:idrandom(5,3040)},
                {id:4, nom:"meva",num:"TANA4-1136",prix:idrandom(5,3040)},
                {id:5, nom:"vatosoa",num:"TANA3-1133",prix:idrandom(5,3040)},
                {id:6, nom:"njara",num:"TANA1-1335",prix:idrandom(5,30400)},
                {id:7, nom:"njarasoa",num:"TANA1-5635",prix:idrandom(5,304000)},
                {id:8, nom:"andriamiahaja",num:"TANA3-9235",prix:idrandom(5,30400)},
                {id:9, nom:"hobitina",num:"TANA1-5425",prix:idrandom(5,30400)},
            ]
        }
        return (
           <div>
                <div className="card border-primary mb-3">
                    <div className="card-header">Liste Des Clients</div>
                    <div className="card-body">
                        <Lits tab={datab} />               
                    </div>
                </div>
          </div>
            
        );
    }
}