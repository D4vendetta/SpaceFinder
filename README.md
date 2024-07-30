
# ⌛공강 시간 활용하기 SPACE FINDER⌛<br>

<div align="center">
  <img src = "https://github.com/user-attachments/assets/cc1ce885-9614-43d4-b007-6474fb0379c1" width = "700" /> <br>
  <b>실시간으로 대학 내 빈 강의실을 확인할 수 있는 어플리케이션</b> <br>
  [FE]React Native [BE]MySQL, node.js [Server] AWS [Data Parsing] Python
</div>

## 🔍Introduction
### 작품 개요
본 프로그램은 대학교 내 강의실의 빈 시간을 활용해 재학생들이 편하게 휴식을 취하거나 과제, 인터넷 강의 이수 등 다양한 활동을 전개할 수 있도록 하고자 한다. 또한, 야외에서 빠르게 사용하는 것이 주된 목적이기 때문에 웹 페이지 형식이 아닌, 휴대폰으로 확인하기 용이하도록 스마트폰 어플리케이션 형식으로 구상했다.
<br>
### 작품 선정 배경
본교를 비롯한 대부분의 대학은 학생들의 휴식을 위한 다양한 공간을 마련해두고 있다. 하지만, 대학의 지리적 특성에 따라 이동에 시간이 소요되거나 수업과 수업 간 짧은 시간을 보내기 위한, 또는 집중이 필요한 소규모 모임 등과 같이 다양한 이유 등으로 필요로 하는 공간을 찾지 못하는 학생들이 많다.
따라서 이 문제를 해결하기 위해 대학의 가장 많은 부분을 차지하고 있는 강의실을 활용하고자 한다.

### 기능
- 날씨 조회 : OpenWeather API를 이용해 실시간으로 학교의 날씨와 기온, 간략한 날씨 설명을 확인할 수 있는 기능
- 일정 확인 : API에서 시간표와 현재 시간을 받아 다음 수업과 위치를 한 눈에 확인할 수 있는 기능
- 개인 시간표 조회 : 서버에 업로드된 개인의 일주일 치 강의 일정 및 위치, 교수명 등을 도표를 통해 시각적으로 확인할 수 있는 기능
- 실시간 빈 강의실 조회 : 현재 요일과 시간 기준 실시간으로 빈 강의실 확인 및 강의실별 금일 진행되는 수업을 조회할 수 있는 기능
- 건물별 강의실 시간표 조회 : 각 건물에 위치한 강의실별 일주일치 수업 시간표를 도표를 통해 시각적으로 조회할 수 있는 기능
<br>
<div align="center">
  <img src = "https://github.com/user-attachments/assets/d75de325-b82d-4455-a9e4-283a0caf53c9" width = "800" />
  <img src = "https://github.com/user-attachments/assets/ff39b287-10f7-4e47-9c48-0521e61b2421" width = "800" />
  <img src = "https://github.com/user-attachments/assets/d9af61d4-7596-4079-8719-1d1fb8fc5c1d" width = "800" />
  <img src = "https://github.com/user-attachments/assets/202f3136-b929-4dff-93cd-980f78cc4859" width = "800" />
  <img src = "https://github.com/user-attachments/assets/657730ea-210b-467f-beff-04fda4b9fa5e" width = "800" />
  <img src = "https://github.com/user-attachments/assets/2216eb60-eb09-481f-9f80-7b0f3bf33fde" width = "800" />
  <img src = "https://github.com/user-attachments/assets/b70c25aa-ad00-4837-8118-32b4798e3fcc" width = "800" />
</div>

## 🗂️ Database <br>
<div align="center">
  <img src = "https://github.com/user-attachments/assets/3c0c37ba-83a3-4aa6-a01d-16b60cfdc859" width = "800" />
</div>

## 📜 Tech Stack
- Data-Parsing : Python
- Front-end : React Natives
- Back-end : Node.js, Express
- Server : AWS EC2, WinSCP, PuTTY
- Database : MySQL Workbench

<br>
