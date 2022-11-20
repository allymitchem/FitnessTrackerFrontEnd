import React, { useState } from "react";

import { MakeActivity } from "../api";

const CreateActivity = (props) => {
  const activities = props.activities;
  const setActivities = props.setActivities;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const newActivity = await MakeActivity(token, name, description);

      if (!newActivity.error) {
        setActivities([...activities, newActivity]);
      } else {
        alert(newActivity.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="createActivity">
      <div>
        <h3>Create an Activity here</h3>
        <form onSubmit={handleSubmit}>
          <span id="nameDescription">
            <label htmlFor="name">Activity Name: </label>
            <input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              required
            />
          </span>
          <input type="submit" value="Create New Activity" />
        </form>
      </div>
    </div>
  );
};

export default CreateActivity;
