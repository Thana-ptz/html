class PageOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
          <ion-toolbar>
            <ion-title>Page One</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <h1>Page One</h1>
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
    
        <ion-toolbar>
         <ion-item>
          <ion-back-button></ion-back-button>
          <ion-label>Default Buttons</ion-label>
          <ion-buttons slot="end"><ion-back-button></ion-back-button> End </ion-buttons>
         </ion-item>
        </ion-toolbar>
    
    
        <ion-content class="ion-padding">
        
          <ion-card color="dark">
             <ion-card-header>
               <ion-card-title>Card Title</ion-card-title>
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
