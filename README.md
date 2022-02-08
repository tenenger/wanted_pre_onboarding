# 원티드 프리온보딩 코스 선발과제
netlify으로 배포: https://wanted-pre-onboarding-ldg.netlify.app/


# 컴포넌트별 구현한 방법, 그렇게 구현한 이유
## Toggle.js
<p>활성화시킨 경우(true)와 비활성화시킨 상태(false), 즉 2가지 상태만 가지고 있는 스위치입니다.</p>
<p>그래서 상태값을 쉽게 전환할 수 있는 useState를 이용하여 구현했습니다.</p>

```
const [toggleOn, setToggleOn] = useState(false);
```

<br><p>활성화된 경우(true)와 비활성화 된 경우(false)를, 삼항연산자를 활용하여 코드를 구현했습니다.</p>

```
...
  <div className={` ${toggleStyle.toggle} ${
    toggleOn ? toggleStyle.togglecheck : ""
    }`}
  />
  <div
    className={`${
      toggleOn
        ? `${toggleStyle.toggleCircle} ${toggleStyle.togglecheck}`
        : `${toggleStyle.toggleCircle}`
    }`}
  />
...
  <div>{toggleOn ? "Toggle Switch ON :)" : "Toggle Switch OFF :("}</div>
```

## Modal.js
<p>활성화시킨 경우(true)와 비활성화시킨 상태(false), 즉 2가지 상태만 가지고 있는 스위치입니다.</p>
<p>Toggle은 열고 닫는 스위치가 동일한 반면에, Modal은 열고 닫는 스위치가 개별로 사용됩니다.</p>
  
``` 
const onModal = () => {
    setModalState((state) => !state);
  };
  const offModal = () => {
    setModalState((state) => !state);
  };
```

<br><p>그래서 여는 스위치와 닫는 스위치가 클릭되었을 경우에 클릭이벤트 함수를 개별로 지정했습니다.</p>

```
  ...
  return (
    ...
      {modalState && (
        <div className={modalStyle.modalOuter}>
          <div className={modalStyle.modal}>
            <span className={modalStyle.modalClose} onClick={offModal}>
            &times;
            </span>
            <h2>Hello Modal!</h2>
          </div>
        </div>
      )}
    ...
  )
```

## Tab.js
<p>탭 메뉴에 사용될 데이터를 배열안에 객체로 선언합니다. </p>

``` 
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
```

<p>초기 인덱스값(0)과 데이터배열(tabMenu)을 인수로 받는 TabFn을 만들었고, useState를 이용하여 인덱스 값을 받는 변수와 값을 변경시키는 함수를 선언합니다.</p>

```
const TabFn = (idx, tabs) => {
  const [currentIdx, setCurrentIdx] = useState(idx)
  ...
}
```

<p>TabFn의 return값으로, 현재 인덱스 값인 배열의 객체, 인덱스 값을 변경시키는 함수, 그리고 현재 idx값을 반환합니다.</p>
<br><p>이는 Tab이 클릭되었을 경우, Tab의 인덱스 값으로 해당 인덱스에 해당되는 데이터배열을 얻게됩니다.</p>

```
const TabFn = (idx, tabs) => {
  ...
  return {
    content: tabs[currentIdx],
    contentChangeIdx: setCurrentIdx,
    currentIdx: currentIdx,
  };
}
```

<br><p>TabFn(초기인덱스값, 데이터배열)을 실행하여 얻은 return값을 비구조화 할당으로 변수를 선언합니다.</p>

```
const { content, contentChangeIdx, currentIdx } = TabFn(0, tabMenu);
```

<p>map함수를 이용해 데이터배열의 element의 갯수마다 반복하고, element값으로 데이터배열의 객체를 가진다.</p>
<p> <div>태그마다 idx값이 주어지고, 해당 태그를 클릭하면 onClick이벤트함수(contentChangeIdx)로 인해, 해당태그의 인덱스 값으로 바뀌게 된다.</p>
<br><p> 인덱스값과 현재태그의 idx를 비교하여 같다면 className으로 focused를 추가로 부여함으로써 해당 태그의 스타일을 별도로 지정할 수 있다.</p>

```
return (
  {tabMenu.map((item, idx) => (
    <div
      className={`${
        idx === currentIdx
          ? `${TabStyle.menu} ${TabStyle.focused}`
          : `${TabStyle.menu}`
      }`}
      onClick={() => contentChangeIdx(idx)}
      key={item.tab}
    >
      {item.tab}
    </div>
  ))}
  ...
  {/* 버튼마다 idx값이 주어지고, 클릭하게되면 idx값이 setCurrentIdx로 인해 tabMenu의 text값이 바뀌게 된다.*/}
  <div>{content.text}</div>
)
```


## Tag.js


## AutoComplete.js


## ClickToEdit.js


# 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
## Toggle.js
토글 버튼을 구현하기위한 CSS파일을 만드는 것이 어려웠습니다.
그래서 인터넷으로 구현하는 방법에 대해 검색했고, 인터넷에 설명되어있는 글을 통해 토글 버튼을 구현했습니다.

# 컴포넌트별 자세한 실행 방법
## App.js
1. 이용할 컴포넌트를 import합니다.
```import Toggle from "./component/Toggle"```

2. return 값으로 이용할 컴포넌트를 입력합니다.
``` 
function App() {
  return (
    <div className="app">
        ...
      <Toggle />
    </div>
  );
}

## Toggle.js
