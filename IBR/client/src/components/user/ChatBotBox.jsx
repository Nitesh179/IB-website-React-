import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components';

export default function ChatBotBox() {
    const theme = {
        // background: '#C9FF8F',
    headerBgColor: '#ab2330',
    headerFontSize: '20px',
    botBubbleColor: 'white',
    headerFontColor: 'white',
    botFontColor: 'black',
    userBubbleColor: ' #983E47',
    userFontColor: 'white',
      };

    const config ={
        width: "400px",
        height: "500px",
        floating: true
      };

    const steps=[
        {
            id:"greet",
            message:"Hello welcome to Infobeans Foundation",
            trigger:"Ask Name"
        },
        {
            id:"Ask Name",
            message:"Please enter your name",
            trigger:"Waiting"
        
        },
        {
            id:"Waiting",
           user:true,
            trigger:"Name"
        },
        {
            id:"Name",
            message:"Hii {previousValue} please select our problem",
            trigger:"issue"
        },
        {
            id:"issue",
            options:[
                {value:"react",label:"React",trigger:"react"},
                {value:"react Native",label:"React Native",trigger:"react Native"}
                  ],
        },
        {
            id:"react",
            message:"Thanks for telling problem",
            end:true
        },
        {
            id:"react Native",
            message:"Thanks for telling React Native problem",
            end:true
        },
    ]

  return (
    <>
     <ThemeProvider theme={theme}>
        <ChatBot steps={steps} {...config}/>
        </ThemeProvider> 
    </>
          )
    
}
