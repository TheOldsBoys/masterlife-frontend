import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import {isValidLink} from '../functionValidate'


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Card>
              {children}
          </Card>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

export default function ChallengeUserView({data}){

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const videoplayer = (video_link) => {if(video_link!==null)return (
        <ReactPlayer
        url={video_link}
        width='100%'
      />
        )}
    
    const ImageView = () =>{
        if(isValidLink(data.images_link))return(
          <CardMedia
                className={classes.media}
                image={data.images_link}
                title="Immagini"
                  />)
        else return null;
    }
console.log(data.video_link)
console.log(data.images_link)
    return (
        <Box>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="Visualizza la sfida">
                <Tab label="Descrizione"/>
                <Tab disabled={data.video_link==="" || data.video_link===null} label="Video"/>
            </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {ImageView()}
                <CardContent>   
                        {data.user_challenge_description}
                </CardContent>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {videoplayer(data.video_link)}
            </TabPanel>
        </Box>
    )
}