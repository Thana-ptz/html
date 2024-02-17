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
    <ion-content>
        
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
</ion-content>
        
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
