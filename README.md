# 원티드 프리온보딩 코스 선발과제
Demo: https://wanted-pre-onboarding-ldg.netlify.app/


# 컴포넌트별 구현한 방법, 그렇게 구현한 이유
## Toggle.js
<p>활성화시킨 경우(true)와 비활성화시킨 상태(false), 즉 2가지 상태만 가지고 있는 스위치입니다.</p>
<p>그래서 상태값을 쉽게 전환할 수 있는 useState를 이용하여 구현했습니다.</p>

```
const [toggleOn, setToggleOn] = useState(false);
```

<p>활성화된 경우(true)와 비활성화 된 경우(false)를, 삼항연산자를 활용하여 코드를 구현했습니다.</p>
<br><p>활성화(true)된 경우 togglecheck CSS으로 인해 원모양이 오른쪽으로 이동하고, 비활성화(false)된 경우에는 원모양이 왼쪽으로 이동한다.</p>
<img src='https://user-images.githubusercontent.com/88726990/152920382-28c0d3d9-9e55-4f83-b5bd-202c5a800f02.gif'/>

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
function Tab() {
  ...
  const { content, contentChangeIdx, currentIdx } = TabFn(0, tabMenu);
  ...
}
```

<p>map함수를 이용해 데이터배열의 itemt의 갯수마다 반복하고, item값으로 데이터배열의 객체를 가집니다. tabMenu.map((item, idx)에서 idx는 자동으로 생성되는 인덱스값입니다.</p>
<p> <div>태그마다 idx값이 주어지고, 해당 태그를 클릭하면 onClick이벤트함수(contentChangeIdx)로 인해, 해당태그의 인덱스 값으로 바뀌게 됩니다.</p>
<br><p> 인덱스값과 현재태그의 idx를 비교하여 같다면, className으로 focused를 추가로 부여함으로써 해당 태그의 스타일을 별도로 지정할 수 있습니다.</p>

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
  {/* 버튼마다 idx값이 주어지고, 클릭하게되면 idx값이 setCurrentIdx로 인해 tabMenu의 text값이 바뀌게 됩니다.*/}
  <div>{content.text}</div>
)
```

## Tag.js
<p>입력한 값을 저장할 tags를 useState를 이용해 변수와 값을 변경시킬 함수를 선언합니다.</p>
<p>배열(initialTags)은 생략하고, useState에 빈 배열(useState([]))을 넣어도 Tag 컴포넌트를 구현하는데 지장은 없습니다.</p>

```
function Tag() {
  const initialTags = ["프리온보딩", "이동규"];
  const [tags, setTags] = useState(initialTags);
  ...
}
```

<br><p>삭제버튼이 클릭될 경우 removeTags함수가 실행되는데, filter함수를 통해 삭제버튼이 클릭된 idx와 비교하여, 해당 idx를 제외한 tags의 배열을 새로 동기화합니다.</p>
<p>setTags함수로 새로 동기화된 tags값으로 tags 배열을 업데이트합니다.</p>

```
function Tag() {
  ...
  const removeTags = (removeIdx) => {
    let tagList = tags.filter((tag) => {
      return tag !== tags[removeIdx];
    });
    setTags(tagList);
  };
  ...
}
```

<br><p>input에서 Enter키가 입력되었을경우에 tag를 추가하는 함수로, trim함수를 이용해 입력값의 공백을 제거해줍니다.</p>

```
function Tag() {
  ...
  const addTags = (event) => {
      let value = event.target.value.trim();
      ...
}
```

<p>input에서 Enter키가 입력되고, input값이 빈문자열이 아니라면 현재 존재하는 배열을 복사(...tags)하고, 입력값(value)을 setTags함수를 이용해 tags에 해당 값을 배열로 추가합니다.</p>
<br><p>event.target.value를 이용해 input에 입력된 값을 비웁니다.</p>

```
const addTags = (event) => {
    ...
    if (event.key === "Enter" && value !== "") {
      setTags([...tags, value]);
      event.target.value = "";
    }
    ...
```

<br><p>만약 input에서 Enter키가 입력이 되었지만 입력값이 비어있는 입력값이라면, tags에 입력값을 추가하지 않고 입력된 값을 모두 지웁니다.</p>

```
const addTags = (event) => {
    ...
      else if (event.key === "Enter" && value === "") {
      event.target.value = "";
    }
```

