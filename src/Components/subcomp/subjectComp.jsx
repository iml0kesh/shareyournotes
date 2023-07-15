import react from "react";
import "./subcomp.css";

const subCard = (props) => {
  let Title = props.cardtitle;
  let text = props.text;
  return (
    <div>
      <div class="col-12">
        <input
          class="textbox-12"
          type="text"
          placeholder={Title}
          defaultValue={Title}
        />
        <span class="focus-border-12"></span>
      </div>
      <br></br>
      <div class="col-13">
        <textarea
          rows="23"
          cols="128"
          className="textbox-13"
          type="text"
          placeholder="Start Typing Bro...."
        />
      </div>
      <div className="btns">
        <ul>
          <li>
            <button class="btn-submit">Save</button>
          </li>
          <li>
            <button className="btn-delete">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default subCard;
