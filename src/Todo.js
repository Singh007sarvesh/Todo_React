import React, {Component} from 'react';
import './index.css'
export default class TodoList extends Component{

    constructor(){
        super();
        this.state = {
            todo:'',
            todolist:[],
            add:false,
            count:1
        }
    }
    componentDidMount(){
        let myNodelist = document.getElementsByTagName("LI");
        let i;
        for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
        }

        let close = document.getElementsByClassName("close");
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
    }

    onChange  = (e) => {
            this.setState({
                todo:e.target.value
            });
    }
    close =  () =>{
        setTimeout(() => {
            
          
        let myNodelist = document.getElementsByTagName("LI");
        let i;
        console.log(myNodelist.length);
        
        for (i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
        }

        let close = document.getElementsByClassName("close");
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
          }
        }
    }, 0);
    }
    submitForm = (e)=>{
        
        e.preventDefault();
        this.setState({
            add:true
        })
        this.state.todolist.push(this.state.todo);
        this.setState({
            todo:''
        })
        // console.log(this.state.todolist.length);
        
    }
    render(){
        
        return (
            <div>
                <div id="myDIV" className="header">
                    <h2 >My To Do List</h2>
                    <form onSubmit={this.submitForm}>
                        <input type="text" id="myInput" placeholder="Title..."
                         required onChange={this.onChange} value={this.state.todo}/>
                        <input type='submit' value='Add' className="addBtn" 
                        onClick={this.close} ></input>
                        {/* <span className="addBtn">Add</span> */}
                    </form>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Home</a>
                    <button type="button" className="btn btn-outline-primary">Primary</button>
                    <button type="button" className="btn btn-outline-primary">Secondary</button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <ul id="myUL">
                    <li>Hit the gym</li>
                    <li className="checked">Pay bills</li>
                    <li>Meet George</li>
                    <li>Buy eggs</li>
                    <li>Read a book</li>
                    <li>Organize office</li>
                    {
                       
                        
                        this.state.todolist.map((data,key)=>(
                        <li key={key}>{data} </li>))
                    }
                </ul>
            </div>
        );
    }
};
