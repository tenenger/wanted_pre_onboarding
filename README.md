# 원티드 프리온보딩 코스 선발과제
Demo: https://wanted-pre-onboarding-ldg.netlify.app/
<br><br>

# 어떤 스킬을 가지고 구현했는지, 이에 대한 이유
### [주요 기술]
<p>Front-end: JSX, React</p>
<p>Deployment: Netflify</p><br>

### [해당 기술을 이용한 이유]
<p>포트폴리오 웹사이트에 메뉴바를 라이브러리를 사용하여 구현한 적이 있었습니다.</p>
<p>해당 메뉴바에 에러가 있었는데, 웹사이트를 실행되자마자 버튼을 누르면 의도와 다른 이상한 위치로 이동하는 것이었습니다.</p>
<p>알고보니, import하는 jQuery의 데이터 양이 많아, 라이브러리의 데이터를 불러오기 전에 코드를 실행하여 발생하는 문제였습니다.</p>
<p>그래서 JavaScript로 메뉴바를 구현했더니, 에러를 잡는 것과 동시에 실행시간이 단축되었다는 것을 체감하게 되었습니다.</p>
<p>에러 방지와 실행 시간 단축을 위해, 라이브러리를 사용하지 않고 JSX를 이용하여 컴포넌트를 구현하게 됐습니다.</p>

<br><br>

# 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
## Toggle.js
### 토글 버튼 CSS파일로 구현하기
<p>토글 버튼을 구현하기위한 CSS파일을 만드는 것이 어려웠습니다. 처음에는 색깔만 바뀌는 정도의 style만 구현할까 고민도 했습니다. </p>
<p>그러나 지금 안해본다면 하지않을 거 같았고, 안해본 것도 해보는것이 개발자로서 개발역량을 향상시킬 수 있는 기회라 생각하여, 구글 토글버튼과 같은 style을 구현하기로 마음먹었습니다. </p>
<p>그래서 인터넷으로 구현하는 방법에 대해 검색했고, 영어권 커뮤니티에 올려진 글을 통해 토글 버튼을 구현했습니다.</p><br>

## Tab.js
### className 여러개 적용시키기
<p>CSS파일을 모듈화하여 style을 적용시키고자 했습니다.</p>
<p>계획은 전체 Tab태그와 클릭하여 선택된 Tab의 style을 개별적으로 적용시키고자 했습니다. </p>
<p>모든 Tab에는 meun 클래스명을 선언을 완료했지만, 클릭된 Tab에는 별도의 focused 클래스명을 어떻게 추가하는지 몰랐습니다.</p>
<p>해결방법으로는 React로 트위터를 클론코딩했을때 클래스명을 2개를 써봤던 경험이 있어서, 기존에 만든 트위터 프로젝트의 코드와 비교하면서 코드를 구현했습니다.</p>
<p>추가적으로 코드를 똑같이 구현했지만, focused가 아닌 undefined가 className으로 적혀져있었습니다.</p>
<p>처음에는 당황해서 코드를 이것저것 수정하기 시작했습니다. </p>
<p>알고보니 undefined는, CSS파일에 focused으로 style 작업한 코드가 없어서 발생한 문제였습니다. </p>
<p>그래서 CSS파일에 focused{background...} style 코드를 작성했더니, 정상적으로 className에 focused가 붙었고, style이 적용이 되었습니다.</p>

```
className={`${TabStyle.menu} ${idx === currentIdx ? TabStyle.focused : ""}`}     // 해당 코드
onClick={() => contentChangeIdx(idx)}
key={item.tab}
```

<br>

## Tag.js
### 이미지를 이용하지 않고, 엔티티 사용하기
<p>기존에 학습한대로 img태그나 background-image를 이용하여 삭제의 X표시를 구현할수 있지만, 그렇게 한다면, 코드가 길어져서 가독성이 떨어질 염려가 되었습니다.</p> 
<p>처음에는 알파벳 X를 입력하여 표시를 했습니다.</p>
<p>그러나 의미없는 알파벳을 적으면, 컴퓨터가 문서를 읽어들일 때 예약문자와 문서내용을 구분하지 못해 문제가 발생할 수 있었습니다.</p>
<p>이를 해결하기위해, 인터넷으로 간단한 X표시를 할 수 있는 방법을 찾아보게 되었습니다. </p>
<p>엔티티의 & times;를 이용하면 쉽게 X표시를 할 수 있다는 사실을 알게되어, & times;를 이용해 X표시를 구현했습니다.</p><br>

