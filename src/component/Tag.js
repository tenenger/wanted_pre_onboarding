import React, { useState } from "react";
import tagStyle from "./css/Tag.module.css";

function Tag() {
  const initialTags = ["프리온보딩", "이동규"];
  const [tags, setTags] = useState(initialTags);

  // filter함수를 통해 tags를 선별하고, 선별된 태그를 가진 배열을 setTags함수로 동기화한다.
  const removeTags = (removeIdx) => {
    let tagList = tags.filter((tag) => {
      return tag !== tags[removeIdx];
    });
    setTags(tagList);
  };

  const addTags = (event) => {
    // trim함수로 공백을 제거해준다.
    let value = event.target.value.trim();
    // 비어있는 입력값이 넣어지는 것을 방지한다.
    if (event.key === "Enter" && value !== "") {
      setTags([...tags, value]);
      event.target.value = "";
      // 비어있는 입력값을 넣으려고 하면, 입력값을 모두 지운다.
    } else if (event.key === "Enter" && value === "") {
      event.target.value = "";
    }
  };

  return (
    <div className={tagStyle.outer}>
      <h1 className={tagStyle.title}>Tag</h1>
      <div className={tagStyle.tagInput}>
        <ul className={tagStyle.tags}>
          {tags.map((tag, idx) => (
            <li key={idx} className={tagStyle.tag}>
              <span className={tagStyle.tagTitle}>{tag}</span>
              <span
                className={tagStyle.tagRemove}
                onClick={() => removeTags(idx)}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyUp={(event) => {
            addTags(event);
          }}
          placeholder="Press enter to add tags"
        />
      </div>
    </div>
  );
}
export default Tag;
