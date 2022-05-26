import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import Image from "next/image";

Modal.setAppElement("#__next");

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!modalIsOpen);
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div className="container">
      <div className="header">
        <div className="avatar"></div>
        <div className="profile">
          <div className="info">
            <p> Your Name</p>
            <div className="position">
              <p> Position </p>
            </div>
            <div className="profile-icons">
              <a onClick={toggleModal} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={("fab", "qrcode")}
                  size="2x"
                  style={{ width: 40, height: 40 }}
                />
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={toggleModal}
                  contentLabel="mymodal"
                  className="modal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={100}
                  onRequestClose={toggleModal}
                >
                  <div className="closebutton">
                    <a href="#" onClick={toggleModal}>
                      <FontAwesomeIcon
                        icon={("fab", "xmark")}
                        size="2x"
                        style={{ width: 25, height: 25 }}
                      />
                    </a>
                  </div>

                  <div className="headerr">
                    <p>Save my contact!</p>
                  </div>
                  <div className="body">
                    <Image
                      src="/images/qrcode.png"
                      alt="qr-code-contato"
                      width={250}
                      height={250}
                    />
                  </div>
                </Modal>
              </a>

              <a
                href="https://wa.me/5584992258566"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  size="2x"
                  style={{ width: 40, height: 40 }}
                />
              </a>
              <a
                href="mailto: erickfelipe2010@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={("fab", "envelope")}
                  size="2x"
                  style={{ width: 40, height: 40 }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/erick-felipe-141311215/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  size="2x"
                  style={{ width: 40, height: 40 }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//Add your whatsapp phone number in "wa.me/"
//Add your email in "mailto: "
