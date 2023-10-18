"use client"
import React from 'react';
import Slider from 'react-slick';
import { css } from '@emotion/react';

import 'bootstrap-icons/font/bootstrap-icons.css';
import { NoSsr } from '@mui/base/NoSsr';
import SeasonSong from "./SeasonSong";

const seasonItemStyle = css`
  border-radius: 10px;
  background: linear-gradient(#41c4ff, #575fb3);
`;

const seasonItem2Style = css`
  background: linear-gradient(#e2ae18, #7b28d2);
`;

const seasonSlideStyle = css`
  display: flex;
  padding: 50px;
`;

const seasonTextStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  text-overflow: ellipsis;

  .season-text-sub {
    display: flex;
    gap: 50px;
  }

  .season-text-icon {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    border-radius: 50%;
    border: 1px solid #aaa;
    transition: 0.2s;
  }

  .season-text-image {
    width: 100px;
  }

  .season-text-span {
    font-size: 25px;
    font-weight: 600;
    line-height: 40px;
    color: #fff;
  }

  .season-text-p {
    color: #fff;
    font-weight: 300;
    font-size: 13px;
  }

  .season-text-play {
    &:hover {
      background-color: #fff;
    }
  }
`;

const seasonListStyle = css`
  flex: 2.5;
`;

const seasonSongsStyle = css`
  display: flex;
`;

const seasonSongCssStyle = css`
  flex: 1;
  display: flex;
`;

const seasonSongTextStyle = css`
  flex: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding-top: 10px;

  .season-song-text-span {
    color: #fff;
    font-weight: 600;
    display: block;
    margin-bottom: 3px;
    flex: 1;
  }

  .season-song-text-p {
    color: #d1d0d0;
    flex: 1;
  }
`;

const seasonSongImageContainerStyle = css`
  flex: 1;
  position: relative;
`;

const seasonSongImageElementStyle = css`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const songData = {
  "title": "여름노래 기강잡는 추억의 썸머송",
  "description": "총 10곡 | #summer",
  "songs": [
    {
      "image": "https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg",
      "title": "Super Shy",
      "artist": "뉴진스 (NewJeans)"
    },
    {
      "image": "https://cdnimg.melon.co.kr/cm2/album/images/109/09/179/10909179_20220405103521_500.jpg",
      "title": "LOVE DIVE",
      "artist": "IVE (아이브)"
    },
    {
      "image": "https://cdnimg.melon.co.kr/cm2/album/images/112/34/678/11234678_20230502162327_500.jpg",
      "title": "이브, 프시케 그리고 푸른 수염의 아내",
      "artist": "LE SSERAFIM (르세라핌)"
    },
    {
      "image": "https://cdnimg.melon.co.kr/cm2/album/images/112/36/264/11236264_20230508184331_500.jpg",
      "title": "Spicy",
      "artist": "aespa"
    },
    {
      "image": "https://cdnimg.melon.co.kr/cm2/album/images/111/88/020/11188020_20230223114923_500.jpg",
      "title": "Cupid",
      "artist": "FIFTY FIFTY"
    },
    {
      "image": "https://cdnimg.melon.co.kr/cm2/album/images/111/65/170/11165170_20230214120544_500.jpg",
      "title": "Teddy Bear",
      "artist": "STAYC (스테이씨)"
    }
  ]
};

const songData2 = {
  "title": "나른한 오후에 즐기는 피크닉 타임",
  "description": "총 10곡 | #healing",
  "songs": [
    {
      "image": "https://cdnimg.melon.co.kr/cm2/album/images/111/27/145/11127145_20230102135733_500.jpg",
      "title": "OMG",
      "artist": "뉴진스 (NewJeans)"
    },
    {
      "image": "https://cdnimg.melon.co.kr/cm2/album/images/110/78/852/11078852_20221017102947_500.jpg",
      "title": "LOVE",
      "artist": "(여자)아이들"
    },
    {
      "image": "https://cdnimg.melon.co.kr/cm2/album/images/112/36/264/11236264_20230508184331_500.jpg",
      "title": "Thirsty",
      "artist": "aespa"
    },
    {
      "image": "https://cdnimg.melon.co.kr/cm2/album/images/112/54/858/11254858_20230531233847_500.jpg",
      "title": "Steal The Show",
      "artist": "Lauv"
    },
    {
      "image": "https://cdnimg.melon.co.kr/cm2/album/images/106/38/810/10638810_20210628163843_500.jpg",
      "title": "오르골",
      "artist": "NCT DREAM"
    },
    {
      "image": "https://cdnimg.melon.co.kr/cm2/album/images/108/44/485/10844485_20221006154824_500.jpg",
      "title": "Light Switch",
      "artist": "Charlie Puth"
    }
  ]
};

const songs = songData.songs; // Array of songs
const songsChunks = [];
for (let i = 0; i < songs.length; i += 2) {
  // Split songs into chunks of two
  songsChunks.push(songs.slice(i, i + 2));
}

const songs2 = songData2.songs; // Array of songs
const songsChunks2 = [];
for (let i = 0; i < songs2.length; i += 2) {
  // Split songs into chunks of two
  songsChunks2.push(songs2.slice(i, i + 2));
}

const SeasonSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
      <NoSsr>
        <Slider {...settings}>
          <div>
            <div css={seasonItemStyle}>
              <div css={seasonSlideStyle}>
                <div css={seasonTextStyle}>
                  <span className="season-text-span">여름노래 기강잡는 <br/>추억의 썸머송</span>
                  <p className="season-text-p">총 10곡 <b> | </b> #summer</p>
                  <i className="bi bi-play-fill season-text-icon"></i>
                </div>
                <div css={seasonListStyle}>
                  {songsChunks.map((chunk, index) => (
                      <div css={seasonSongsStyle} key={index}>
                        {chunk.map((song, songIndex) => (
                            <div css={seasonSongCssStyle} key={songIndex}>
                              <SeasonSong songData={song} />
                            </div>
                        ))}
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div css={seasonItem2Style}>
              <div css={seasonSlideStyle}>
                <div css={seasonTextStyle}>
                  <span className="season-text-span">{songData2.title}</span>
                  <p className="season-text-p">{songData2.description}</p>
                  <i className="bi bi-play-fill season-text-icon"></i>
                </div>
                <div css={seasonListStyle}>
                  {songsChunks2.map((chunk, index) => (
                      <div css={seasonSongsStyle} key={index}>
                        {chunk.map((song, songIndex) => (
                            <div css={seasonSongCssStyle} key={songIndex}>
                              <SeasonSong songData={song} />
                            </div>
                        ))}
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </NoSsr>
  );
};

export default SeasonSlider;
