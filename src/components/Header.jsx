import { Avatar, colors } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../components/img/Group 163.png";
import log from "../components/img/Group 363.png";
import lo from "../components/img/Group 164.png";
import l from "../components/img/Group 162.png";
import AppleIcon from "@mui/icons-material/Apple";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="text">
          <h4>skateBOard</h4>

          <div className="input">
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="avaa">
          <div className="ava">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
          <div className="a">
            <p>Thomas</p>
          </div>
          <div className="av">
            <ArrowDownwardIcon
              style={{ marginLeft: "10px", color: "#808191" }}
            />
            <AddAlertIcon style={{ marginLeft: "10px", color: "#808191" }} />
          </div>
        </div>
      </div>
      <div className="section">
        <br />
        <AcUnitIcon
          style={{
            background: "#353340",
            borderRadius: "70px",

            width: "30px",
            height: "25px",
          }}
        />
        <br />
        <p>menu</p>
      </div>
      <div className="section">
        <br />
        <AcUnitIcon
          style={{
            background: "#353340",
            borderRadius: "70px",
            width: "30px",
            height: "25px",
          }}
        />
        <br />
        <p>menu</p>
      </div>
      <div className="section">
        <br />
        <AcUnitIcon
          style={{
            background: "#353340",
            borderRadius: "70px",
            width: "30px",
            height: "25px",
          }}
        />
        <br />
        <p>menu</p>
      </div>
      <div className="section">
        <br />
        <AcUnitIcon
          style={{
            background: "#353340",
            borderRadius: "70px",
            width: "30px",
            height: "25px",
          }}
        />
        <br />
        <p>menu</p>
      </div>
      <div className="section">
        <br />
        <AcUnitIcon
          style={{
            background: "#353340",
            borderRadius: "70px",
            width: "30px",
            height: "25px",
          }}
        />
        <br />
        <p>menu</p>
      </div>

      <h3>Category</h3>
      <div className="solid"></div>
      <br />
      <div className="section">
        <br />
        <AcUnitIcon
          style={{
            background: "#353340",
            borderRadius: "70px",
            width: "30px",
            height: "25px",
          }}
        />
        <br />
        <p>menu</p>
      </div>
      <div className="section">
        <br />
        <AcUnitIcon
          style={{
            background: "#353340",
            borderRadius: "70px",
            width: "30px",
            height: "25px",
          }}
        />
        <br />
        <p>menu</p>
      </div>
      <div className="footer">
        <div className="foter-text">
          <h1>Header</h1>
        </div>
        <div className="ter">
          <div className="im">
            <img src={log} alt="" />
            <div className="ter_text">
              <h1>
                How to do <br /> Basic Jumping <br /> and how to <br /> landing
                safely{" "}
              </h1>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
        <div className="er">
          <img src={lo} alt="" />
        </div>
      </div>
      <div className="foter">
        <h1>Most Watched</h1>
        <div className="im">
          <div className="i">
            <img src={l} alt="" />
            <img src={l} alt="" />
            <img src={l} alt="" />
            <img src={l} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
