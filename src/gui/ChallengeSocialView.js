import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Typography } from '@material-ui/core';

export default function ChallengeUserView({data}){

    const videoplayer = (video_link) => {if(video_link!==null)return (
        <ReactPlayer
        url={video_link}
        width='100%'
      />
        )}

console.log(data.video_link)

    return (
        <Box>
        {videoplayer(data.video_link)}
        <Typography variant='body1'>
            {data.user_challenge_description}
        </Typography>
        </Box>
    )
}