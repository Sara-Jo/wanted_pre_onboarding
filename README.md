# 원티드 프리온보딩 코스

## [구현 화면 보기](https://sara-jo.github.io/wanted_pre_onboarding/)

## Toggle.js

### 핵심요소

- `const [isBasic, setIsBasic] = useState(true);`
  - useState를 사용하여 '기본'이 선택되어 있는지, '상세'가 선택되어 있는지 상태를 관리하도록 했다.
  - 토글버튼에 onClick을 적용하여 클릭할 때마다 `isBasic` 상태가 반전되도록 했다. => `setIsBasic(!isBasic)`
  - `isBasic`의 상태에 따라 CSS를 다르게 적용하여 토글버튼 클릭 시 배경컬러와 폰트컬러가 바뀌도록 했다.

### 부가요소

- `transition: 0.4s ease-out;`
  - 활성화된 버튼을 표시하는 흰색 배경에 transition을 적용하여 슬라이드 애니메이션을 구현하였다.

### 어려웠던 점

- 처음에 `isBasic`의 상태에 따라 기본/상세 영역의 배경색이 바뀌도록 했는데, 이렇게 적용하니 슬라이드 애니메이션을 구현할 수 없었다.
- 흰색 영역을 `ActiveBackground` 컴포넌트로 만들고 `isBasic`의 상태에 따라 transform을 다르게 적용했더니 애니메이션 구현에 성공했다.

---

## Tab.js

### 핵심요소

- `const [activeTab, setActiveTab] = useState("감자");`
  - useState로 현재 활성화 되어있는 탭을 관리하였다.
  - `activeTab`의 상태에 따라 CSS를 다르게 적용하여 폰트의 컬러와 탭아래 줄의 컬러가 바뀌도록 했다.

### 부가요소

- Toggle.js 와 마찬가지로 `transition: 0.4s ease-out;` 를 적용해주었다.

### 어려웠던 점

- 이것부터 만드려고 했다면 헤맸을텐데 Toggle.js를 먼저 구현하고나니 거기서 조금 더 발전된 형태여서 쉽게 구현할 수 있었다.

---

## Slider.js

### 핵심요소

- `const [percent, setPercent] = useState(50);`
  - useState로 퍼센트 값을 관리해주었다.
  - `<input>`에 `onChange`를 적용해주어 슬라이더를 이동할때마다 `setPercent`로 퍼센트값을 변경시켜주었다.

### 부가요소

- 버튼마다 `value`를 각각 1, 25, 50, 75, 100로 주고 `onClick` 시에 `percent`값을 해당 버튼의 `value`로 변경해주었다.
- 이 때, 버튼을 클릭하면 `percent`값 뿐만 아니라 슬라이더의 thumb도 함께 움직여야 하므로 `<input>`에 `value={percent}`를 적용해주었다.

### 어려웠던 점

- 가장 오래걸렸고 가장 어려웠던 항목이다.. 오히려 기능구현보다 CSS스타일링이 어려웠다.
- 슬라이더 인풋 중간중간에 각 지점을 알리는 점들을 넣어주어야 했는데, `position: absolute;`를 적용해 인풋 위에 겹쳐서 위치하도록 해주었고, 지점들마다 `isActive`라는 prop을 넘겨주어 각 지점을 넘겼는지 안넘겼는지를 판단해 컬러가 바뀌도록 설정했다.
- 버튼들을 일정한 간격으로 두기위해서 `justify-content: space-between;` 를 적용해주었는데, 실제 슬라이더 thumb의 위치와 살짝 맞지 않는 감이 있어서 이 부분은 보완해야할 것 같다.

---

## Input.js

### 핵심요소

- 핵심요소 구현은 간단했다. `<input type="email">`과 `<input type="password">`를 만들어주었다.

### 부가요소

- 이메일 형식에 맞는지 체크

  - 인풋에 입력되는 이메일 주소는 `const [email, setEmail] = useState('');`로 관리했다.
  - 인풋에 `onChange`를 적용하여 무언가가 입력될 때마다 입력값이 이메일 형식에 맞는지 체크하도록 했다. 체크 결과는 `ìsEmailValid`에 담아둔다.
  - `onBlur`를 적용하여 인풋에 있던 커서가 다른 곳으로 옮겨갈 경우에, `ìsEmailValid` 값으로 에러메시지를 띄울지 아닌지를 판단하게 된다.

- 비밀번호 숨기기 / 노출
  - `const [isPasswordHidden, setIsPasswordHidden] = useState(true);` 로 비밀번호를 숨길지 노출할지 상태를 관리한다.
  - 눈 아이콘을 누르면 `isPasswordHidden` 값이 반전되면서 인풋타입이 password 또는 text로 변경된다.

### 어려웠던 점

- 어려웠지만 구현하면서 재미있었던 항목이다.
- 가장 어려웠던것은 역시나 이메일 형식에 맞는지 체크하는 부분이었다. 체크표시는 이메일이 입력되는 도중에 변경되어야하고, 에러메시지는 커서를 이동할 때 변경되어야 하기 때문이다. 그래서 이메일 형식을 체크하는 `validater` 함수를 만들고, 체크표시는 `onChange`에 함수를 호출, 에러메시지는 `onBlur`에 함수를 호출하도록 구별을 두었다.

---

## Dropdown.js

### 핵심요소

- 선택창에 `input`을 넣어야 하기 때문에 `select`태그를 쓰지 않고 `div` 로 넣어주었다.
  - `const [toggle, setToggle] = useState(false);` 로 선택창이 열렸는지/닫혔는지 상태관리하며 토글을 구현하였다.
- `const [selectedItem, setSelectedItem] = useState("All Symbols");`
  - 선택지를 클릭하면 클릭된 선택지가 `selectedItem`에 담기고, `selectedItem`가 선택된 항목으로 드롭다운에 표시되도록 했다.

### 부가요소

- `const [inputText, setInputText] = useState("");`
  - 검색창에 `onChange`를 적용하여 검색하는 키워드를 `inputText`로 관리하였다.
  - 검색창에 값이 들어오면, 드롭다운 선택지 중 `inputText`를 포함하고 있는 선택지만 `filter`하고, `filter`된 선택지만 표시되도록했다.

### 어려웠던 점

- 처음에 검색기능이 정말 어려울것이라고 예상했었는데, 예상했던것보다는 `filter`로 간단하게 구현할 수 있었다.
- 단, `includes`를 쓸 때 소문자/대문자 처리를 동일하게 해주는것을 주의해야 한다. 처음에 제대로 `filter` 한 것 같은데도 자꾸 동작이 제대로 되지 않아 답답했는데, 알고보니 선택지는 대문자였고 검색값은 소문자로 입력한 것이 원인이였다.
