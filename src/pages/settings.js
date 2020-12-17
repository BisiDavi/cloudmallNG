import { Pageheader } from "../imports";

const Settings = () => {
  const settings = [
    { link: "Change Password", toggle: true },
    { link: "Notifications", menu: true },
    { link: "Pop-up", toggle: true },
    { link: "Email", toggle: true },
    { link: "Test", toggle: true },
    { link: "Change Language", toggle: true },
    { link: "Change Phone number", toggle: true }
  ];

  const displaySettingLink = () => {
    settings.map(settingLink => {
      const bgGray = (settingLink.menu) ? "bg-dark" : "bg-white";
      <div key={settingLink.link} className={bgGray}>{settingLink}</div>;
    });
  };
  return (
    <Pageheader title="Settings">
      <div className="settings_page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-lg-12">
              {displaySettingLink()}
            </div>
          </div>
        </div>
      </div>
    </Pageheader>
  );
};

export default Settings;
