import { MainButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";

const App = () => {
  const showPopup = useShowPopup();

  return (
    <>
      Some page content...
      <MainButton
        text="SHOW POPUP"
        onClick={() => {
          showPopup({
            message: "Hello, I'am showPopup handle",
          });
        }}
      />
    </>
  );
};
export default App;
