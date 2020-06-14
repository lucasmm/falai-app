import React, {useState, useEffect} from 'react';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';

import {ImageContainer, SendImage} from './styles';

const Chatbot = () => {
  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      'dialogflow-eqvrag@ccr-hackathon.iam.gserviceaccount.com',
      '',
      Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
      'ccr-hackathon',
    );
  }, []);

  const [messages, setMessages] = useState([]);

  const onSend = (messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    messages.forEach(message => {
      console.log(message.text);
      Dialogflow_V2.requestQuery(
        message.text,
        result => {
          console.log(result);
          messages = [
            {
              _id: result.responseId,
              text: result.queryResult.fulfillmentText,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'Truck',
                avatar:
                  'https://img.icons8.com/pastel-glyph/64/000000/truck.png',
              },
            },
          ];
          setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
          );
        },
        error => console.log(error),
      );
    });
  };

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        placeholder="Escreva aqui..."
        locale="pt-BR"
        renderSend={props => (
          <Send {...props}>
            <ImageContainer>
              <SendImage source={require('../../../assets/send.png')} />
            </ImageContainer>
          </Send>
        )}
        onQuickReply={asd =>
          onSend([
            {
              _id: 123,
              text: asd[0].value,
              createdAt: new Date(),
              user: {
                _id: 1,
                name: 'User',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ])
        }
        user={{
          _id: 1,
        }}
      />
    </>
  );
};

export default Chatbot;
