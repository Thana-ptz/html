class PageOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    
        
          <ion-nav-link router-direction="forward" component="page-two">
            
        <div class="scroll-container">
          <img src="https://html-five-phi.vercel.app/image/1.png" alt="Image 1">
          <img src="https://html-five-phi.vercel.app/image/2.png" alt="Image 2">
          <img src="https://html-five-phi.vercel.app/image/3.png" alt="Image 3">
        </div>
          </ion-nav-link>
        
      `;
    }
  }
  class PageTwo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    
        
         <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#"></a>
  <a href="#"></a>
  <a href="#"></a>
  <a href="#"></a>
</div>
​
<div id="main">
  <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
</div>
​

        
      `;
    }
  }
  class PageThree extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        
          <h1>Page Three</h1>
        
      `;
    }
  }
  customElements.define('page-one', PageOne);
  customElements.define('page-two', PageTwo);
  customElements.define('page-three', PageThree);

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
​
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
