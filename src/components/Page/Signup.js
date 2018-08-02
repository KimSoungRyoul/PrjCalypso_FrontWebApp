import React, { Component } from "react";
import CustomRadio from "../Signup/CustomRadio";
import "../../asset/css/Signup.css";
import GeneralMem from "../Signup/GeneralMem";
import OranizationMem from "../Signup/OranizationMem";
import DemandMem from "../Signup/DemandMem";

const GENERAL = "1";
const ORGANIZATION = "2";
const DEMAND = "3";
class Signup extends Component {
  state = {
    select: "1"
  };

  handleSelect = select => {
    this.setState({
      select
    });
  };

  returnForm = select => {
    switch (select) {
      case GENERAL:
        return (
          <div>
            <GeneralMem />
          </div>
        );
      case ORGANIZATION:
        return (
          <div>
            <OranizationMem />
          </div>
        );
      case DEMAND:
        return (
          <div>
            <DemandMem />
          </div>
        );
      default:
        return <div>not</div>;
    }
  };

  render() {
    const onChange = this.handleSelect;
    const select = this.state.select;
    return (
      <div className="Signupwrap">
        <div className="signup">
          <div className="container">
            <div className="title">
              <span>회원 가입</span>
            </div>
            <div className="radioArea">
              <CustomRadio
                items={["일반회원", "소외관리자", "복지기관"]}
                value={select}
                onChange={onChange}
              />
            </div>
            <div className="InputArea">{this.returnForm(select)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
