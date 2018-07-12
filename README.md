# **프로젝트 구성**

Givenness 
 => CalypsoAPI Project
 => CalypsoFrontWeb Project

프로젝트명만 혼동 있을수있으니 그냥 그대로 유지

디자인은 부트스트랩 템플릿  MIT 라이센스

퍼블리싱 된 소스코드를 가져와서 일일이 수작업으로 조금씩 떼어서 모듈 단위로 나누는중 

## /src

-  /asset   
 정적파일  bootstrap jquery 등등 퍼블리셔가 작업한 내용들이 담겨져있음 

- /component
이게 내가 작업해서 템플릿으로 분리해놓은부분 
지금은 단순히 복붙으로 모듈을 쪼개어 놓은 수준이다 

****앞으로 필요한 작업** : 단순 복붙으로 분리된 모듈들을 재활용 가능하게 props 를 추가해서 
다시 활용할수 있는 수준으로 개선해야함!!**

- App.js 
 여기에 단순히 /component 에 있는 모듈들을 통합해놓은 곳이다.
 소스코드 리뷰를 할때는 App.js에서 시작할것 


## /public

- index.html 
여기에 보면 이것저것 js 스크립트 소스코드나 meta로 더럽게 붙혀놓은게 많은데
퍼블리싱된 소스코드에 이해도가 떨어져서 **일단 작동하게 하려고 전부 때려박은것** 
가능하다면  <script></script> 의 소스코드들을 /component 아래 모듈들에 적용시킬 것 !

- /template
이쪽 소스코드는 퍼블리싱 된 소스코드들인데 index.html 쪽 소스코드만 모듈화 됬고
나머지는 작업 전혀 안된상태
**여기 소스코드들은 앱실행시 React프로젝트와 아무런 연결이 안되있음**
[퍼블리싱된 디자인 보러가기](https://w3layouts.com/best-pets-animals-category-bootstrap-responsive-web-template/)  



Login 이후 사용할수 있는 MyPage 디자인 템플릿 
[여기](https://www.creative-tim.com/product/light-bootstrap-dashboard-react)