<br>

## AutoComplete.js
### input입력값이 자동완성 데이터와 같은게 있을때, 자동완성 UI 숨기기
<p>네이버, 다음, 구글 검색창과 다르게 내가 구현한 검색창만 검색단어를 입력해도 자동완성 UI가 사라지지 않았습니다.</p>
<p>처음에는 input태그의 onBlur을 사용하여 hasText값을 false로 주어, input창 이외에 다른곳을 클릭하면 자동완성 UI를 사라지게 만들었습니다.</p>
<p>그 결과 내가 입력하고싶은 자동완성단어를 클릭하면 UI는 종료되는데, input값에 해당 데이터가 입력이 안되는 것이었습니다.</p>
<p>처음으로 돌아와 천천히 노트에 적으면서 내가 구현하고자 하는 기능을 생각을 정리했습니다.</p>
<p>input값이 주어졌을때 입력값과 자동완성 데이터가 같을때 hasText값으로 false를 주면, 해당 기능이 구현될 것이라는 결론이 내려졌습니다.</p>

```
    setdropDownOptions(
      AutoCompleteList.filter((element) => {
        //입력된 값을 포함하는 option만 걸러준 상태로 변경한다.
        if (element === inputValue) {                       // 해당 코드
          setHasText(false);
        }
        return element.includes(inputValue);
      })
```

### 키보드를 이용하여 자동완성 선택하기
<p>네이버, 다음, 구글 검색창과 다르게 키보드를 이용하여 자동완성을 입력창에 넣는 기능이 없었습니다.</p>
<p>혼자서 이리저리 코드를 작성했지만, 한번도 개발해보지 않은 기능을 구현하고자 하니 혼자서 한참을 헤메었습니다.</p>
<p>결국, 혼자서는 도저히 기능을 구현하기 힘들다고 판단을 했고, 인터넷으로 구현하는 방법을 찾아 구현했습니다.</p>
<p>컴포넌트만 구현하고 이대로 끝내면, 나중에 비슷한 기능을 구현하고자 할때 어려움이 있을 거라고 생각했습니다.</p>
<p>그래서 컴포넌트를 구현하는게 익숙하지 않더라도 이해는 하고 있어야 한다고 판단하여, 코드 옆에 주석을 적어 최소한으로 이해를 하려고 노력했습니다.</p>
    
```
  const dropDownKeyControl = (event) => {
    //option을 키보드로 선택할 수 있게해주는 핸들러 함수
    if (hasText) {
      //input에 값이 있을때
      if (
        event.key === "ArrowDown" &&
        dropDownOptions.length - 1 > selectedOptionIdx
      ) {
        setSelectedOptionIdx((prev) => prev + 1);
      }
      //dropDownOptions.length에 -1을 해주는 이유는 selectedOption의 최대값을 맞춰주기 위해서이다.
      //예를들어 밑에 option이 2개가 나왔다고 가정했을 때, selectedOption값이 최대 1까지 변할 수 있게 해줘야한다.
      //'ArrowDown'키를 누르면 selectedOption는 0이 되고, 한번 더 누르면 1이 되고, 그 다음은 더이상 옵션이 없기 때문에 키가 안먹히게 해주는 것이다.

      if (event.key === "ArrowUp" && selectedOptionIdx >= 0) {
        //처음 조건을 이해했다면 여기는 자연스럽게 이해될 것이다.
        setSelectedOptionIdx((prev) => prev - 1);
      }
      if (event.key === "Enter" && selectedOptionIdx >= 0) {
        //Enter키로 option 선택
        autoCompleteClick(dropDownOptions[selectedOptionIdx]);
        setSelectedOptionIdx(-1); //Enter키를 눌러서 선택이 되면 다시 selectedOption는 -1이 되야한다.
      }
    }
  };
```

