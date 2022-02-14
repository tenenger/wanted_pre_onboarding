import React, { useState } from "react";
import TabStyle from "./css/Tab.module.css";

// 탭 메뉴 안의 내용
const tabMenu = [
  {
    tab: "Tab 1",
    text: "Tab 1 text",
  },
  {
    tab: "Tab 2",
    text: "Tab 2 text",
  },
  {
    tab: "Tab 3",
    text: "Tab 3 text",
  },
];

function Tab() {
  const TabFn = (idx, tabs) => {
    const [currentIdx, setCurrentIdx] = useState(idx);
    // tabs[idx]값과 idx를 변화시키는 함수를 전해준다.
    return {
      content: tabs[currentIdx],
      contentChangeIdx: setCurrentIdx,
      currentIdx: currentIdx,
    };
  };
  // TabFn함수에 초기인덱스값(0)과 tabMenu변수를 인수로 넣는다.
  // TabFn함수로 부터 전달받은 content와 contentChangeIdx를 첫번째 변수부터 순서대로 넣는다.
  const { content, contentChangeIdx, currentIdx } = TabFn(0, tabMenu);

  return (
    <div className={TabStyle.outer}>
      <h1 className={TabStyle.title}> Tab </h1>
      <div className={TabStyle.tabs}>
        {/* 버튼마다 idx값이 주어지고, 클릭하게되면 idx값이 setCurrentIdx로 인해 tabMenu의 text값이 바뀌게 된다.*/}
        {tabMenu.map((item, idx) => (
          <div
            className={`${TabStyle.menu} 
            ${idx === currentIdx ? TabStyle.focused : ""}`}
            onClick={() => contentChangeIdx(idx)}
            key={item.tab}
          >
            {item.tab}
          </div>
        ))}
      </div>
      <div>{content.text}</div>
    </div>
  );
}
export default Tab;
