import React, { Component } from "react";
import Radio from "./Radio";
import GeneralMember from "./signup/GeneralMember";
import OrganizationMember from "./signup/OrganizationMember";
import DemandOrganization from "./signup/DemandOrganization";

class Login extends Component {
  state = {
    selectRadio: "일반회원"
  };

  handleSelect = slectName => {
    this.setState({
      selectRadio: slectName
    });
  };

  returnInput(userGrade) {
    switch (userGrade) {
      case "일반회원":
        return <GeneralMember />;
      case "소외관리자":
        return <OrganizationMember />;
      case "복지기관":
        return <DemandOrganization />;
    }
  }

  render() {
    const onChange = this.handleSelect;
    const select = this.state.selectRadio;

    return (
      <div>
        <Radio
          items={["일반회원", "소외관리자", "복지기관"]}
          onChange={onChange}
        />
        {this.returnInput(select)}
        {/* 
        <form action="#" method="post">


          <label className="anim">
            <input type="checkbox" className="checkbox" />
            <span> I accept the terms of use</span>
          </label>
          <div className="w3ls-submit">
            <input className="register" type="submit" value="REGISTER" />
          </div>
        </form>
        */}
      </div>
    );
  }
}

export default Login;
