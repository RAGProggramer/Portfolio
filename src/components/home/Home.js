import React from 'react';
import ReactSnowfall from 'react-snowfall';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box, useTheme } from "@mui/material";
import { info } from "../../info/Info";
import backgroundImage from '../../img/background.png';

export default function Home() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const textClass = isDarkTheme ? Style.darkText : Style.lightText;

  return (
    <Box
      component="main"
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 175px)"
      className={Style.background}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <ReactSnowfall
        snowflakeCount={200}
        snowflakePosition="all"
        snowflakeCharacter="❄"
      />
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt="image of developer"
        style={{ background: info.gradient }}
        component="img"
        src={me}
        width={{ xs: '70vw', sm: '40vh', md: '30vh', lg: '25vh' }}
        height={{ xs: '70vw', sm: '40vh', md: '30vh', lg: '25vh' }}
        borderRadius="50%"
        p="0.75rem"
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, sm: '2rem' }}
      />
      <Box>
        <h1 className={classNames(textClass, Style.blueText)}>
          Ola! Eu Sou,{' '}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {info.firstName}
          </span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2 className={textClass}>Eu Sou {info.position}.</h2>
        <Box component="ul" p="0.8rem" className={textClass}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display="flex"
          gap="1.5rem"
          justifyContent="center"
          fontSize={{ xs: '2rem', md: '2.5rem' }}
        >
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
