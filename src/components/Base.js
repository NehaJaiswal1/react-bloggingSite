import React from 'react';

const Base = ({title = "Welcome to our website", children})=>
{
  return (
     <div>
       {children}
     </div>
  );
}