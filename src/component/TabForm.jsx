import { useState } from "react";
import Profile from "./Profile";
import Settings from "./Settings";
import Interests from "./interests";

const TabForm = () => {
  const [data, setData] = useState({
    name: "Suleman khan",
    age: "25",
    email: "suleman@gmail.com ",
    interests: ["coding", "cricket", "movies"],
    theme: "dark",
  });
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "settings",
      component: Settings,
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div>
      <div className="header">
        {tabs.map((t, index) => (
          <div
            className="header_section"
            onClickCapture={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab_body">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
    </div>
  );
};

export default TabForm;
