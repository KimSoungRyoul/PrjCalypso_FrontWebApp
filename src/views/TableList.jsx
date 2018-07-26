import React, {Component} from 'react';
import {Col, Grid, Row, Table} from 'react-bootstrap';

import Card from "components/dashboard/Card.jsx";
import Sidebar from "components/dashboard/Sidebar";
import Header from "components/dashboard/Header";

import {tdArray, thArray} from "../variables/Variables.jsx";


class TableList extends Component {


    render() {
        return (
            <div className="wrapper">
                <Sidebar {...this.props} />
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <Header {...this.props} />
                    <div className="content">
                        <Grid fluid>
                            <Row>
                                <Col md={12}>
                                    <Card
                                        title="봉사 기록"
                                        category="volunteer History"
                                        ctTableFullWidth
                                        ctTableResponsive
                                        content={
                                            <Table striped hover>
                                                <thead>
                                                <tr>
                                                    {thArray.map((prop, key) => {
                                                        return <th key={key}>{prop}</th>;
                                                    })}
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {tdArray.map((prop, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            {prop.map((prop, key) => {
                                                                return <td key={key}>{prop}</td>;
                                                            })}
                                                        </tr>
                                                    );
                                                })}
                                                </tbody>
                                            </Table>
                                        }
                                    />
                                </Col>

                                <Col md={12}>
                                    <Card
                                        plain
                                        title="여기는 뭐 넣지?"
                                        category="Here is a subtitle for this table"
                                        ctTableFullWidth
                                        ctTableResponsive
                                        content={
                                            <Table hover>
                                                <thead>
                                                <tr>
                                                    {thArray.map((prop, key) => {
                                                        return <th key={key}>{prop}</th>;
                                                    })}
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {tdArray.map((prop, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            {prop.map((prop, key) => {
                                                                return <td key={key}>{prop}</td>;
                                                            })}
                                                        </tr>
                                                    );
                                                })}
                                                </tbody>
                                            </Table>
                                        }
                                    />
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }

}
export default TableList;