<br>

## ClickToEdit.js
### 컴포넌트 구현
<p>ClickToEdit 컴포넌트는 어떤 방법으로 구현할지 도통 감이 잡히지 않아, 처음부터 인터넷의 도움을 받으면서 코드를 작성했습니다.</p>
<p>컴포넌트만 구현하고 이대로 끝내면, 나중에 비슷한 기능을 구현하고자 할때 어려움이 있을 거라고 생각했습니다.</p>
<p>그래서 컴포넌트를 구현하는게 익숙하지 않더라도 이해는 하고 있어야 한다고 판단하여, 코드 옆에 주석을 적어 이해를 하려고 노력했습니다.</p>
<p>추가적으로 처음부터 끝까지 따라치면 내 머리속에 들어오지 않을거 같아, 여러가지 수정을 했습니다.(삼항연산자 → 논리연산자)</p>


### props 처리(클린 코딩)
<p>해당 컴포넌트를 따라하면서 특히 어려웠던 점은 props의 작동방식을 이해하기 어려웠습니다.</p>
<p>특히, input의 value값을 자식 컴포넌트에 props로 부여하고, 자식 컴포넌트에서 다시 부모컴포넌트로 props 값을 넘겨주는 방식을 이해하지 못했습니다.</p>
<p>그래서 작동방식을 이해하고 있어야 한다고 판단하여, 코드 옆에 주석을 적어 이해를 하려고 노력했습니다.</p>

```
    //MyInput 컴포넌트는 ClickToEdit 컴포넌트의 자식 컴포넌트이다.
    //그래서 value를 전달 받는데 여기(value)에는 { name, age } 로 name상태값과 age상태값을 가지고 있다.
    function MyInput({ value, changeValue }) {
        const [editOn, setEditOn] = useState(false); //edit모드 상태
        const [newValue, setNewValue] = useState(value); //출력값 상태

        const editOnClick = () => {
            //span태그를 클릭하면 edit모드가 활성화 되고 위의 useEffect에 의해 input창에 포커싱이 된다.
            setEditOn(true);
        };

        const EditOffClick = () => {
            //input창이 아닌 다른 곳을 클릭하면 edit모드를 비활성화로 만든다.
            setEditOn(false);
            changeValue(newValue); //그리고 input창에 입력되어있는 값으로 newValue를 바꿔준다.
        };

        const handleInputChange = (event) => {
            setNewValue(event.target.value); //input에 입력한 값을 newValue에 담아둔다.
            //여기서 입력을 해준다고 바로바로 밑의 출력값이 변하지 않는다.
            //왜냐하면 handleBlur에 의해서 changeValue 함수가 실행되어야 값이 바뀌기 때문이다.
        };
            const inputEnter = (event) => {
            if (event.key === "Enter" && value !== "") {
              EditOffClick();
        }
    };
```

## 기타(알게된 점)
### className에는 논리연산자말고 삼항연산자로 사용하기
<p>논리연산자를 사용할시에 className에 의도치않게 false나 true값을 가질 수 있기때문이다.</p>


<br><br>

# 코드 리뷰
## Toggle.js
<img src='https://user-images.githubusercontent.com/88726990/152920382-28c0d3d9-9e55-4f83-b5bd-202c5a800f02.gif'/>
<p>활성화시킨 경우(true)와 비활성화시킨 상태(false), 즉 2가지 상태만 가지고 있는 스위치입니다.</p>
<p>그래서 상태값을 쉽게 전환할 수 있는 useState를 이용하여 구현했습니다.</p>

```
const [toggleOn, setToggleOn] = useState(false);
```

