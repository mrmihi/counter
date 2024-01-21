import { store } from "@/store";
import { Provider } from "react-redux";
import HeroButton from "@/components/HeroButton.jsx";
function App() {
  return (
      <Provider store={store}>
          <HeroButton></HeroButton>
      </Provider>
  )
}

export default App
