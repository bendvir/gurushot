import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentPage = 1;
  isOnScroll = false;
  direction = true; // scroll down
  barMenu=["Discover","Articles","Exhibitions","Partners"]

  @HostListener('mousewheel', ['$event']) onMousewheel(event) {
    if (!this.isOnScroll) {
      this.isOnScroll = true;
      if (event.deltaY < 0) {
        if (this.currentPage !== 1) {
          this.direction = false;
          this.currentPage--;
        }
      } else if (event.deltaY > 0) {
        if (this.currentPage !== 4) {
          this.direction = true;
          this.currentPage++;
        }
      }
      setTimeout(() => {
        this.isOnScroll = false;
      }, 1100);
      console.log("scroll", this.currentPage);
    }

  }
}