<br><p>활성화된 경우(true)와 비활성화 된 경우(false)를, 삼항연산자를 활용하여 코드를 구현했습니다.</p>
<p>논리연산자를 사용할 경우에 콘솔창에 삼항연산자를 사용하라는 권고 메세지가 나오기때문에 삼항연산자를 사용했습니다.</p>
<p>활성화(true)된 경우 togglecheck CSS으로 인해 원모양이 오른쪽으로 이동하고, 비활성화(false)된 경우에는 원모양이 왼쪽으로 이동합니다.</p>

```
...
  <div className={` ${toggleStyle.toggle} ${
    toggleOn ? toggleStyle.togglecheck : ""}`
  }/>
  <div
    className={`${toggleStyle.toggleCircle} ${
      toggleOn ? toggleStyle.togglecheck : ""
    }`}
  />
...
  <div>{toggleOn ? "Toggle Switch ON :)" : "Toggle Switch OFF :("}</div>
```

<br>

## Modal.js
<img src='https://user-images.githubusercontent.com/88726990/152976888-40b8bf1d-82a0-4595-a7ad-4619d0b5c31e.gif'/>
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

<br>

## Tab.js
<img src='https://user-images.githubusercontent.com/88726990/152976895-a17c875d-40ed-41f7-a476-a3ac76ae8145.gif'/>
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

<br><p>초기 인덱스값(0)과 데이터배열(tabMenu)을 인수로 받는 TabFn을 만들었고, useState를 이용하여 인덱스 값을 받는 변수와 값을 변경시키는 함수를 선언합니다.</p>

```
const TabFn = (idx, tabs) => {
  const [currentIdx, setCurrentIdx] = useState(idx)
  ...
}
```

<br><p>TabFn의 return값으로, 현재 인덱스 값인 배열의 객체, 인덱스 값을 변경시키는 함수, 그리고 현재 idx값을 반환합니다.</p>
<p>이는 Tab이 클릭되었을 경우, Tab의 인덱스 값으로 해당 인덱스에 해당되는 데이터배열을 얻게됩니다.</p>

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

