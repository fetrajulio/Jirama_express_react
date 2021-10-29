import * as React from 'react';


interface IIprops{
    tab:{
        Name:string;
    listes: {id:number; nom:string; num:string ; prix:string;}[]
    }
    
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
        <a href="#" className="list-group-item list-group-item-action">
            <div className="row">
                <div className="col-2">0</div>
                <div className="col-4">julio</div>
                <div className="col-3">5555</div>
                <div className="col-3">1346</div>
            </div>
        </a>
        <div>
            {listes.map((i)=>( 
            <div>{i.nom}</div>)
            
            )}
        </div>
    </div>
}
export default class Liste extends React.Component{
    
    render() {
        const datab ={
            Name:"client555",
            listes:[
                {id:0, nom:"julio",num:"1235",prix:"54100"},
                {id:1, nom:"123julio",num:"121211235",prix:"5411321300"},
                {id:2, nom:"julio1",num:"11321235",prix:"541321100"},
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