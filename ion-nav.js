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
    
        
         <ion-nav-link router-direction="forward" component="page-one">
              <ion-button>Back</ion-button>
         </ion-nav-link>
          <ion-card color="dark">
             <ion-card-header>
               <ion-card-title><p>HELLO</p></ion-card-title>
               <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
             </ion-card-header>

             <ion-card-content> Card Content </ion-card-content>
         </ion-card>
         
          <div>
            <ion-nav-link router-direction="forward" component="page-three">
              <ion-button>Go to Page Three</ion-button>
            </ion-nav-link>
          </div>
        
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
