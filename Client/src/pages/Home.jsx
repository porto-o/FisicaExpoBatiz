import React from "react";
import "../css/MainLayout.css";
import { Typography, Row, Col } from "antd";
import {
  BulbTwoTone,
  ExperimentTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";
const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Title>
        Física en Expo Bátiz &nbsp;
        <ExperimentTwoTone />
      </Title>
      <hr></hr>
      <Row>
        <Col span={12}>
          <div className="text">
            <p align="justify">
              <Title level={5}>
                Esta página tiene el propósito de reunir algunos de los temas
                más importantes de Física del CECyT 9. <BulbTwoTone />
              </Title>
              <Title level={5}>
                Haciéndote llegar a ti como estudiante algunos recursos para
                poder comprender mejor los temas, como simuladores interactivos
                3D y 2D.
              </Title>
              <Title level={5}>
                Esperemos que lo disfrutes. &nbsp;
                <SmileTwoTone />
              </Title>
            </p>
          </div>
        </Col>
        <Col span={1}></Col>
        <Col span={11}>
          <div className="polaroid">
            <img
              className="logo2"
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frainerzitelmann%2Ffiles%2F2019%2F06%2FE0MG76-e1560965378507-1200x1270.jpg"
              alt="einstein"
            ></img>
            <div className="container">
              <p>
                "Hay dos cosas infinitas: el universo y la estupidez humana. Y
                del universo no estoy seguro."
                <br />
                -Albert Einstein
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
