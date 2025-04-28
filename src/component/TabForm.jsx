import { useState } from "react";
import Profile from "./Profile";
import Settings from "./Settings";
import Interests from "./interests";

const TabForm = () => {
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
    <div className="">
      <div className="header">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="header_section"
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>

      <div className="tab_body">
        <ActiveTabComponent />
      </div>
    </div>
  );
};

export default TabForm;
