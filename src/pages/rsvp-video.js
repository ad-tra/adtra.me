import React, { useEffect } from 'react';
import Layout from '../components/Layout'


const RsvpVideo = () =>
{
    useEffect(() =>
    {
        window.location.href = 'https://drive.google.com/file/d/19vfMUecy6CsWNxTwsWBc2udlDp6EiCSS/view?usp=sharingnpm ';

    }, []);

    return (
        <Layout />
    );
}

export default RsvpVideo;
