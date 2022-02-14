import { useState } from "react";
import ClickToEditStyle from "./css/ClickToEdit.module.css";

//MyInput 컴포넌트는 ClickToEdit 컴포넌트의 자식 컴포넌트이다.
//그래서 value를 전달 받는데 여기(value)에는 { name, age } 로 name상태값과 age상태값을 가지고 있다.
function MyInput({ value, changeValue, title }) {
  const [editOn, setEditOn] = useState(false); //edit모드 상태
  const [newValue, setNewValue] = useState(value); //출력값 상태

  const editOnClick = () => {
    //span태그를 클릭하면 edit모드가 활성화 되고 위의 useEffect에 의해 input창에 포커싱이 된다.
    setEditOn(true);
    console.log("on");
  };

  const editOffClick = () => {
    //input창이 아닌 다른 곳을 클릭하면 edit모드를 비활성화로 만든다.
    setEditOn(false);
    console.log("off");
    changeValue(newValue); //그리고 input창에 입력되어있는 값으로 newValue를 바꿔준다.
  };

  const handleInputChange = (event) => {
    setNewValue(event.target.value); //input에 입력한 값을 newValue에 담아둔다.
    //여기서 입력을 해준다고 바로바로 밑의 출력값이 변하지 않는다.
    //왜냐하면 handleBlur에 의해서 changeValue 함수가 실행되어야 값이 바뀌기 때문이다.
  };
  const inputEnter = (event) => {
    if (event.key === "Enter" && value !== "") {
      editOffClick();
    }
  };
  return (
    <div className={ClickToEditStyle.inputView}>
      <div>{title}</div>
      <input
        type="text"
        value={newValue}
        onClick={editOnClick}
        onBlur={editOffClick} //input이외에 다른곳을 클릭하면 onBlur이벤트함수가 실행된다.
        onChange={handleInputChange}
        onKeyUp={(event) => {
          inputEnter(event);
        }}
        className={`${ClickToEditStyle.inputBox} ${
          editOn ? ClickToEditStyle.focused : ""
        }`}
      />
    </div>
  );
}

function SubTitle({ value }) {
  const value_list = value.split(",");
  let arr = [];
  for (let i = 0; i < value_list.length; i += 2) {
    arr.push(`${value_list[i]} : ${value_list[i + 1]}`);
  }

  return (
    <div className={ClickToEditStyle.inputView}>
      <div className={ClickToEditStyle.view}>{arr.join(" / ")}</div>
    </div>
  );
}

const Default = {
  name: "이동규",
  age: 26,
};

function ClickToEdit() {
  const [name, setName] = useState(Default.name);
  const [age, setAge] = useState(Default.age);

  return (
    <div className={ClickToEditStyle.outer}>
      <h1 className={ClickToEditStyle.title}> ClickToEdit </h1>
      <MyInput
        title="이름"
        value={name}
        changeValue={(newName) => setName(newName)}
      />
      <MyInput
        title="나이"
        value={age}
        changeValue={(newAge) => setAge(newAge)}
      />
      <SubTitle value={`이름,${name},나이,${age}`} />
    </div>
  );
}
export default ClickToEdit;