<p>map함수를 이용해 tags의 tag 갯수마다 반복하고, tag값으로 tags배열안의 문자열을 가진다. tags.map((tag, idx)에서 idx는 자동으로 생성되는 인덱스값입니다.</p>
<br><p>삭제버튼은 &times;으로 x표시를 구현하고, 클릭되었을 경우 removeTags함수에 인덱스 값을 인수로 부여하여 removeTags함수의 filter메서드로 인해 해당 인덱스를 가진 tag들은 삭제됩니다.</p>


```
function Tab() {
  ...
  return (
  ...
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
  ...
  )
}
```

<p>onKeyUp이벤트 함수는 키보드의 자판이 눌렸다가 올라올때 실행되는 것으로, tag를 추가하는 addTags를 실행합니다. </p>
<br><p>addTags는 Enter와 input입력값 조건에 따라 코드가 실행이 되어, tag를 추가하거나 추가되지 않게됩니다.</p>

```
function Tab() {
  ...
  return (
  ...
  <input
    type="text"
    onKeyUp={(event) => {addTags(event);}}
    placeholder="Press enter to add tags"
  />
  ...
  )
}
```

## AutoComplete.js
<p>MyInput 컴포넌트를 생성하여 ClickToEdit 컴포넌트의 자식 컴포넌트로 사용한다.</p>
<br><p> value를 인수로 받는데, 이는 name값 또는 </p>

```
className={`${
            idx === currentIdx
              ? `${TabStyle.menu} ${TabStyle.focused}`
              : `${TabStyle.menu}`
          }`}
```

<p></p>
<br><p></p>

```
className={`${
            idx === currentIdx
              ? `${TabStyle.menu} ${TabStyle.focused}`
              : `${TabStyle.menu}`
          }`}
```

<p></p>
<br><p></p>

```
className={`${
            idx === currentIdx
              ? `${TabStyle.menu} ${TabStyle.focused}`
              : `${TabStyle.menu}`
          }`}
```

<p></p>
<br><p></p>

```
className={`${
            idx === currentIdx
              ? `${TabStyle.menu} ${TabStyle.focused}`
              : `${TabStyle.menu}`
          }`}
```

<p></p>
<br><p></p>

```
className={`${
            idx === currentIdx
              ? `${TabStyle.menu} ${TabStyle.focused}`
              : `${TabStyle.menu}`
          }`}
```

## ClickToEdit.js
<p>MyInput 컴포넌트를 생성하여 ClickToEdit 컴포넌트의 자식 컴포넌트로 사용합니다.</p>
<p>value를 인수로 받는데, 이는 name값 또는 age값이고, changeValue는 name값과 age값을 변경하는 함수입니다.</p>
<br><p>컴포넌트를 2개로 구분하여, 코드의 가독성을 높였습니다.</p>

```
function MyInput({ value, changeValue }) {
  ...
```

<p>MyInput 컴포넌트는 input관련된 기능입니다.</p>
<p>value를 인수로 받는데, 이는 name값 또는 age값이고, changeValue는 name값과 age값을 변경하는 함수입니다.</p>
<br><p>input 입력값(value)을 newValue변수에 값을 넣고, newValue값 변경 함수를 선언합니다.</p>

```
function MyInput({ value, changeValue }) {
  const [editOn, setEditOn] = useState(false)
  const [newValue, setNewValue] = useState(value)
  ...
}
```

<p>editOnClick메서드가 실행되면, edit모드가 활성화(true) 되어 수정을 활성화시킵니다.</p>
<p>EditOffClick메서드가 실행되면, edit모드를 비활성화(false)로 만들어 수정을 비활성화시킵니다.</p>
<br><p>props로 받은 changeValue는 setName또는 setAge함수이며, newValue값을 가집니다.</p>

```
function MyInput({ value, changeValue }) {
  ...
  const editOnClick = () => {
    setEditOn(true);
  };

  const EditOffClick = () => {
    setEditOn(false);
    changeValue(newValue);
  };
```

<p>handleInputChange메서드는 input에 입력한 값(event.target.value)을 newValue에 값을 부여합니다.</p>
<p>여기서 newValue에 값을 부여해도, EditOffClick메서드에 의해 changeValue 함수가 실행되지 않으면 값이 변경되지 않습니다.</p>
<br><p>inputEnter가 실행되어, 입력값이 엔터키와 빈 문자열이 입력되었을 경우에 EditOffClick 메서드를 실행하여 수정을 비활성화합니다.</p>

```
function MyInput({ value, changeValue }) {
  ...
  const handleInputChange = (event) => {
      setNewValue(event.target.value); //
  };
  
  const inputEnter = (event) => {
    if (event.key === "Enter" && value !== "") {
      EditOffClick();
    }
  };
...
}
```

<p><label>태그를 사용하여 input안에 입력된 문자없이 input태그를 클릭해도 수정이 활성화 됩니다.</p>
<p><input>태그 이외의 다른곳을 클릭한다면, EditOffClick메서드가 실행되어 수정이 비활성화 됩니다.</p>
<p>키보드가 눌렸다가 떼지면서 inputEnter가 실행되어, 입력값이 엔터키와 빈 문자열이 입력되었을 경우에 EditOffClick 메서드를 실행하여 수정을 비활성화합니다.</p>
<br><p>나머지 className은 해당 태그의 CSS를 적용시키기위해 사용했다.</p>

```
function MyInput({ value, changeValue }) {
  ...
  return (
      <label
        className={`${ClickToEditStyle.inputBox} ${
          editOn ? `${ClickToEditStyle.focused}` : ""
        }`}
        onClick={editOnClick}
      >
        {editOn ? (
          <input
            type="text"
            value={newValue}
            onBlur={EditOffClick}
            onChange={handleInputChange}
            onKeyUp={(event) => {
              inputEnter(event);
            }}
            className={ClickToEditStyle.inputEdit}
          />
        ) : (
          <div>{newValue}</div>
        )}
      </label>
```

<p>화면에 표시할 초기값으로 Default객체를 생성합니다.</p>
<p>ClickToEdit 컴포넌트에 Default의 키값을 각 name과 age에 넣는다.</p>
<br><p></p>

```
const Default = {
  name: "이동규",
  age: 26,
};

function ClickToEdit() {
  const [name, setName] = useState(Default.name);
  const [age, setAge] = useState(Default.age);
  ...
}
```

<br><p>name값과 MyInput의 value값인 newName(처음 실행하였다면 '이동규' 값을 가진다.)을 setName함수의 인수로 넣은값을, MyInput컴포넌트의 props로 넘겨줍니다.</p>

```
return (
  ...
      <div className={ClickToEditStyle.inputView}>
        <span>이름</span>
        <MyInput value={name} changeValue={(newName) => setName(newName)} />
      </div>
      
      <div className={ClickToEditStyle.inputView}>
        <span>나이</span>
        <MyInput value={age} changeValue={(newAge) => setAge(newAge)} />
      </div>
      
      <div className={ClickToEditStyle.inputView}>
        <div className={ClickToEditStyle.view}>
          이름 : {name} / 나이 : {age}
        </div>
      </div>
  ...
  );
```

# 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
## Toggle.js
<p>토글 버튼을 구현하기위한 CSS파일을 만드는 것이 어려웠습니다. 처음에는 색깔만 바뀌는 정도의 style만 구현할까 고민도 했습니다. 그러나 지금 안해본다면 하지않을 거 같았고, 안해본 것도 해보는것이 개발자로서 개발역량을 향상시킬 수 있는 기회라 생각하여, 구글 토글버튼과 같은 style을 구현하기로 마음먹었습니다. 그래서 인터넷으로 구현하는 방법에 대해 검색했고, 영어권 커뮤니티에 올려진 글을 통해 토글 버튼을 구현했습니다.</p>

## Tab.js
<p>CSS파일을 모듈화하여 style을 적용시키고자 했습니다. 계획은 전체 Tab태그와 선택된 Tab의 style을 개별적으로 적용시키고자 했습니다. 모든 Tab에는 meun 클래스명을 선언을 완료했지만, 클릭된 Tab에는 별도의 focused 클래스명을 추가로 선언하려는 것이 어려웠습니다. 특히 undefined가 className으로 적혀져 있을때는 무엇이 문제인지 몰랐습니다. 예전에 트위터를 클론코딩했을때 클래스명을 2개를 써봤던 경험이 있어서, 기존에 만든 트위터 프로젝트의 코드와 비교하면서 코드를 구현했습니다. 추가적으로 undefined는 className이 정상적으로 적용이 되었지만, CSS파일에 해당 className으로 작성된게 없어서 발생한 문제였습니다. 그래서 CSS파일에 해당 className으로 코드를 작성했더니 정상적으로 style이 적용이 되었습니다.</p>

```
className={`${idx === currentIdx
              ? `${TabStyle.menu} ${TabStyle.focused}`    // 문제의 코드
              : `${TabStyle.menu}`
          }`}
```

## Tag.js
<p>기존에 학습한대로 img태그나 background-image를 이용하여 구현할수 있지만, 그렇게 한다면, 작성할 코드가 많아져 가독성이 떨어질 염려가 되었습니다. 이를 해결하기위해, 인터넷으로 간단한 X표시를 할 수 있는 방법을 찾아보게 되었습니다. 인터넷의 한 블로그에서 &times;를 이용하면 쉽게 X표시를 할 수 있다는 사실을 알게되어, &times;를 이용해 x표시를 구현했습니다.</p>

## AutoComplete.js


## ClickToEdit.js
<p><label>태그를 사용하여 input안에 입력된 문자없이 input태그를 클릭해도 수정이 활성화 됩니다.</p>
  
<p><MyInput value={name} changeValue={(newName) => setName(newName)} />input의 value값을 하위 컴포넌트에 props로 부여하고 하위컴포넌트에서 다시 부모컴포넌트로 값을 넘겨주는 방식을 구현하기 어려웠다. 처음에는 input의 value값을 어떻게 넘겨주는지 고민이 너무많아 내가</p>

# 컴포넌트별 자세한 코드 실행 및 기능실행 방법
## App.js
<p>이용할 컴포넌트를 import합니다</p>

```
import Toggle from "./component/Toggle"
```

<p>return 값으로 이용할 컴포넌트를 입력합니다.</p>

``` 
function App() {
  return (
    <div className="app">
        ...
      <Toggle />
    </div>
  );
}
```
## Toggle.js
