// import load from 'loadash';
import _ from 'lodash';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from './api-key'; 

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            videos : [],
            selectedVideo : null,
        }

       this.YoutubeSearch('surfboards');
    }

    YoutubeSearch(term){
        YTSearch({key:API_KEY, term : term},(videos) => {
            this.setState({videos:videos,selectedVideo:videos[0]});
        });
    }

    render() {
        const videoSearch = _.debounce((term) => this.YoutubeSearch(term),1000);
        return (
            <div>
                <SearchBar onSearch={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />,document.querySelector(".container"));