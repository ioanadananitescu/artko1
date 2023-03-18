import React from 'react';
import { Skeleton } from '@mui/material';

const Loading = ({children}) => {

    //project to load before the actual image component a skeleton that will have the same width and height as the final component, so we can tell that "something" will load there. 
    // connected with the Featured component. 
  return (
    <Skeleton>{children}</Skeleton>
  )
}

export default Loading
