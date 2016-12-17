import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: `
        <GridLayout columns="auto" rows="auto" (tap)="tappedLayout()">
            <Label text="123-123-1234" color="blue" (tap)="tappedLabel()"></Label>
        </GridLayout>`,
})
export class AppComponent {
    layout: number = 0;
    label: number = 0;

    public tappedLayout(): void {
        this.layout++;
        console.log(`Layout Taps: ${this.layout}`);
    }

    public tappedLabel(): void {
        this.label++;
        console.log(`Label Taps: ${this.label}`);
    }
}
