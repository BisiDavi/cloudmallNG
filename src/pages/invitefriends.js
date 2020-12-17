import { Pageheader, inviteIcon } from '../imports';

const InviteFriends = () => {
  return (
    <Pageheader title="Invite friends">
      <div className="settings_page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-lg-12">
              <div className="text_code mb-5">
                Your referral code is{" "}
                <span className="font-weight-bold">5060</span>
                <button className="border-black rounded">5060</button>
              </div>
              <div className="mx-auto invite_friend_img">
                <img
                  src={inviteIcon}
                  alt="invite your friend to use cloudmall"
                />
              </div>
              <div className="user_balance">
                <p className="text-center">
                  You currently have
                  <button className="rounded mx-3">500</button>
                  cloud coins
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Pageheader>
  );
};

export default InviteFriends;
