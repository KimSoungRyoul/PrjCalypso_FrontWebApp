import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our teamLeader</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <GridItem xs={12} sm={12} md={2} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                나준규
                  <br />
                <small className={classes.smallTitle}>Mento</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  스마트동 CEO
                  </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  김성렬
                  <br />
                  <small className={classes.smallTitle}>PL</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    나는야 김성렬
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  홍종화
                  <br />
                  <small className={classes.smallTitle}>FE</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    나는야 홍종화
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  손익현
                  <br />
                  <small className={classes.smallTitle}>BE</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    나는야 홍종화
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  안현지
                  <br />
                  <small className={classes.smallTitle}>DBA</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    나는야 안현지
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
