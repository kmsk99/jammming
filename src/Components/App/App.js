import "./App.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.state = {
            playlistName: "anty",
            playlistTracks: [
                {
                    name: "kim1",
                    artist: "min1",
                    album: "seok1",
                    id: 1,
                    uri: "http://spot.com",
                },
                {
                    name: "kim2",
                    artist: "min2",
                    album: "seok2",
                    id: 2,
                    uri: "http://spot.com",
                },
                {
                    name: "kim3",
                    artist: "min3",
                    album: "seok3",
                    id: 3,
                    uri: "http://spot.com",
                },
            ],
            searchResults: [
                {
                    name: "kim4",
                    artist: "min4",
                    album: "seok4",
                    id: 4,
                    uri: "http://spot.com",
                },
                {
                    name: "kim5",
                    artist: "min5",
                    album: "seok5",
                    id: 5,
                    uri: "http://spot.com",
                },
                {
                    name: "kim6",
                    artist: "min6",
                    album: "seok6",
                    id: 6,
                    uri: "http://spot.com",
                },
            ],
        };
    }

    addTrack(track) {
        if (this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
        } else {
            let addedTrack = [...this.state.playlistTracks, track];
            this.setState({ playlistTracks: addedTrack });
        }
    }

    removeTrack(track) {
        let removedTrack = this.state.playlistTracks.filter((savedTrack) => savedTrack.id !== track.id);
        this.setState({ playlistTracks: removedTrack });
    }

    updatePlaylistName(name) {
        this.setState(() => {
            return { playlistName: name };
        });
    }

    render() {
        return (
            <div>
                <h1>
                    Ja<span className="highlight">mmm</span>ing
                </h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
