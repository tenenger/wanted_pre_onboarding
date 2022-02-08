import { useState } from "react";
import ClickToEditStyle from "./css/ClickToEdit.module.css";

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
  return (
    <div
      className={`${ClickToEditStyle.inputBox} ${
        editOn && `${ClickToEditStyle.focused}`
      }`}
      onClick={editOnClick}
    >
      {editOn ? (
        <input
          type="text"
          value={newValue}
          onBlur={EditOffClick} //input이외에 다른곳을 클릭하면 onBlur이벤트함수가 실행된다.
          onChange={handleInputChange}
          onKeyUp={(event) => {
            inputEnter(event);
          }}
          className={ClickToEditStyle.inputEdit}
        />
      ) : (
        <div>{newValue}</div>
      )}
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
    </div>
  );
}
export default ClickToEdit;
