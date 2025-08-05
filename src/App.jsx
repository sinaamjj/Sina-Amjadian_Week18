import Contacts from "./component/Contacts";
import Header from "./component/header";
import { Context, ContactProvider } from "./context/Context";

function App() {
  return (
    <ContactProvider>
      <Header />
      <Contacts />
    </ContactProvider>
  );
}

export default App;
