class PageOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="scroll-container">
  <img src="image/1.png" alt="Image 1">
  <img src="image/2.png" alt="Image 2">
  <img src="image/3.png" alt="Image 3">
</div>
        <ion-content class="ion-padding">
        <div class="scroll-container">
  <img src="image/1.png" alt="Image 1">
  <img src="image/2.png" alt="Image 2">
  <img src="image/3.png" alt="Image 3">
</div>
          <ion-nav-link router-direction="forward" component="page-two">
            <ion-button>Go to Page Two</ion-button>
          </ion-nav-link>
        </ion-content>
      `;
    }
  }
  class PageTwo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    
        <ion-content class="ion-padding">
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
        </ion-content>
      `;
    }
  }
  class PageThree extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>Page Three</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <h1>Page Three</h1>
        </ion-content>
      `;
    }
  }
  customElements.define('page-one', PageOne);
  customElements.define('page-two', PageTwo);
  customElements.define('page-three', PageThree);
