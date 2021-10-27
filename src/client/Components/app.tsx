import * as React from 'react';
import '../Less/app.less';
import {apiRoute} from '../utils';
import {AppProps, AppStates} from "../../server/domain/IApp";
import {ITest} from "../../server/domain/ITest";
import {Put, Post, Get, Delete} from "../Services";

export default class App extends React.Component<AppProps, AppStates> {
    state: AppStates = {
        username: '',
        textOfPostTest: '',
        textForPost: '',
        textOfPutTest: '',
        textForPut: '',
        textOfDeleteTest: '',
        textForDelete: '',
    };

    testGet = async (): Promise<void> => {
        try {
            const res: { username: string } = await Get(apiRoute.getRoute('test'))
            this.setState({username: res.username});
        } catch (e) {
            this.setState({username: e.message});
        }
    }


    testPost = async (): Promise<void> => {
        const {textOfPostTest} = this.state;

        if (textOfPostTest.trim()) {
            try {
                const res: ITest = await Post(
                    apiRoute.getRoute('test'),
                    {text: textOfPostTest}
                );
                this.setState({
                    textForPost: res.text,
                    response: res,
                });
            } catch (e) {
                this.setState({textForPost: e.message});
            }
        }
    }

    testPut = async (): Promise<void> => {
        const {textOfPutTest, response} = this.state;
        if (response && textOfPutTest.trim()) {
            try {
                const res: ITest = await Put(
                    apiRoute.getRoute('test'),
                    {text: textOfPutTest, id: response?._id}
                    );
                this.setState({textForPut: res.text, response: res});
            } catch (e) {
                this.setState({textForPut: e.message});
            }
        } else {
            this.setState({
                textForPut: "You don't have any resource in database to change. first use post",
            })
        }
    }

    testDelete = async (): Promise<void> => {
        const {response} = this.state;
        if (response) {
            try {
                const res: ITest = await Delete(apiRoute.getRoute('test'), {id: response?._id});
                this.setState({textForDelete: `${res._id} ${res.text}`, response: undefined});
            } catch (e) {
                this.setState({textForDelete: e.message});
            }
        } else {
            this.setState({
                textForDelete: "You don't have any resource in database to delete. first use post"
            })
        }
    }

    render() {
        const {username, textForPost, textForPut, textForDelete} = this.state;
        const inputText = "Input text...";
        return (
            <div>
                <div>
                    <div>
                        <label>{"Numero Matricule Conteur: "}</label>
                        <input type="text" className="form-control" placeholder="Numero Matricule" onChange={e => this.setState({textOfPostTest: e.target.value})}/>
                        
                    </div>
                    <div className="form-group">
                        <label>{"Nom Client: "}</label>
                        <input type="text" className="form-control" placeholder="Numero Matricule" onChange={e => this.setState({textOfPostTest: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label>{"Mots de Passe Client: "}</label>
                        <input type="password" className="form-control" placeholder="Numero Matricule" onChange={e => this.setState({textOfPostTest: e.target.value})}/>
                    </div>
                    <br />
                    <div className="form-group">
                        <button className="btn btn-success" onClick={this.testPost}>{"Identifier"}</button>
                    </div>
                </div>
            </div>
        );
    }
}
