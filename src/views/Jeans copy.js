/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import icons from "variables/icons";

function Jeans() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h5 className="title">Jeans</h5>
                <p className="category">
                Jeans for Men
Men's Jeans Form The Foundation of Contemporary Wardrobes. Whether Tailored or Super Skinny, Straight or Slim, Biker or Destroyed, Our Denim Collection Caters To Every Style And Silhouette. Hight-Waisted And Low-Rise Designs, As Well As Tapered Cuts Cater To Specific Tastes, While Whases Range From Black And Classic Indigo To White And Colourful. To Strike A Modern Everyday Note, Team Your Chosen Pair With A White T-Shirt And A Blazer; A Statement Shirt And Leather Jacket; Or A Chunky Hooded Sweatshirt And Sneakers.
                </p>
              </CardHeader>
              
              {/* <CardBody className="all-icons">
                <Row>
                  {icons.map((prop, key) => {
                    return (
                      <Col
                        lg={2}
                        md={3}
                        sm={4}
                        xs={6}
                        className="font-icons-list"
                        key={key}
                      >
                        <div className="font-icon-detail">
                          <i className={"now-ui-icons " + prop} />
                          <p>{prop}</p>
                        </div> 
                      </Col>
                    );
                  })}
                </Row>
              </CardBody> */}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Jeans;
