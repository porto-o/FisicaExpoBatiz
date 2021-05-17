import React from "react";
import { Comment, List, Row, Col, Button } from "antd";

export const CoulombInfo = () => {
  const data = [
    {
      author: "Mr. Burrito",
      avatar:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9c3f701-f08b-4500-a3ef-8a548d833cfe/daal8dy-79ab3840-cf74-47f9-8cd7-f19649cbd16a.png/v1/fill/w_1600,h_1642,strp/ipn_burrificado_by_dilvereye_daal8dy-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY0MiIsInBhdGgiOiJcL2ZcL2E5YzNmNzAxLWYwOGItNDUwMC1hM2VmLThhNTQ4ZDgzM2NmZVwvZGFhbDhkeS03OWFiMzg0MC1jZjc0LTQ3ZjktOGNkNy1mMTk2NDljYmQxNmEucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Qdx0Kli97IHNM7abKbJ8-vPcgkVsZcJet7rPoLnHBB4",
      content: (
        <p>
          Cuando tienes dos partículas cargadas, se crea una fuerza eléctrica.
          Si tiene cargas más grandes, las fuerzas serán mayores. Si usa esas
          dos ideas y agrega el hecho de que las cargas pueden atraerse y
          repelerse entre sí, comprenderá la ley de Coulomb. Es una fórmula que
          mide las fuerzas eléctricas entre dos objetos.
        </p>
      ),
    },
    {
      author: "Bob",
      avatar:
        "https://w7.pngwing.com/pngs/41/206/png-transparent-discord-internet-bot-user-avatar-computer-servers-avatar-discord-text-smiley-discord.png",
      content: (
        <p>
          <b>F=kq1q2/r2</b>
          <br />
          <br />
          "F" es la fuerza resultante entre las dos cargas. La distancia entre
          las dos cargas es "r". La "r" en realidad significa "radio de
          separación", pero solo necesita saber que es una distancia. "Q1" y
          "q2" son valores para la cantidad de carga en cada una de las
          partículas. Los científicos usan Coulombs como unidades para medir la
          carga. La constante de la ecuación es "k". A medida que aprenda más
          física, verá que esta fórmula es muy similar a una fórmula del trabajo
          de Newton con la gravedad.
        </p>
      ),
    },
  ];

  return (
    <div>
      <Row>
        <Col span={12}>
          <div style={{ marginLeft: "150PX" }}>
            <Button
              type="primary"
              href="https://coulombexpobatiz.herokuapp.com/"
              target="_blank"
            >
              Simulador interactivo Expo Bátiz
            </Button>
            <br />
          </div>

          <List
            className="comment-list"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.author}
                  avatar={item.avatar}
                  content={item.content}
                  datetime={item.datetime}
                />
              </li>
            )}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={11}>
          <h2>Simulador Interactivo PHET</h2>
          <iframe
            title="Coulmob phet"
            src="https://phet.colorado.edu/sims/html/coulombs-law/latest/coulombs-law_es.html"
            width="500"
            height="400"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};
