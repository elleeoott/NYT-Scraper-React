import React, {Component}       from "react";
// containers for the bootstrap
import Jumbotron                from "../../components/Header";
import { Col, Row, Container }  from "../../components/Grid";
//Import API
import { List, ListItem }       from "../../components/List";
import { Input, FormBtn } from "../../components/Form";


class Articles extends Component{

    state={

        articles:[],
        newArticles:[],
        topic: "",
        startYear: "",
        endYear: "",
    }

//Something with component did mount and set the state to show?

    loadArticles = () =>{

        API.getArticles()
            .then(res => {

                    //Something with setting the state with .data?
                }
            )
    };

    saveArticles = (newArticle) =>{
   
//Pass the new article by title and ID and save to API, push to MongoDB?

    deleteArticle = (deleteId) =>{

            API.deleteArticle(deleteId)
            .then(res => this.loadArticles())

    }

    //Handle form submissions


    formSubmit = (event) =>{
   
        event.preventDefault();

        if (this.state.topic && this.state.startYear){
            API.getNewArticles({
                topic: this.state.topic,
                startYear: this.state.startYear,
                endYear: this.state.endYear
            })
                .then(res =>{ 
                    var holdArticles = res.data.response.docs;

                    var arrayNewArticles = {};
                    arrayNewArticles.newArticles = [];

//Loop through the array of stored articles

//Push as a JSON object

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Header>
                         
                                <h1>NYT Article Scraper</h1>
                                <p className="lead">Test</p>
                            </Header>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">

                        <div>
                        <NewCompnent>
                            <h2>Search</h2>
                        </NewCompnent>
                        <form>

{/* //Some way to parse each article as a JSON object */}

{/* //Need a button component here */}

                        </form>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">

{/* //List the items produced by the scrape */}

                        </div>

                    </Col>
                </Row>

            </Container>
        );// 
    }// end render
}// end class

export default Articles;