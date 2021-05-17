import React from "react";
import { Row, Col} from "antd";
import { Typography } from "antd";
import { CoulombInfo } from "../../components/Coulomb/CoulombInfo";

const { Title } = Typography;

const MainCoulomb = () => {
  
  return (
    <>
      <Row>
        <Col span={24}>
          <Title>Coulomb</Title>
          <hr/><br/>
        </Col>
        <CoulombInfo/>
      </Row>
    </>
  );
};

export default MainCoulomb;
