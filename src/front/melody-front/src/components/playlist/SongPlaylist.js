"use client"

import React, {useEffect, useState} from "react";
import { useRouter } from 'next/navigation'
import axios from "axios";
import "./SongPlaylist.css"

function SongPlaylist({playlistId}) {

    const [songId, setSongId] = useState(0);
    const [playlist, setPlaylist] = useState([]);
    const [songs, setSongs] = useState([]);

    const getSongsById = (input) => {
        const playlistId = input
        axios.get(`/api/playlists/songs/${playlistId}`)
            .then(r =>{
                console.log(playlistId)
                if(r.data){
                    setPlaylist(r.data);
                    console.log('data',r.data);
                } else{

                }
                console.log('playlist 리스트업 성공')
            })
            .catch(err =>{
                console.error(err);
            })
    }

    useEffect(() => {
        getSongsById(playlistId)
    }, [playlistId]);

    return(
        <>
            <div className="songPlaylist">
                <div className="playlistName">
                    <h1>Playlist</h1>
                </div>
                {playlist.songs && playlist.songs.map((song, index) => (
                    <ul key={index}>
                        <div className="list">
                            <div className="listHover">
                                <span>{index + 1}</span>
                                <span>{song.title}</span>
                            </div>
                        </div>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default SongPlaylist;