<br><p>map함수를 이용해 데이터배열의 itemt의 갯수마다 반복하고, item값으로 데이터배열의 객체를 가집니다. tabMenu.map((item, idx)에서 idx는 자동으로 생성되는 인덱스값입니다.</p>
<p> <div>태그마다 idx값이 주어지고, 해당 태그를 클릭하면 onClick이벤트함수(contentChangeIdx)로 인해, 해당태그의 인덱스 값으로 바뀌게 됩니다.</p>
<p> 인덱스값과 현재태그의 idx를 비교하여 같다면, className으로 focused를 추가로 부여함으로써 해당 태그의 스타일을 별도로 지정할 수 있습니다.</p>

```
return (
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
  ...
  {/* 버튼마다 idx값이 주어지고, 클릭하게되면 idx값이 setCurrentIdx로 인해 tabMenu의 text값이 바뀌게 됩니다.*/}
  <div>{content.text}</div>
)
```

<br>

## Tag.js
<img src='https://user-images.githubusercontent.com/88726990/152976902-1b80dd29-1c32-4291-94ca-f935b7fb8fe4.gif'/>
<p>입력한 값을 저장할 tags를 useState를 이용해 변수와 값을 변경시킬 함수를 선언합니다.</p>
<p>배열(initialTags)은 생략하고, useState에 빈 배열(useState([]))을 넣어도 Tag 컴포넌트를 구현하는데 지장은 없습니다.</p>

```
function Tag() {
  const initialTags = ["코드스테이츠", "프리온보딩", "이동규"];
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

<br><p>input에서 Enter키가 입력되고, input값이 빈문자열이 아니라면 현재 존재하는 배열을 복사(...tags)하고, 입력값(value)을 setTags함수를 이용해 tags에 해당 값을 배열로 추가합니다.</p>
<p>event.target.value를 이용해 input에 입력된 값을 비웁니다.</p>

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

<br><p>map함수를 이용해 tags의 tag 갯수마다 반복하고, tag값으로 tags배열안의 문자열을 가진다. tags.map((tag, idx)에서 idx는 자동으로 생성되는 인덱스값입니다.</p>
<p> & times; ; 으로 X표시를 구현하고, 클릭되었을 경우 removeTags함수에 인덱스 값을 인수로 부여하여 removeTags함수의 filter메서드로 인해 해당 인덱스를 가진 tag들은 삭제됩니다.</p>


```
function Tag() {
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

<br><p>onKeyUp이벤트 함수는 키보드의 자판이 눌렸다가 올라올때 실행되는 것으로, tag를 추가하는 addTags를 실행합니다. </p>
<p>addTags는 Enter와 input입력값 조건에 따라 코드가 실행이 되어, tag를 추가하거나 추가되지 않게됩니다.</p>

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

<br>

## AutoComplete.js
<img src='https://user-images.githubusercontent.com/88726990/152976861-edda79ed-7dbe-41ce-84bd-69e27dad966b.gif'/>

<p>자동완성의 데이터를 배열로 선언합니다.</p>

```
const AutoCompleteList = [
  "antique",
  "apple",
  "banana",
  "rustic",
  "vinyl",
  "vintage",
  "refurbished",
  "가나다라마바사",
  "아자차카타파하",
  "신품",
  "빈티지",
  "중고A급",
  "중고B급",
  "골동품",
];
```

<br><p>dropDown 컴포넌트를 생성하여 AutoComplete 컴포넌트의 자식 컴포넌트로 사용합니다</p>
<p>자동완성 컴포넌트는 dropDownOptions은 데이터(AutoCompleteList), autoCompleteClick은 autoCompleteClick 메서드, selectedOptionIdx는 자동완성을 클릭했을때 선택한 요소의 인덱스를 인수로 받습니다.</p>
<p>자동완성 요소가 클릭되었을 경우에는 해당 데이터(item)을 autoCompleteClick메서드를 통해, input값은 item값을 가지게 됩니다.</p>

```
function DropDown({ dropDownOptions, autoCompleteClick, selectedOptionIdx }) {
  return (
    <ul className={AutoCompleteStyle.dropDownContainer}>
      {dropDownOptions.map((item, idx) => (
        <li
          key={idx}
          onClick={() => autoCompleteClick(item)}
          className={
            selectedOptionIdx === idx ? `${AutoCompleteStyle.selectedOption}` : ""
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
```

<br><p>input값이 존재하는지 유무를 확인 할 수 있는 hasText변수와 hasText 값을 변경할 수 있는 함수를 선언합니다. </p>
<p>input값을 받는 inputValue변수와 inputValue값을 변경할 수 있는 함수를 선언합니다.</p>
<p>AutoCompleteList(자동완성 데이터)를 받는 dropDownOptions변수와 dropDownOptions값을 변경할 수 있는 함수를 선언합니다.</p>
<p>키보드를 이용해 자동완성을 선택할 수 있는 selectedOptionIdx변수와 selectedOptionIdx값을 변경할 수 있는 함수를 선언합니다. 초기값으로 -1을 부여한 이유는, 모든 데이터는 인덱스가 0번부터 시작하기 때문에 -1로 지정하게 되었습니다.</p>

```
function AutoComplete() {
  const [hasText, setHasText] = useState(false); //input값의 유무 상태
  const [inputValue, setInputValue] = useState(""); //input값의 상태
  const [dropDownOptions, setdropDownOptions] = useState(AutoCompleteList);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(-1); //키보드로 option 선택할때 필요한 selectedOption상태
  ...
}
```

<br><p>input값(inputValue)이 아무것도 입력이 안되어 있는 상태(빈문자열)이라면 hasText값을 false를 주고, setdropDownOptions([])을 통해 자동완성 리스트가 UI에 표시되는 것과 화살표키보드로 자동완성을 선택하는 것을 방지합니다.</p>
<p>input값(inputValue)이 입력값이 있는 상태라면 hasText값을 true를 주고, setdropDownOptions함수를 통해 inputValue이 포함된 자동완성리스트들만 dropDownOptions에 배열로 할당합니다.</p>
<p>filter를 이용해 element값과 input값(inputValue)이 같다면, 자동완성 리스트를 비활성화 시킵니다.</p>

```
function AutoComplete() {
  ...
  useEffect(() => {
      if (inputValue === "") {
        setHasText(false);
        setdropDownOptions([]);
      } else if (inputValue !== "") {
        setHasText(true);
        setdropDownOptions(
          AutoCompleteList.filter((element) => {
            if (element === inputValue) {setHasText(false);}
            return element.includes(inputValue);
          })
        );
      }
    }, [inputValue]);
  ...
}
```

<br><p>input값이 입력되는 경우 inputChange메소드가 실행이 되는데, 입력된 값(event.target.value)을 setInputValue함수를 이용해 값을 전달하고, setHasText 함수를 이용해 true값을 전달합니다.</p>

```
function AutoComplete() {
  ...
  const inputChange = (event) => {
      setInputValue(event.target.value);
      setHasText(true);
    };
  ...
}
```

<br><p>클릭되어 선택된 자동완성 요소의 값을 setInputValue함수를 이용해 input값에 넣어주고, setSelectedOptionIdx 함수를 이용해 선택된 자동완성 요소가 없도록 합니다.</p>
<p>인덱스를 -1로 이동시킨 이유는 CSS파일과 연관이 있다. 선택된 요소는 style로 회색바탕색을 가지게 구현했는데, 만약 자동완성을 선택했는데도 회색바탕색을 가지고 있다면 안되기 때문에 아무런 요소를 선택하지 않는 -1를 주게 되었습니다.</p>

```
function AutoComplete() {
  ...
  const autoCompleteClick = (selectedOption) => {
    setInputValue(selectedOption);
    setSelectedOptionIdx(-1);
  };
  ...
}
```

<br><p>삭제버튼을 누르게되면 deleteBtnClick 메서드가 실행이 되고, setInputValue함수를 이용하여 input의 value값을 빈문자열("")을 주어 비워주게 만듭니다.</p>

```
function AutoComplete() {
  ...
  const deleteBtnClick = () => {
    setInputValue("");
  };
  ...
}
```

<br><p>UI로 표시된 자동완성을 선택할 수 있게 해주는 함수이다.</p>
<p>hasText이 존재하고, input창에서 아래키가 눌렸을 경우에는 인덱스 값을 setSelectedOptionIdx를 이용하여 +1시켜줍니다.</p>
<p>여기서 중요한 점은 데이터가 가진 인덱스 값을 넘어가지 않게하기위해, 현재 자동완성의 최대 인덱스값과 현재의 인덱스값을 뺐을때 한번이상 움직일 수 있다면이라는 조건을 넣어야합니다.</p>
<p>위키가 눌렸을 때도 마찬가지로 조건을 주면 됩니다.</p>
<p>마지막으로 input창에서 Enter키가 입력되었고, 현재 인덱스값이 0이상인경우에 해당 인덱스 값에 해당되는 데이터값을 input값으로 주고, 인덱스는 -1를 줍니다.</p>

```
function AutoComplete() {
  ...
  const dropDownKeyControl = (event) => {
      if (hasText) {
        if (event.key === "ArrowDown" && dropDownOptions.length - selectedOptionIdx > 1) {
          setSelectedOptionIdx((prev) => prev + 1);
        }

        if (event.key === "ArrowUp" && selectedOptionIdx >= 0) {
          setSelectedOptionIdx((prev) => prev - 1);
        }
        
        if (event.key === "Enter" && selectedOptionIdx >= 0) {
          autoCompleteClick(dropDownOptions[selectedOptionIdx]);
          setSelectedOptionIdx(-1);
        }
      }
    };
  ...
}
```

<br><p>input에 값이 입력된 경우에 inputChange함수와 dropDownKeyControl함수가 실행이 됩니다. </p>
<p>inputChange는 input입력값을 inputValue변수에 넣는 메소드이며, value={inputValue} 코드를 통해 inputValue를 UI화면상에서 input창에 표시됩니다.</p>
<p>dropDownKeyControl 화살표키로 자동완성을 선택할 수 있는 메소드입니다.</p>
<p>삭제태그를 클릭한 경우에 deleteBtnClick 메서드가 실행되어 input값을 비워 줍니다.</p>

```
function AutoComplete() {
  ...
  return (
      <div className={AutoCompleteStyle.InputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={inputChange}
          onKeyUp={inputChange}
          onKeyDown={dropDownKeyControl}
        />
        <div className={AutoCompleteStyle.deleteBtn}>
          &times;
        </div>
      </div>
  ...
  )
}
```

<br><p>hasText가 true이면 DrapDown 컴포넌트를 실행하여 화면에 자동완성 리스트를 표시해주고, 아니라면 화면에 표시안되게 만들었습니다.</p>

```
function AutoComplete() {
  ...
  return (
    ...
      {hasText && (
        <DropDown
          dropDownOptions={dropDownOptions}
          autoCompleteClick={autoCompleteClick}
          selectedOptionIdx={selectedOptionIdx}
        />
      )}
    ...
  )
}
```

<br>

## ClickToEdit.js
<img src='https://user-images.githubusercontent.com/88726990/152976876-9268bede-e45e-4a7d-be63-b5c65f98ba90.gif'/>
<p>MyInput 컴포넌트를 생성하여 ClickToEdit 컴포넌트의 자식 컴포넌트로 사용합니다.</p>
<p>value를 인수로 받는데, 이는 name값 또는 age값이고, changeValue는 name값과 age값을 변경하는 함수입니다.</p>
<p>컴포넌트를 2개로 구분하여, 코드의 가독성을 높였습니다.</p>

```
function MyInput({ value, changeValue }) {
  ...
```

<br><p>MyInput 컴포넌트는 input관련된 기능입니다.</p>
<p>value를 인수로 받는데, 이는 name값 또는 age값이고, changeValue는 name값과 age값을 변경하는 함수입니다.</p>
<p>input 입력값(value)을 newValue변수에 값을 넣고, newValue값 변경 함수를 선언합니다.</p>

```
function MyInput({ value, changeValue }) {
  const [editOn, setEditOn] = useState(false)
  const [newValue, setNewValue] = useState(value)
  ...
}
```

<br><p>editOnClick메서드가 실행되면, edit모드가 활성화(true) 되어 수정을 활성화시킵니다.</p>
<p>EditOffClick메서드가 실행되면, edit모드를 비활성화(false)로 만들어 수정을 비활성화시킵니다.</p>
<p>props로 받은 changeValue는 setName또는 setAge함수이며, newValue값을 가집니다.</p>

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

<br><p>handleInputChange메서드는 input에 입력한 값(event.target.value)을 newValue에 값을 부여합니다.</p>
<p>여기서 newValue에 값을 부여해도, EditOffClick메서드에 의해 changeValue 함수가 실행되지 않으면 값이 변경되지 않습니다.</p>
<p>inputEnter가 실행되어, 입력값이 엔터키와 빈 문자열이 입력되었을 경우에 EditOffClick 메서드를 실행하여 수정을 비활성화합니다.</p>

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

<br><p><label>태그를 사용하여 input안에 입력된 문자없이 input태그를 클릭해도 수정이 활성화 됩니다.</p>
<p><input>태그 이외의 다른곳을 클릭한다면, EditOffClick메서드가 실행되어 수정이 비활성화 됩니다.</p>
<p>키보드가 눌렸다가 떼지면서 inputEnter가 실행되어, 입력값이 엔터키와 빈 문자열이 입력되었을 경우에 EditOffClick 메서드를 실행하여 수정을 비활성화합니다.</p>
<p>나머지 className은 해당 태그의 CSS를 적용시키기위해 사용했다.</p>

```
function MyInput({ value, changeValue }) {
  ...
  return (
      <label
        className={`${ClickToEditStyle.inputBox} ${
          editOn ? ClickToEditStyle.focused : ""
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

<br><p>화면에 표시할 초기값으로 Default객체를 생성합니다.</p>
<p>ClickToEdit 컴포넌트에 Default의 키값을 각 name과 age에 넣는다.</p>
<p></p>

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
