import React, { useState } from "react";
import { ChromePicker } from "react-color";
import * as htmlToImage from 'html-to-image';
import "./css/InputForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons';

const InputForm = (props) => {
  const [fullName, setFullName] = useState("Full Name");
  const [jobTitle, setJobTitle] = useState("Job Title");
  const [phone, setPhone] = useState("+49 12 345678");
  const [email, setEmail] = useState("example@email.com");
  const [website, setWebsite] = useState("www.example.de");
  const [backgroundColor, setBackgroundColor] = React.useState('#fff');
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    props.onFullNameChange(e.target.value);
  };

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
    props.onJobTitleChange(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    props.onPhoneChange(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    props.onEmailChange(e.target.value);
  };

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
    props.onWebsiteChange(e.target.value);
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.hex);
    props.onBackgroundColorChange(color.hex);
  };

  const handleColorPickerClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleSave = () => {
    const node = document.getElementById('visit-card');
    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'visit-card.png';
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div className="input-form-container">
      <h2>Gestalte deine Visitenkarte</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="full-name">
                Full Name:
              </label>
            </td>
            <td>
              <input
                type="text"
                id="full-name"
                value={fullName}
                onChange={handleFullNameChange} />
            </td>
            <td>
              <label htmlFor="phone">Phone:
              </label>
            </td>
            <td>
              <input
                type="phone"
                id="phone"
                value={phone}
                onChange={handlePhoneChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="job-title">Job Title:
              </label>
            </td>
            <td>
              <input
                type="text"
                id="job-title"
                value={jobTitle}
                onChange={handleJobTitleChange} />
            </td>
            <td>
              <label htmlFor="email">Email:
              </label>
            </td>
            <td>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="website">Website:
              </label>
            </td>
            <td>
              <input
                type="text"
                id="website"
                value={website}
                onChange={handleWebsiteChange} />
            </td>
            <td>
              <label>Card Color:
              </label>
            </td>
            <td style={{ padding: "10px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faEyeDropper} style={{
                fontSize: "20px",
                marginRight: "10px",
                cursor: "pointer",
                display: "inline-block",
                border: "1px solid black",
                borderRadius: "60px",
                boxShadow: "0 0 2px #888",
                padding: "0.5em 0.6em",
                backgroundColor: backgroundColor
              }} onClick={handleColorPickerClick} />
              {showColorPicker ? (
                <div style={{ position: "absolute", zIndex: 2 }}>
                  <div
                    style={{
                      position: "fixed",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    }}
                    onClick={handleColorPickerClick} />
                  <ChromePicker
                    color={backgroundColor}
                    onChange={handleBackgroundColorChange} />
                </div>
              ) : null}
            </td>
          </tr>
          <tr>
            <td>
            </td>
          </tr>
        </tbody></table>
      <div className="save-button-container">
        <button className="save-button" onClick={handleSave}>Speichere als Bild</button>
      </div>
    </div>
  );
};

export default InputForm;