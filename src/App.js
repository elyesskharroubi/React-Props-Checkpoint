import "./App.css";
import Profile from "./profile/Profile";
import pic from "./pexels-profile.jpg";

function App() {
  const showName = (name) => {
    alert(name);
  };
  return (
    <div className="App">
      <Profile
        name="John Doe"
        bio="Lorem ipsum dolor sit, amet."
        profession="CEO of nothing."
        showName={showName}
      >
        <img
          src={pic}
          alt="profile-pic"
          width="300px"
          style={{ transform: "translateY(-40px)" }}
        />
      </Profile>
    </div>
  );
}

export default App;
