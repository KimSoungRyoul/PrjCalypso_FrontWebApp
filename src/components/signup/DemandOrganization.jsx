import React, {Component, Fragment} from "react";
import FormInput from "./InputForm";

class DemandOrganization extends Component {
    handleChange = e => {
        this.oks[e.name] = e.isOK;
        this.setState({
            [e.name]: e.value,
            allok: this.oks["name"] && this.oks["phone"]
        });
    };
    handleSubmit = e => {
        alert(JSON.stringify(this.state));
        e.preventDefault();
    };

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            allok: false
        };
        this.oks = {};
        this.label = {
            id: "ID",
            password: "Password",
            email: "Email",
            address: "Address",
            name: "Name",
            phone: "Phone",
            permitNumber: "PermitNumber"
        };
        this.placeholder = {
            id: "Id",
            password: "Password",
            name: "Name",
            email: "Email",
            phone: "Phone 000-(0)000-0000",
            address: "Address",
            permitNumber: "Permit Number"
        };
        this.maxLength = {
            id: 20,
            password: 20,
            email: 35,
            address: 50,
            name: 5,
            phone: 13,
            permitNumber: 25
        };
        this.regularExpression = {
            nameRegular: /^[가-힣]{2,5}$/,
            phoneRegular: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/
        };
    }

    render() {
        const submitState = this.state.allok;
        const {placeholder, maxLength, regularExpression, label} = this;

        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="id"
                        label={label.id}
                        placeholder={placeholder.id}
                        onChange={this.handleChange}
                        maxLength={maxLength.id}
                    />
                    <FormInput
                        name="password"
                        label={label.password}
                        placeholder={placeholder.password}
                        onChange={this.handleChange}
                        maxLength={maxLength.password}
                    />
                    <FormInput
                        name="name"
                        label={label.name}
                        placeholder={placeholder.name}
                        pattern={regularExpression.nameRegular}
                        onChange={this.handleChange}
                        maxLength={maxLength.name}
                    />
                    <FormInput
                        name="email"
                        label={label.email}
                        placeholder={placeholder.email}
                        onChange={this.handleChange}
                        maxLength={maxLength.email}
                    />

                    <FormInput
                        name="phone"
                        label={label.phone}
                        placeholder={placeholder.phone}
                        pattern={regularExpression.phoneRegular}
                        onChange={this.handleChange}
                        maxLength={maxLength.phone}
                    />
                    <FormInput
                        name="address"
                        label={label.address}
                        placeholder={placeholder.address}
                        onChange={this.handleChange}
                        maxLength={maxLength.address}
                    />
                    <FormInput
                        name="permitNumber"
                        label={label.permitNumber}
                        placeholder={placeholder.permitNumber}
                        onChange={this.handleChange}
                        maxLength={maxLength.permitNumber}
                    />
                    <div className="btn">
                        {submitState ? (
                            <input type="submit" value="전송"/>
                        ) : (
                            <input type="submit" value="전송" disabled/>
                        )}
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default DemandOrganization;
