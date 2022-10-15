import MainPage from "./components/MainPage/MainPage";
import { ChatProvider } from "./context/chat.context";
function App() {
  return (
    <div className="App">
      <ChatProvider>
        <MainPage />
      </ChatProvider>

    </div>
  );
}

export default App;
