import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";
import { stringify } from "querystring";

@Directive({
  selector: "[appColorDirectiveTs]",
})
export class ColorDirective implements OnInit {
  @HostListener("window:keydown.arrowup", ["$event"])
  private changeColorArrowUp() {
    this.el.nativeElement.style.color = "red";
  }
  @HostListener("window:keydown.arrowdown", ["$event"])
  private changeColorArrowDown() {
    this.el.nativeElement.style.color = "blue";
  }
  @Input("appColorDirectiveTs") private Colored: {
    color: string;
  };

  constructor(private el: ElementRef<any>) {}
  ngOnInit(): void {
    console.log("test");
  }
}
