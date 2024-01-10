import { useEffect } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectAllUsers } from "redux/user/userSelectors";
import { fetchAllUsersThunk } from "redux/user/userThunk";

import Modal from "components/common/Modal/Modal";
import ChatModal from "components/ChatRooms/Modal/ChatModal/ChatModal";

import { PublicChatsList } from "components/ChatRooms/PublicChatsList/PublicChatsList";
import { PrivateChatList } from "components/ChatRooms/PrivateChatsList/PrivateChatsList";

import UserProfile from "../UserProfile/UserProfile";

import { ReactComponent as AddChatButton } from "../../../../images/addChatBtn.svg";
import { ReactComponent as ChatsBtn } from "../../../../images/chatsBtn.svg";
import { ReactComponent as SearchIcon } from "../../../../images/search.svg";

import {
  SearchBar,
  StyledChatsBtn,
  StyledNav,
  StyledSideBar,
  SearchInput,
  FriendsLink,
  ContactIcon,
  AddChatButtonWrapper,
  Title,
  Form,
  FriendsLinkWrapper,
} from "./SidePanel.styled";

// import { ChatProvider } from "contexts/ChatContext";
import { useChat } from "contexts/ChatContext";

export default function SidePanel() {
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState("");
  const { results } = useSelector(selectAllUsers);

  const { isPrivateChat } = useChat();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsersThunk());
  }, [dispatch]);

  const handleSearchValue = ({ target }) => {
    setValue(target.value);
  };

  return (
    <>
      <StyledSideBar>
        <StyledNav>
          <StyledChatsBtn type="button" to={"chats"}>
            <ChatsBtn />
          </StyledChatsBtn>

          <AddChatButtonWrapper
            type="button"
            onClick={() => setModalActive(true)}
          >
            <AddChatButton />
          </AddChatButtonWrapper>

          {/* <PublicChatsList /> */}
          <UserProfile />
        </StyledNav>

        <SearchBar>
          <Title>
            {isPrivateChat ? "Private messages" : "Public messages"}
          </Title>

          <Form>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Find or start a conversation"
              value={value}
              onChange={handleSearchValue}
            />
          </Form>
          <FriendsLinkWrapper>
            <ContactIcon />
            <FriendsLink to={"friends/all"}>Friends</FriendsLink>
          </FriendsLinkWrapper>

          <PrivateChatList searchValue={value} />
        </SearchBar>
      </StyledSideBar>

      <Modal active={modalActive} setActive={setModalActive}>
        <ChatModal users={results} setActive={setModalActive} />
      </Modal>
      <Outlet />
    </>
  );
}
