import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";

import "./App.css"

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 5;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
padding: 10px 40px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home/>} />
                  <Route path="video">
                    <Route path=":id" element={<Video/>} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
