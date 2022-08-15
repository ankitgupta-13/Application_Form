import React, { useState } from "react";
import styles from "./Content.module.css";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";

const Content = () => {
  const [name, setName] = useState("");
  const [last, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [visibility, setVisibility] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // alert(name);
    // alert(last);
    // alert(email);
    // alert(number);
    if (password.length < 5) {
      alert("Password Too Short");
    } else {
      // alert(password);
      if (password !== confirm) {
        alert("Password does not match");
        setPassword("");
        setConfirm("");
      } else {
        console.log(password);
        // alert(confirm);
        alert("Form Submitted!!!")
        console.log(name);
        console.log(last);
        console.log(email);
        console.log(number);
        console.log(password);
      }
    }
  };
  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSubmit}>
        <span>
          <div className={styles.row}>
            <label htmlFor="">First Name*</label>
            <input
              type="text"
              placeholder="Input First Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder="Input Last Name"
              value={last}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </span>
        <span>
          <div className={styles.row}>
            <label htmlFor="">Email*</label>
            <input
              type="email"
              required
              placeholder="abc@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <label htmlFor="">Phone Number</label>
            <input
              type="tel"
              placeholder="Input Phone Number"
              value={number}
              required
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </span>
        <span>
          <div className={styles.row}>
            <label htmlFor="">Password*</label>
            <div className={styles.icon}>
              <Input
                type={visibility ? "text" : "password"}
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                startAdornment={
                <InputAdornment position="start">
                  <LockIcon className="text-secondary" />
                </InputAdornment>
              }
                endAdornment={
                  <InputAdornment position="end">
                    {!visibility ? (
                      <VisibilityIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => setVisibility(!visibility)}
                      />
                    ) : (
                      <VisibilityOffIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => setVisibility(!visibility)}
                      />
                    )}
                  </InputAdornment>
                }
              />
            </div>
          </div>
          <div className={styles.row}>
            <label htmlFor="">Confirm Password*</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              required
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
        </span>
        <span>
          <button type="submit" value="submit">
            Submit
          </button>
        </span>
      </form>
    </div>
  );
};
export default Content;
