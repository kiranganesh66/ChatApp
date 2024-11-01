import React, { useEffect, useState } from "react";
import logo_chat from "../assets/logo_chat.png";
import styled from "styled-components";

export default function Contacts({ contacts, currentUser, changeChat }) {
  const [currentUserName, setcurrentUserName] = useState(undefined);
  const [currentUserImage, setcurrentUserImage] = useState(undefined);
  const [currentSelected, setcurrentSelected] = useState(undefined);

  useEffect(() => {
    //console.log(contacts);
    if (currentUser) {
      setcurrentUserImage(currentUser.avatarImage);
      setcurrentUserName(currentUser.userName);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setcurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserName && currentUserImage && (
        <Contanier>
          <div className="brand">
            <img src={logo_chat} alt="logo" />
            <h3>KriPpyZy</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => {
                    changeCurrentChat(index, contact);
                  }}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="userName">
                    <h3>{contact.userName}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="userName">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Contanier>
      )}
    </>
  );
}

const Contanier = styled.div`
  display: grid;
  grid-template-rows: 20% 65% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img {
      height: 4rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }

  .contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  gap: 0.8rem;
  
  &::-webkit-scrollbar {
    width: 0.2rem; 
    
    &-thumb {
      background-color: #ffffff39;
      width: 0.1rem;
      border-radius: 1rem;
    }
  }
}


    .contact {
      background-color: #ffffff39;
      min-height: 4.4rem;
      width: 90%;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.4rem;
      gap: 1rem;
      display: flex;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .userName {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #9186f3;
    }
  
  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }

    .userName {
      h2 {
        color: white;
      }
    }

    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .userName {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
