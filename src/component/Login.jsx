import React, { Component, Fragment } from "react";
import Radio from "./Radio";
import GeneralMember from "./signup/GeneralMember";
import OrganizationMember from "./signup/OrganizationMember";
import DemandOrganization from "./signup/DemandOrganization";
import "../asset/css/custom/Login.css";

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
      <Fragment>
        <div className="GradeRadio">
          <Radio
            items={["일반회원", "소외관리자", "복지기관"]}
            value={select}
            onChange={onChange}
          />
        </div>
        <div className="UserInfoArea">{this.returnInput(select)}</div>
      </Fragment>
    );
  }
}

export default Login;
