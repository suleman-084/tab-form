import Profile from "./Profile";
import Settings from "./Settings";
import Interests from "./interests";

const TabForm = () => {
    
    const tabs = [{
        name : "Profile",
        component : Profile
    },
    {
        name : "Interests",
        component : Interests
    },
    {
        name : "settings",
        component : Settings
    },
    
]

    return <div className="header">
        <div className="header_section">
            {tabs.map((t)=><div>{t.name}</div>)}
        </div>
    </div>;
  };
  
  export default TabForm;
  