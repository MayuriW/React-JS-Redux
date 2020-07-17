import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as action from '../actions';
import MovieView from '../component/movieView';
//Logical part will keep in container
class App extends Component{
    //action called here
    componentDidMount() {
        this.props.movieList()
    }

    //final view is rendered
    render() {
        return(
            <div>
                <MovieView list={this.props.output}></MovieView>
            </div>
            )
        }
    }
    //
    function mapStateToProps(state)
    {
        console.log(state.movies);
        return{
            output:state.movies //call Reducer Name
        }
    }

export default connect(mapStateToProps,action)(App);