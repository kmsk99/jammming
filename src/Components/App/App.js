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
        this.state = {
            playlistName: "anty",
            playlistTracks: [
                {
                    name: "kim12",
                    artist: "min12",
                    album: "seok12",
                    id: "1122",
                },
                {
                    name: "kim22",
                    artist: "min22",
                    album: "seok22",
                    id: "11222",
                },
                {
                    name: "kim32",
                    artist: "min32",
                    album: "seok32",
                    id: "11232",
                },
            ],
            searchResults: [
                {
                    name: "kim1",
                    artist: "min1",
                    album: "seok1",
                    id: "112",
                },
                {
                    name: "kim2",
                    artist: "min2",
                    album: "seok2",
                    id: "1122",
                },
                {
                    name: "kim3",
                    artist: "min3",
                    album: "seok3",
                    id: "1123",
                },
            ],
        };
    }

    addTrack(track) {
        if (this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
            this.state.playlistTracks.push(track);
        }
    }

    removeTrack(track) {
        this.setState((state) => {
            state.playlistTracks.filter((savedTrack) => savedTrack.id !== track.id);
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
                        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
